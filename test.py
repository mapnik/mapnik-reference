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

for sym in reference['symbolizers'].items():
    assert sym[1]
    for i in sym[1].items():
        #import pdb;pdb.set_trace()
        assert 'type' in i[1].keys(), 'type not in %s' % i[0]
        #assert 'doc' in i[1].keys(), 'type not in %s' % i[0]

print '... oh yeah, tests passed'