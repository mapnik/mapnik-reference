/*
THIS FILE IS GENERATED PROGAMMATICALLY. DO NOT MODIFIY DIRECTLY.
Modify index._ instead and run node generate.js
*/

var path = require('path');
var semver = require('semver');


var versions = [
    '2.0.0',
    '2.0.1',
    '2.0.2',
    '2.1.0',
    '2.1.1',
    '2.2.0',
    '2.3.0',
    '3.0.0',
    '3.0.3',
    '3.0.6'
];

// These older versions don't have the datasource info
var no_datasources = [
    '2.0.0',
    '2.0.1',
    '2.0.2',
    '2.1.0',
    '2.1.1',
    '2.2.0'
];
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

var loadBrowser = function (version) {
    var versionRefs = {
       '2.0.0': {
            'ref': require('./2.0.0/reference.json'),
            'datasources': null
        },
       '2.0.1': {
            'ref': require('./2.0.1/reference.json'),
            'datasources': null
        },
       '2.0.2': {
            'ref': require('./2.0.2/reference.json'),
            'datasources': null
        },
       '2.1.0': {
            'ref': require('./2.1.0/reference.json'),
            'datasources': null
        },
       '2.1.1': {
            'ref': require('./2.1.1/reference.json'),
            'datasources': null
        },
       '2.2.0': {
            'ref': require('./2.2.0/reference.json'),
            'datasources': null
        },
       '2.3.0': {
            'ref': require('./2.3.0/reference.json'),
            'datasources': require('./2.3.0/datasources.json').datasources
        },
       '3.0.0': {
            'ref': require('./3.0.0/reference.json'),
            'datasources': require('./3.0.0/datasources.json').datasources
        },
       '3.0.3': {
            'ref': require('./3.0.3/reference.json'),
            'datasources': require('./3.0.3/datasources.json').datasources
        },
       '3.0.6': {
            'ref': require('./3.0.6/reference.json'),
            'datasources': require('./3.0.6/datasources.json').datasources
        }
    };

    var ref = versionRefs[version].ref;
    if (no_datasources.indexOf(version) <= -1) {
        ref.datasources = versionRefs[version].datasources;
    }

    return ref;
};

var load = function (version) {
    var ref = require(path.join(__dirname, version, 'reference.json'));
    if (no_datasources.indexOf(version) <= -1) {
        ref.datasources = require(path.join(__dirname, version, 'datasources.json')).datasources;
    }

    return ref;
};

module.exports.load = function(wanted) {
    var version = getSatisfyingVersion(wanted),
        ref;
    if (!version) {
        throw new Error("Unknown mapnik-reference version: '" + wanted + "'");
    }
    if (process.browser) {
        ref = loadBrowser(version);
    }
    else {
        ref = load(version);
    }

    return ref;
}
