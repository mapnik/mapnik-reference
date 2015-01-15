var assert = require('assert');
var mapnikref = require('../');
var glob = require('glob');
var path = require('path');

describe('datasources', function() {
    mapnikref.versions.forEach(function(key) {
        var spec = mapnikref.load(key);
        if (spec.datasources) {
            it('show provide metadata for '+key, function() {
                var ds_spec = spec.datasources['postgis'];
                assert.ok(ds_spec['table'].type,'string');
                assert.equal(ds_spec['table'].required,true);
            });
        } else {
            it.skip('show provide metadata for '+key, function() {});
        }
    });
});

describe('styles', function() {
    mapnikref.versions.forEach(function(key) {
        (function(key) {
            it('report correct version for '+key, function() {
                assert.equal(mapnikref.load(key).version,key);
            });
        })(key)
    })

    it('reveal new property in Mapnik 2.3.0', function() {
        assert.ok(mapnikref.load('2.3.0').symbolizers.markers['geometry-transform']);
        assert.ok(!mapnikref.load('2.0.0').symbolizers.markers['geometry-transform']);
    });
});


describe('versions', function() {
    it('show report all versions', function() {
        var versions = glob.sync("./*.*.*");
        versions = versions.map(function(e) { return path.basename(e) })
        assert.deepEqual(versions,mapnikref.versions);
    });
});


