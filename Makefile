all: build

build:
	node scripts/make-datasource-ref.js

check test: build
	python scripts/test.py
	node scripts/lint.js
	npm test

.PHONY: test build