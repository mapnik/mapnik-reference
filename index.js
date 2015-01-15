// Load all stated versions into the module exports

var v = module.exports.version = {
  '2.0.0': require('./2.0.0/reference.json'),
  '2.0.1': require('./2.0.1/reference.json'),
  '2.0.2': require('./2.0.2/reference.json'),
  '2.1.0': require('./2.1.0/reference.json'),
  '2.1.1': require('./2.1.1/reference.json'),
  '2.2.0': require('./2.2.0/reference.json'),
  '2.3.0': require('./2.3.0/reference.json'),
  '3.0.0': require('./3.0.0/reference.json')
};

v['2.3.0'].datasources = require('./2.3.0/datasources.json').datasources;
v['3.0.0'].datasources = require('./3.0.0/datasources.json').datasources;


