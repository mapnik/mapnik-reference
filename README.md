# mapnik-reference

`mapnik-reference` is a spec of what Mapnik styling and datasource are supported for each version.
It is useful for building parsers, tests, compilers, and syntax highlighting/checking for languages.

## Versioning

The version of this repository indicates the schema of the reference.json file.
Schema changes of any type are expected to change the implementation requirements
of a parser, so they will increment the major version of this repository in
[semver style](http://semver.org/).

The directories in this repository directly correspond to released versions of Mapnik
and the next targeted release of Mapnik.

## Meaning

The structure of the file is as such:

* `version`: the version of Mapnik targeted. Same as the containing directory.
* `style`: properties of the `Style` XML element
* `layer`: properties of the `Layer` XML element
* `symbolizers/*`: properties that apply to **all** symbolizers
* `symbolizers/symbolizer`: properties that apply to **each** type of symbolizer
* `colors`: named colors supported by Mapnik. see `include/mapnik/css_color_grammar.hpp`

## Using

This is a valid [npm](http://npmjs.org/) module and therefore can easily be used with
[node.js](http://nodejs.org/).

    npm install mapnik-reference

Once installing it as a dependency (like it's used in Carto), it can be included
and used for a specific version of Mapnik:

```javascript
var mapnik_reference = require('mapnik-reference');
var data = mapnik_reference.version['2.1.0'];
```

Other implementations will want to simply copy the [JSON](http://www.json.org/) file
from the desired implementation, like `2.0.1/reference.json`.

The file can then be parsed with any of the many [json parsers](http://www.json.org/).

## Testing

Tests require python and node.js:

    make test

## Users

* [carto.js](https://github.com/mapbox/carto)
* Mapnik itself (the util/validate-mapnik-instance.py is used to check binding consistency like in [#1427](https://github.com/mapnik/mapnik/issues/1427))
