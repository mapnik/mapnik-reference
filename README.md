# reference.json

`reference.json` is a parse-able spec of what Mapnik can do - what symbolizers 
it supports and the properties they can contain. It's useful for building 
parsers, tests, compilers, and syntax highlighting/checking for languages.

## Status

`reference.json` is a work in progress and is targeted at [Mapnik 2.0](https://trac.mapnik.org/milestone/Mapnik%202.0).
Expect frequent updates and potential breaking changes leading up to the release.


## Using

To simply grab the reference.json file,

    curl https://github.com/mapnik/reference.json/raw/master/reference.json

The file can then be parsed with any of the many [json parsers](http://www.json.org/).

## Users

* [Carto](https://github.com/mapbox/carto)
* [TileMill](https://github.com/mapbox/tilemill)
* [Cascadenik](https://github.com/mapnik/Cascadenik) (soon)
