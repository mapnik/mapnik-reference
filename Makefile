all: latest/datasources.json

latest/datasources.json:
	node util/make-datasource-ref.js latest/datasources.template > latest/datasources.json

check test: latest/datasources.json
	npm test
	python scripts/test.py
	node scripts/lint.js

.PHONY: test latest/datasources.json
