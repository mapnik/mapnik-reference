var path = require('path');
var semver = require('semver');
var fs = require('fs');

var getVersions = function () {
    var names = fs.readdirSync(__dirname);
    return names.filter(semver.valid);
};
var versions = semver.sort(getVersions());

// These older versions don't have the datasource info
var no_datasources = [
  '2.0.0',
  '2.0.1',
  '2.0.2',
  '2.1.0',
  '2.1.1',
  '2.2.0'
]
module.exports.versions = versions;
module.exports.latest = versions[versions.length - 1];

var getSatisfyingVersion = function (wanted) {
    var version = semver.maxSatisfying(versions, wanted), parsed;
    if (!version) {
        try {
            parsed = semver(wanted);
            parsed.patch = 'x';
            version = semver.maxSatisfying(versions, parsed.format());
        } catch (err) {
            version = null;
        }
    }
    return version;
};

module.exports.load = function(wanted) {
    var version = getSatisfyingVersion(wanted);
    if (!version) {
        throw new Error("Unknown mapnik-reference version: '" + wanted + "'");
    }
    var ref = require(path.join(__dirname, version, 'reference.json'));
    if (no_datasources.indexOf(version) <= -1) {
        ref.datasources = require(path.join(__dirname, version, 'datasources.json')).datasources;
    }
    return ref;
}
