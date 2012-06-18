#!/usr/bin/env python

try:
    # <= python 2.5
    import simplejson as json
except ImportError:
    # >= python 2.6
    import json

versions = ['2.0.1', '2.1.0', 'latest']

for v in versions:
    print '-- testing %s/reference.json' % v
    reference = json.load(open('%s/reference.json' % v, 'r'))
    assert reference
    for sym in reference['symbolizers'].items():
        assert sym[1]
        for i in sym[1].items():
            assert 'type' in i[1].keys(), '%s: type not in %s' % (sym[0], i[0])
            assert 'doc' in i[1].keys(), '%s: doc string not in %s' % (sym[0], i[0])
            assert 'css' in i[1].keys(), '%s: css not in %s' % (sym[0], i[0])

print '... oh yeah, tests passed'
