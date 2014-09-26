#!/usr/bin/env python

import glob
import os
try:
    # <= python 2.5
    import simplejson as json
except ImportError:
    # >= python 2.6
    import json

versions = glob.glob('./*.*.*')

for v in versions:
    ver = os.path.basename(v)
    reference = json.load(open('%s/reference.json' % v, 'r'))
    assert reference
    assert reference['version'] == ver,"%s not eq to %s" % (reference['version'],ver)