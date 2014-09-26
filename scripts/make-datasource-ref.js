var fs = require('fs');
var path = require('path');
var util = require('util');
var assert = require('assert');
var references = require("..");
var existsSync = require('fs').existsSync || require('path').existsSync;

var options = {
    debug:false
};

// TODO - add support for includes?
js_numbers = {
  'float':'number',
  'unsigned':'number',
  'string':'string',
  'boolean':'boolean',
}

function validate_prop(types,prop_name,prop_value) {
    Object.keys(types).forEach(function(key) {
        var type_def = types[key];
        if (type_def.required) {
            assert.ok(key in prop_value,key+' not defined for '+ prop_name);
        }
        if (type_def.values) {
            assert.ok(type_def.values.indexOf(prop_value.type) > -1,prop_value.type+' not found in '+ type_def.values);
        }
        if (prop_value['default-value']) {
           assert.ok(typeof(prop_value['default-value']) === js_numbers[prop_value.type],typeof(prop_value['default-value'])+' not === '+prop_value.type+ ' for '+prop_name)
        }
    });
}

function process(data) {
    // expand gyp-like variables to build out entire file
    Object.keys(data.datasources).forEach(function(key) {
        var ds = data.datasources[key];
        // handle commented sections
        if (key[0] == '#') {
            delete data.datasources[key];
        } else {
            if (options.debug) console.warn('Handling '+key)
            Object.keys(ds).forEach(function(prop) {
                var match = ds[prop].match && ds[prop].match(/<@\((.+)\)/);
                if (match && match[1]) {
                    ds[prop] = data.variables[prop];
                    if (options.debug) {
                        console.warn('  handling variable for "'+prop+'"');
                    }
                } else {
                    if (options.debug) {
                        console.warn('  handling raw object for "'+prop+'"');
                    }
                }
                validate_prop(data.types,prop,ds[prop]);
            });
        }
    });    
}

for (var key in references.version) {
    var template = path.join(__dirname,'..',key,'datasources.template.json');
    if (existsSync(template)) {
        var data = JSON.parse(fs.readFileSync(template));
        process(data);
        delete data.types;
        delete data.variables;
        var filepath = path.join(__dirname,'..',key,'datasources.json');
        fs.writeFileSync(filepath,JSON.stringify(data,null,"    "));
    } else {
        console.error('ref '+ key + ' missing datasources metadata')
    }
}

