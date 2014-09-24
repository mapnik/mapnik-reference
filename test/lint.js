#!/usr/bin/env node

var fs = require('fs');
var references = require("..");

var lint_ref = function(ver) {
    var ref = references.version[ver]
    var symbolizers = ref.symbolizers;

    var missing_doc_properties = 0;
    var cursim = '';
    for (var symbolizer in symbolizers) {
        if (symbolizer === 'colors') continue;
        for (var prop in symbolizers[symbolizer]) {
            if (!symbolizers[symbolizer][prop].doc) {
                if (symbolizer !== cursim) {
                    cursim = symbolizer;
                    console.log(symbolizer);
                }
                console.log('- ' + prop);
                missing_doc_properties++;
            }
        }
    }
    if (missing_doc_properties > 0) console.log(missing_doc_properties, 'missing doc properties',ver);

    var miss_default_value = 0;
    var cursim = '';
    for (var symbolizer in symbolizers) {
        if (symbolizer === 'colors') continue;
        for (var prop in symbolizers[symbolizer]) {
            if (symbolizers[symbolizer][prop]['default-value'] === undefined) {
                if (symbolizer !== cursim) {
                    cursim = symbolizer;
                    console.log(symbolizer);
                }
                console.log('- ' + prop);
                miss_default_value++;
            }
        }
    }
    if (miss_default_value > 0) console.log(miss_default_value, 'missing default-value',ver);
}

for (var key in references.version) {
    lint_ref(key);
};
