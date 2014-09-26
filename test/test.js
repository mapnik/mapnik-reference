var assert = require('assert');
var mapnikref = require('mapnik-reference').version.latest;

describe('datasources', function() {
    it('show provide metadata', function() {
        var spec = mapnikref.datasources['postgis'];
        assert.ok(spec['table'].type,'string');
        assert.equal(spec['table'].required,true);
    });
});