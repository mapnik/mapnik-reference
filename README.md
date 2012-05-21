# reference.json

`reference.json` is a parse-able spec of what Mapnik can do - what symbolizers 
it supports and the properties they can contain. It's useful for building 
parsers, tests, compilers, and syntax highlighting/checking for languages.

## Status

`reference.json` has a version number that conforming Mapnik engines such as
Cascadenik, Tilemill and Mapnik itself can reference to indicate their support
of specific features. We conform to [semantic versioning](http://semver.org) to communicate change.

## Using

To simply grab the reference.json file,

    curl https://github.com/mapnik/reference.json/raw/master/reference.json

The file can then be parsed with any of the many [json parsers](http://www.json.org/).

## Users

* [Carto](https://github.com/mapbox/carto)
* [TileMill](https://github.com/mapbox/tilemill)
