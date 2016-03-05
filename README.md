# mapnik-reference

`mapnik-reference` is a spec of what Mapnik styling and datasource properties are supported for each version.

It is useful for building parsers, tests, compilers, and syntax highlighting/checking for languages.

[![Build Status](https://travis-ci.org/mapnik/mapnik-reference.svg)](https://travis-ci.org/mapnik/mapnik-reference)

Default branch is `gh-pages` which is displayed at http://mapnik.org/mapnik-reference

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

### Property stability
The `status` key may be used to define the stability of a property. When the key is not specified,
then the `status` is `stable`. Possible values are:

- **stable:** `property` is here to stay and its behavior is not anticipated to change
- **unstable:** `property` is here to stay but its behavior/meaning of `property` may change
- **deprecated:** `property` should not be used and will be removed in upcoming major version of Mapnik
- **experimental:** `property` should not be used and may change, be re-named, or disappear at any time


## Using

This is a valid [npm](http://npmjs.org/) module and therefore can easily be used with
[node.js](http://nodejs.org/).

    npm install mapnik-reference

Install it as a dependency of your application. Then use that API to get a reference instance
for a specific version of Mapnik:

```javascript
var mapnik_reference = require('mapnik-reference');
var ref = mapnik_reference.load('3.0.0');
```

You can also get access to an array of all known versions:

```javascript
var mapnik_reference = require('mapnik-reference');
mapnik_reference.versions;
[ '2.0.0',
  '2.0.1',
  '2.0.2',
  '2.1.0',
  '2.1.1',
  '2.2.0',
  '2.3.0',
  '3.0.0' ]
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
