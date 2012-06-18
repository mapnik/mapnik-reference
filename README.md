# reference.json

`reference.json` is a parse-able spec of what Mapnik can do - what symbolizers
it supports and the properties they can contain. It's useful for building
parsers, tests, compilers, and syntax highlighting/checking for languages.

## Versioning

The version of this repository indicates the schema of the reference.json file.
Schema changes of any type are expected to change the implementation requirements
of a parser, so they will increment the major version of this repository in
[semver style](http://semver.org/).

The directories in this repository correspond to 

## Using

This is a valid [npm](http://npmjs.org/) module and thus is pretty easy to use from
[node.js](http://nodejs.org/).

    npm install mapnik-reference

Other implementations will want to simply copy the [JSON](http://www.json.org/) file
from the desired implementation, like `2.0.1/reference.json`.

The file can then be parsed with any of the many [json parsers](http://www.json.org/).

## Testing

Tests require python:

    make test

## Users

* [carto.js](https://github.com/mapbox/carto)
