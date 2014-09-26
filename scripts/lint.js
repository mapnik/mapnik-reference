#!/usr/bin/env node

var fs = require('fs');
var references = require("..");

var lint_ref = function(ver) {
    var ref = references.version[ver]
    var symbolizers = ref.symbolizers;
    for (var symbolizer in symbolizers) {
        //console.log(symbolizer);
        for (var prop in symbolizers[symbolizer]) {
            var sym = symbolizers[symbolizer][prop];
            var group_name = symbolizer;
            if (group_name == "markers") {
                group_name = 'marker';
            }
            if (group_name != 'map' &&
                group_name != '*' &&
                sym.css.indexOf(group_name) == -1)
                console.log('invalid prefix for property',sym.css,ver);
            if (!sym.type) {
                console.log('missing type for',sym.css,ver);
            }
            if (!sym.doc) {
                console.log('missing doc for',sym.css,ver);
            }
            // strictness with >= 3.x going forward
            if (+ver.split('.')[0] >= 3) {
                if (sym.doc && sym.doc.slice(-1) != '.') {
                    console.log('missing ending period for doc of',sym.css);
                }
                if (sym['default-value'] === undefined) {
                    console.log('missing default-value for',sym.css,ver);
                }
                if (sym['default-meaning'] === undefined) {
                    console.log('missing default-meaning for',sym.css,sym['default-meaning']);
                } else {
                    if (sym['default-meaning'] != ""  && sym['default-meaning'].slice(-1) != '.') {
                        console.log('missing ending period for doc of',sym.css,sym['default-meaning']);
                    }
                }
                if (sym.required === true) {
                    if (sym['default-value'] != "none") {
                        console.log('expected default-value of none',sym.css,sym['default-value']);
                    }
                    if (sym['default-meaning'] != "") {
                        console.log('expected default-meaning of ""',sym.css,sym['default-meaning']);
                    }
                }
            }
        }
    }
}


for (var key in references.version) {
    lint_ref(key);
};
