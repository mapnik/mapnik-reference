# reference.json

`reference.json` is a parseable spec of what Mapnik can do - what symbolizers 
it supports and the properties they can contain. It's useful for bulding 
parsers, compilers, and syntax highlighting/checking for languages.

## Using

To simply grab the reference.json file,

    curl https://github.com/mapnik/reference.json/raw/master/reference.json

The file can then be parsed with any of the many [json parsers](http://www.json.org/).

## Users

* [mess.js](http://github.com/developmentseed/mess.js)
* TileMill
