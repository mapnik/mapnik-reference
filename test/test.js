var assert = require('assert');
var mapnikref = require('../');
var glob = require('glob');
var path = require('path');
var semver = require('semver');

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
        assert.deepEqual(semver.sort(versions),mapnikref.versions);
    });
});



describe('load', function() {
    it('should load requested version if exists', function() {
        var spec = mapnikref.load('2.0.2');
        assert.equal(spec.version, '2.0.2');
    });

    it('should load closer patch version if requested patch does not exist', function() {
        var spec = mapnikref.load('2.0.12');
        assert.equal(spec.version, '2.0.2');
    });

    it('should support x as patch', function() {
        var spec = mapnikref.load('2.0.x');
        assert.equal(spec.version, '2.0.2');
    });

    it('should support x as minor', function() {
        var spec = mapnikref.load('2.x.x');
        assert.equal(spec.version, '2.3.0');
    });

    it('should support missing patch', function() {
        var spec = mapnikref.load('2.3');
        assert.equal(spec.version, '2.3.0');
    });

    it('should support major only', function() {
        var spec = mapnikref.load('2');
        assert.equal(spec.version, '2.3.0');
    });

    it('should support range', function() {
        var spec = mapnikref.load('2.x < 3');
        assert.equal(spec.version, '2.3.0');
    });

    it('should support *', function() {
        var spec = mapnikref.load('*');
        assert.equal(spec.version, mapnikref.latest);
    });

    it('should throw if requested minor does not exist', function() {
        assert.throws(function () {
            mapnikref.load('2.12.0');
        }, /Unknown mapnik-reference version/);
    });

    it('should throw for invalid version', function() {
        assert.throws(function () {
            mapnikref.load('invalid');
        }, /Unknown mapnik-reference version/);
    });
});


