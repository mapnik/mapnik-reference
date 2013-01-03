var fs = require('fs');
var path = require('path');
var existsSync = require('fs').existsSync || require('path').existsSync

var args = process.argv.slice(1);

var cmd = path.basename(process.argv.slice(1,2));

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

// expand gyp-like variables to build out entire file
Object.keys(data.datasources).forEach(function(key) {
    var ds = data.datasources[key];
    Object.keys(ds).forEach(function(prop) {
        var match = ds[prop].match(/<@\((.+)\)/);
        if (match && match[1]) {
            ds[prop] = data.variables[prop];
        }
    });
});

console.log(JSON.stringify(data,null,"    "));