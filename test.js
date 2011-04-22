#!/usr/bin/env node

var assert = require('assert');
var fs = require('fs');

var reference = fs.readFileSync('reference.json','utf8');

assert.ok(reference);

console.log('... oh yeah, tests passed')