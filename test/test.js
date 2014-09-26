var assert = require('assert');
var references = require('../');
var glob = require('glob');
var path = require('path');

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
        (function(key) {
            it('show report correct version for '+key, function() {
                assert.equal(references.version[key].version,key);
            });
        })(key)
    }

    it('show reveal new property in Mapnik 2.3.0', function() {
        assert.ok(references.version['2.3.0'].symbolizers.markers['geometry-transform']);
        assert.ok(!references.version['2.0.0'].symbolizers.markers['geometry-transform']);
    });
});


describe('versions', function() {
    it('show report all versions', function() {
        var versions = glob.sync("./*.*.*");
        var versions2 = Object.keys(references.version);
        versions = versions.map(function(e) { return path.basename(e) })
        assert.deepEqual(versions,versions2);
    });
});


