var assert = require('assert');
var references = require('mapnik-reference');

describe('datasources', function() {
    for (var key in references.version) {
        var spec = references.version[key];
        if (spec.datasources) {
            it('show provide metadata for '+key, function() {
                var ds_spec = spec.datasources['postgis'];
                assert.ok(ds_spec['table'].type,'string');
                assert.equal(ds_spec['table'].required,true);
            });
        } else {
            it.skip('show provide metadata for '+key, function() {});
        }
    }
});