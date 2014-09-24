#!/usr/bin/env node

var fs = require('fs');
var references = require("..");

var lint_ref = function(ver) {
    var ref = references.version[ver]
    var symbolizers = ref.symbolizers;
    for (var symbolizer in symbolizers) {
        for (var prop in symbolizers[symbolizer]) {
            var sym = symbolizers[symbolizer][prop];
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
