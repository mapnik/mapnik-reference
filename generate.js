var fs = require('fs'),
    path = require('path'),
    semver = require('semver'),
    _ = require('lodash');

if (!fs.existsSync('index.js')) {
    var template = _.template(fs.readFileSync(path.join(__dirname, 'index._'), 'utf-8'));

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
    ];

    fs.writeFileSync(path.join(__dirname, 'index.js'), template({
        'versions': versions,
        'no_datasources': no_datasources
    }));
}
