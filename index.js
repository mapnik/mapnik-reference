var path = require('path');

var versions = [
 '2.0.0',
 '2.0.1',
 '2.0.2',
 '2.1.0',
 '2.1.1',
 '2.2.0',
 '2.3.0',
 '3.0.0',
 '3.0.10',
 '3.0.3',
 '3.0.4',
 '3.0.5',
 '3.0.6',
 '3.0.7',
 '3.0.9'
];

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

module.exports.load = function(version) {
    if (versions.indexOf(version) <= -1) {
	throw new Error("Unknown mapnik-reference version: '" + version + "'");
    }
    var ref = require(path.join(__dirname, version, 'reference.json'));
    if (no_datasources.indexOf(version) <= -1) {
	ref.datasources = require(path.join(__dirname, version, 'datasources.json')).datasources;
    }
    return ref;
}
