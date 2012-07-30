#!/usr/bin/env node

var fs = require('fs');
var reference = require("..");

var lint_ref = function(reference) {
    var symbolizers = reference.symbolizers;

    console.log('Missing doc properties');
    console.log('----------------------');
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
    console.log('----------------------');
    console.log(missing_doc_properties, 'missing doc properties');
    console.log('----------------------');

    console.log('Missing default value');
    console.log('----------------------');
    var missing_doc_properties = 0;
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
                missing_doc_properties++;
            }
        }
    }
    console.log('----------------------');
    console.log(missing_doc_properties, 'missing default-value');
}

console.log('\n\n---> 2.0.1');
lint_ref(reference.version['2.0.1']);

console.log('\n\n---> 2.1.0');
lint_ref(reference.version['2.1.0']);

console.log('\n\n---> latest');
lint_ref(reference.version['latest']);
