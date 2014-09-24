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
                console.log('missing type for',symbolizer+'-'+prop,ver);
            }
            if (!sym.doc) {
                console.log('missing doc for',symbolizer+'-'+prop,ver);
            }
            if (sym['default-value'] === undefined) {
                console.log('missing default-value for',symbolizer+'-'+prop,ver);
            }
        }
    }
}

for (var key in references.version) {
    lint_ref(key);
};
