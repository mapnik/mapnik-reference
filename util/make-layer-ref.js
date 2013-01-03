var fs = require('fs');
var path = require('path');
var util = require('util');
var assert = require('assert');
var existsSync = require('fs').existsSync || require('path').existsSync

var args = process.argv.slice(1);

var cmd = path.basename(process.argv.slice(1,2));

var options = {};

args = args.filter(function (arg) {
    var match;

    if (match = arg.match(/^--?([a-z][0-9a-z-]*)$/i)) { arg = match[1] }
    else { return arg }

    switch (arg) {
        case 'd':
        case 'debug':
            options.debug = true;
            break;
        default:
            console.log("Usage: "+cmd+" <source file>");
            console.log("Options:");
            console.log("  -d   --debug");
            process.exit(0);
            break;
    }
});

var input = args[1];
if (input && input[0] != '/') {
    input = path.join(process.cwd(), input);
}

if (!input) {
    console.log(cmd+": no input file");
    process.exit(1);
}

var ext = path.extname(input);

if (!ext) {
    console.log(cmd+": please pass a layers.json file");
    process.exit(1);
}

if (!existsSync(input)) {
    console.log(cmd+": file does not exist: '" + input + "'");
    process.exit(1);
}

var data = JSON.parse(fs.readFileSync(input));

// TODO - add support for includes?

function validate_prop(prop) {
    assert.ok('type' in prop,'type not defined for '+ util.inspect(prop));
    assert.ok('doc' in prop,'doc not defined for '+ util.inspect(prop));
    assert.ok('default-value' in prop,'default-value not defined for '+ util.inspect(prop));
    assert.ok('default-meaning' in prop,'default-value not defined for '+ util.inspect(prop));
}

// expand gyp-like variables to build out entire file
Object.keys(data.datasources).forEach(function(key) {
    var ds = data.datasources[key];
    if (options.debug) console.warn('Handling '+key)
    // handle commented sections
    if (key[0] == '#') {
        delete data.datasources[key];
    } else {
        Object.keys(ds).forEach(function(prop) {
            if (options.debug) {
              console.warn('  parsing "'+prop+'" ('+typeof(prop)+')');
              console.warn('  parsing "'+ util.inspect(ds[prop])+'"')
            }
            var match = ds[prop].match && ds[prop].match(/<@\((.+)\)/);
            if (match && match[1]) {
                ds[prop] = data.variables[prop];
            }
            validate_prop(ds[prop]);
        });
    }
});

if (!options.debug) {
  delete data.variables;
  console.log(JSON.stringify(data,null,"    "));
}