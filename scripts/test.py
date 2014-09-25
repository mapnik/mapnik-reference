#!/usr/bin/env python

try:
    # <= python 2.5
    import simplejson as json
except ImportError:
    # >= python 2.6
    import json

versions = ['2.0.0','2.0.1', '2.0.2', '2.1.0', '2.1.1', '2.3.0', 'latest']

for v in versions:
    reference = json.load(open('%s/reference.json' % v, 'r'))
    assert reference
    assert reference['version'] == v,"%s not eq to %s" % (reference['version'],v)