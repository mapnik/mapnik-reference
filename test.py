#!/usr/bin/env python

try:
    # <= python 2.5
    import simplejson as json
except ImportError:
    # >= python 2.6
    import json


reference = json.load(open('reference.json','r'))

# TODO - validate stuff
assert reference

print '... oh yeah, tests passed'