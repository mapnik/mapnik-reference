## CHANGELOG

### 8.8.1

* Removed some wrong `auto` keywords on rules for the whole symbolizer where the symbolizer had required properties

### 8.8.0

* Removed * symbolizer and reference rules within `style` instead
* Added rules that work on the whole symbolizer and allow to either suppress it or output it with default values

### 8.7.0

* Removed generating index.js on prepublish and postpublish and add index.js to version control instead
* Added `cache-features`
* Removed redundant type for `debug-mode`

### 8.6.1

* Fixed a problem with generating index.js on Git installs with NPM

### 8.6.0

* Support for running in the browser

### 8.5.6

* Changed wording on description for `marker-opacity`
* Added `polygon-pattern-transform` and `line-pattern-transform`
* Fixed datatype of `shield-line-spacing` and `text-line-spacing`
* Fixed a typo

### 8.5.5

* Fix ref loading bug

### 8.5.4

* Add support for loading latest reference using sevmer (https://github.com/mapnik/mapnik-reference/issues/108)

### 8.5.3

* Added support for mapnik 3.0.10

### 8.52

* Added support for mapnik 3.0.9

### 8.5.1

* Added support for mapnik 3.0.7

### 8.5.0

* Fixed missing support for `inline` and `filesize_max` options in some datasource refs.
* Added support for mapnik 3.0.6
* Added `key_field_as_attribute` option for Postgis datasource

### 8.4.0

* Added support for mapnik 3.0.5

### 8.3.0

* Added support for mapnik 3.0.4

### 8.2.0

* Added support for mapnik 3.0.3
* Added new colorblind filters

### 8.0.0

* Added `miter-revert` to `stroke-linejoin`
* Renamed `left-only` and `right-only` of `text-upright` to use hyphens rather than underscores (https://github.com/mapnik/mapnik/pull/2682)
* Added `repeat-wrap-character` (unstable, https://github.com/mapnik/mapnik/issues/2333)
* Added `largest-bbox-only` (experimental)
* Added `rotate-displacement`
* Added `status` key to symbolizer property scheme (https://github.com/mapnik/mapnik-reference/issues/101)

### 7.0.1

* Added `topojson` datasource
* Added `text-upright:auto-down;`

### 7.0.0

* Added `text-transform:reverse`
* Added `text-upright`
* Added `marker-direction` (https://github.com/mapnik/mapnik/pull/2621)
* Changed API to lazily load each reference (helps avoid `require` performance cost).

Changes are:

 - Removed `mapnik-reference.version` object
 - Added `mapnik-reference.versions` array
 - Added `mapnik-reference.load()` function. Accepts ref version string, returns the reference instance

### 6.0.5

* Added `dots` symbolizer

### 6.0.4

* Doc improvements

### 6.0.3

* Fix a typo in text-opacity css name.

### 6.0.2

* Added `font-feature-settings` for v3.0.0 ref (@talaj)
* Updated `text-character-spacing` and `text-dy` doc for v3.0.0 ref (@talaj)

### 6.0.1

* Now reporting Mapnik 3.0.0

### 6.0.0

* Format change: now properties that are expressions report `expression:true` and their `type` represents the expected type post-evaluation.

### 5.1.1

* Added more docs and default value descriptions
* Added `text-font-feature-settings` (https://github.com/mapnik/mapnik/pull/2416)
* Added `adjust` option to `text-horizontal-alignment` (https://github.com/mapnik/mapnik/pull/2426)
* Added `marker-avoid-edges`, `marker-simplify`, `marker-simplify-algorithm`, and `marker-offset`
* Added `text-halo-opacity`, `text-halo-comp-op`, `shield-halo-opacity`, and `shield-halo-comp-op`

### 5.1.0

Tagged Sep 4, 2014

* Updated new default of `clip:false` for Mapnik >= 3.x
* Added `shield-label-position-tolerance`
* Added `vertex-first` and `vertex-last` `marker-placement` options (https://github.com/mapnik/mapnik/pull/2338)
* Removed `bilinear8` option for `scaling` (https://github.com/mapnik/mapnik/issues/2076)
* Added `line-pattern-opacity`
* Removed `wrap-character` (https://github.com/mapnik/mapnik/issues/2333)
* Added `linear-dodge`, `linear-burn`, and `divide` to `comp-op`
* Added `text-halo-transform` and `shield-halo-transform`
* Changed `polygon-pattern-alignment` default to `global`
* Improved coverage of docs overall.

### 5.0.9

Tagged Apr 25, 2014

* Added `shield-halo-rasterizer`

### 5.0.8

Tagged Apr 10, 2014

* Added `v2.3.0` reference
* Added `image-filters-inflate`
* Re-enable colorize-alpha for 2.2.0
* Added experimental support for `text-placement-type:list` and `shield-placement-type:list`
* Moved `fill`, `stroke-width`, and `opacity` on all symbolizers to expressions targeting Mapnik 3.x

### 5.0.7

Tagged Oct 25, 2013

* Added `v2.2.0` reference

### 5.0.6

Tagged Sept 26, 2013

Updated when Mapnik 2.3.x was at 68ff3ce.

* Added `color-to-alpha` image filter

### 5.0.5

Tagged Sept 19, 2013

Updated when Mapnik master was at 2ebd3e9bf8.

* Removed uneeded `description` properties.
* Corrected the `text-min-padding` doc to note that it only relates to whether a label is within a given distance of the edge of a (meta)tile not other text.
* Added Map `background-image-opacity` and `background-image-comp-op`
* Added `line-pattern-offset`
* Added `direct-image-filters`
* Added `scale-hsla` `image-filter`
* Added `raster-colorizer`
* Added `text-halo-rasterizer`
* Added `geometry-transform`
* Added `shield-transform`, `shield-placements`, and `shield-placement-type`
* Added `debug-mode` to visualize collision boxes
* Moved experimental `latest/datasources.json` to `latest/datasources.template` so `datasources.json` now is fully baked

### 5.0.4

Tagged February 5th, 2013

Updated when Mapnik master was at 19e52c013639.

* Exposed simplify and simplify-algorithm properties

### 5.0.3

Tagged January 2, 2013

Updated when Mapnik master was at fd089a228b7.

* Added value keywords known by Mapnik for rhs filtering (#42)


### 5.0.2

Tagged November 29, 2012

Updated when Mapnik master was at 26889c4761e.

* Added the obscure `shield-unlock-image` parameter, long supported by Mapnik.

### 5.0.1

Tagged November 26, 2012

Updated when Mapnik master was at c39c839452 and 2.1.x branch as at 0b2f2f8ee0.

* Adds new reference for Mapnik 2.1.1 (upcoming)
* Adds marker-multi-policy option for >= 2.1.1

### 5.0.0

Tagged Sept 6, 2012

Updated when Mapnik master was at a513d3f97

* Updates the schema by introducing a `"unsigned"` type for integer values.
  Carto and other parsers will be backwards-compatible with values specified
  in floats by rounding them to integers.

#### 4.0.5

Tagged Aug 30, 2012

Updated when Mapnik master was at 2e44e8c4

* Various docs fixes
* Added `interior` option for `markers-placement`
* Fixed required values for shields with Mapnik >= 2.1
* Added `map-maximum-extent`
* Fixed up layer and style properties in all versions
* Remove `font-set` which was uneeded
* Fixed doc string for `marker-width`.

#### 4.0.4

Tagged Aug 15, 2012

Updated when Mapnik master was at 4cf1484

* Removed experimental `colorize-alpha` comp-op to match Mapnik removal (https://github.com/mapnik/mapnik/issues/1371).

#### 4.0.3

Tagged Aug 8, 2012

Updated when Mapnik master was at 7847af51e7

* Corrected internally reported versions for `latest` and `2.0.2`

#### 4.0.2

Tagged Aug 8, 2012

Updated when Mapnik master was at 7847af51e7

* Made `point-file` optional
* Added `marker-ignore-placement` to 2.0.1 as per backport (https://github.com/mapnik/mapnik/issues/1163)
* Added new 2.0.2 reference - an exact copy of 2.0.1 as no changes were made in Mapnik between these releases

#### 4.0.1

Tagged Aug 2, 2012

Updated when Mapnik master was at a22b31b0cc

* Added `line-gamma-method` and `polygon-gamma-method`
* Added `line-miterlimit`
* Removed remaining `shield-no-text` from `latest/reference.json`

#### 4.0.0

Tagged Aug 1, 2012

Updated when Mapnik master was at a22b31b0cc

* Now `transform` properties are `functions` type
* Added `fill-opacity` for markers
* Exposed clip and smooth on all appropriate symbolizers
* Declared `text-orientation` as expression type
* Matched `transform` naming with Mapnik
* Fixed default value for `raster-scaling` to `near`
* Added more `raster-scaling` types:
  `near,spline36,hanning,hamming,hermite,kaiser,quadric,catrom,bessel,mitchell,sinc,blackman`
* Removed `raster-mode`, use `raster-comp-op` instead
* Added polygon-pattern-opacity - newly supported in Mapnik
* Fixed up which symbolizers support `comp-op` (removed buildings, added line-pattern)
* Removed `no-text` for shield symbolizer since Mapnik >= 2.1.x no longer uses this.
* Fixed naming of `stroke-dashoffset`
* Renamed all instances of `composite-operation` to `comp-op` to match mapnik/svg spec
* Fixed `buffer-size` type in 2.0.1 reference (uri -> float)
* Improved tests: run them with `make test`

#### 3.1.0

* Add `shield-allow-overlap`
* Add `shield-vertical-alignment`
* Add `text-wrap-before` and `shield-wrap-before`
* Made `marker-width`, `marker-height`, and `shield-name` expressions
* Fixed default value for text/shield alignment properties

#### 3.0.0

* Add `expression` type
* Add `functions` type
* Add transform function definitions for `point-transform` and,
  eventually, other transforms

#### 2.2.2

* Fixed type definition of `font-directory` in reference targeting latest mapnik

#### 2.2.1

* Fixed type definition of `font-directory`, ensuring it is interpreted as a uri

#### 2.2.0

* Add `raster-comp-op` (temporarily named `raster-composite-operation`)

#### 2.1.0

* Add `invert()` image filter function
* Rename `color-spin` compositing to `colorize-alpha`

#### 2.0.0

* The style-property `image-filters` becomes of the `functions`
  type and gains `[name, arity]` specs for each function.

#### 1.0.0

* For the property `buffer-size` under the Map symbolizer,
  the CSS representation becomes `buffer-size`, not `buffer.

#### 0.0.1

* Added symbolizer-specific `composite-operation` code.
