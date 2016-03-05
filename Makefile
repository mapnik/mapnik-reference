all: build

build:
	node scripts/make-datasource-ref.js

check test: build
	python scripts/test.py
	node scripts/lint.js
	npm test

testpack:
	rm -f ./*tgz
	npm pack
	tar -ztvf *tgz
	rm -f ./*tgz

.PHONY: test build