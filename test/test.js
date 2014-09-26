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

describe('styles', function() {
    for (var key in references.version) {
        var spec = references.version[key];
        it('show report correct version for '+key, function() {
            assert.equal(spec.version,key);
        });
    }

    it('show reveal new property in Mapnik 2.3.0', function() {
        assert.ok(references.version['2.3.0'].symbolizers.markers['geometry-transform']);
        assert.ok(!references.version['2.0.0'].symbolizers.markers['geometry-transform']);
    });

});