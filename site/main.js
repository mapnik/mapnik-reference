'use strict';
(function (window) {
    var UI = function (version) {
        this.menu = document.querySelector('#menu .main');
        this.container = document.querySelector('#symbolizers');
        this.versionLabel = document.querySelector('#version');
        this.fetchFromHash() || this.fetch(version);
        var self = this;
        window.addEventListener('hashchange', function () {self.fetchFromHash();});
    };
    UI.versions = ['3.0.6', '3.0.3', '3.0.0', '2.3.0', '2.2.0', '2.1.0', '2.0.0'];
    UI.prototype = {

        isArray: Array.isArray || function (obj) {
            return (Object.prototype.toString.call(obj) === '[object Array]');
        },

        inArray: function (array, el) {
            for (var i = 0; i < array.length; i++) if (array[i] === el) { return true; }
            return false;
        },

        node: function (what, attrs, parent, content) {
            var el = document.createElement(what);
            for (var attr in attrs) el[attr] = attrs[attr];
            if (parent) parent.appendChild(el);
            if (content) el.innerHTML = content;
            return el;
        },

        fetch: function (version) {
            var self = this;
            this.version = version || window.UI.versions[0];
            nanoajax.ajax('./' + this.version + '/reference.json', function (code, content) {
                self.build(JSON.parse(content));
            });
            return true;
        },

        fetchFromHash: function () {
            var newVersion = window.location.hash.split('/')[0].replace('#', '');
            if (newVersion !== this.version && this.inArray(UI.versions, newVersion)) return this.fetch(newVersion);
        },

        build: function (ref) {
            this.container.innerHTML = '';
            this.menu.innerHTML = '';
            this.versionLabel.innerHTML = this.version;

            var hasStyleCss = false,
                hasLayerCss = false;

            for (var id in ref.style) {
                if (ref.style[id].hasOwnProperty('css')) {
                    hasStyleCss = true;
                    break;
                }
            }
            for (var id in ref.layer) {
                if (ref.layer[id].hasOwnProperty('css')) {
                    hasLayerCss = true;
                    break;
                }
            }

            if (hasStyleCss) {
                var styleMenu = this.node('h5', {className: 'headerBlock'}, this.menu);
                this.node('a', {href: '#' + this.version + '/style'}, styleMenu, 'Style');
            }
            if (hasLayerCss) {
                var layerMenu = this.node('h5', {className: 'headerBlock'}, this.menu);
                this.node('a', {href: '#' + this.version + '/layer'}, layerMenu, 'Layer');
            }
            var symbolizerMenu = this.node('h5', {className: 'headerBlock'}, this.menu);
            this.node('a', {href: '#' + this.version + '/symbolizers'}, symbolizerMenu, 'Symbolizers');

            if (hasStyleCss) {
                var styleHeading = this.node('h2', {}, this.container);
                this.node('a', {id: this.version + '/style', href: '#' + this.version + '/style'}, styleHeading, 'Style');
                var styleContainer = this.node('div', {className: 'symbolizer'}, this.container);
                for (var id in ref.style) {
                    if (ref.style[id].hasOwnProperty('css')) {
                        this.addRule(id, ref.style[id], styleContainer);
                    }
                }
            }

            if (hasLayerCss) {
                var layerHeading = this.node('h2', {}, this.container);
                this.node('a', {id: this.version + '/layer', href: '#' + this.version + '/layer'}, layerHeading, 'Layer');
                var layerContainer = this.node('div', {className: 'symbolizer'}, this.container);
                for (var id in ref.layer) {
                    if (ref.layer[id].hasOwnProperty('css')) {
                        this.addRule(id, ref.layer[id], layerContainer);
                    }
                }
            }

            var symbolizerHeading = this.node('h2', {}, this.container);
            this.node('a', {id: this.version + '/symbolizers', href: '#' + this.version + '/symbolizers'}, symbolizerHeading, 'Symbolizers');
            for (var id in ref.symbolizers) this.addSymbolizer(id, ref.symbolizers[id]);

            this.addVersions();
            if (window.location.hash) window.location = window.location;  // we have rebuild the DOM, help the browser find the North again.
        },

        addVersions: function () {
            var container = this.node('div', {className: 'versions'}, this.menu);
            this.node('h5', {}, container, 'Versions');
            for (var i = 0; i < UI.versions.length; i++) this.addVersionLink(UI.versions[i], container);
        },

        addVersionLink: function (version, parent) {
            var current = version === this.version ? ' current' : '';
            this.node('a', {className: 'block' + current, href: '#' + version + '/'}, parent, version);
        },

        anchor: function (id) {
            return this.version + '/' + id;
        },

        addSymbolizer: function (id, rules) {
            this.node('a', {className: 'block', href: '#' + this.anchor(id)}, this.menu, id);
            this.addSymbolizerBlock(id, rules);
        },

        addSymbolizerBlock: function (id, rules) {
            var container = this.node('div', {className: 'symbolizer'}, this.container);
            var section = this.node('h2', {}, container);
            this.node('a', {href: '#' + this.anchor(id), id: this.anchor(id)}, section, id);
            for (var ruleId in rules) this.addRule(ruleId, rules[ruleId], container);
        },

        addRule: function (id, props, parent) {
            var title = this.node('h3', {}, parent);
            id = props.css || id;
            this.node('a', {id: this.anchor(id), href: '#' + this.anchor(id)}, title, id);
            this.node('span', 'type', title, '=' + (this.isArray(props.type) ? 'list' : props.type));
            if (props.expression) this.node('span', {className: 'expressions-support'}, title, 'expressions');
            if (props.status && props.status !== 'stable') this.node('span', {className: 'status ' + props.status}, title, props.status);
            this.node('p', {}, parent, props.doc.replace(/`([^`]*)`/g, '<b>$1</b>'));
            var defaultValue = this.node('p', {}, parent, '<strong>Default: </strong>' + (props['default-value'] || 'none'));
            if (props['default-meaning']) this.node('em', {}, defaultValue, ' (' + props['default-meaning'] + ')');
            if (this.isArray(props.type)) this.node('p', '', parent, '<strong>Values: </strong>' + props.type.join(', '));
            if (props.functions) this.node('p', '', parent, '<strong>Functions: </strong>' + props.functions.join(', '));
            if (props.range) this.node('p', '', parent, '<strong>Range: </strong>' + props.range);
        }

    };
    UI.init = function (version) {
        // if (!version && window.location.hash && window.location.hash.indexOf('/') !== -1) {
        //     version = window.location.hash.split('/')[0];
        // }
        return new UI(version);
    };
    window.UI = UI;
})(window);
