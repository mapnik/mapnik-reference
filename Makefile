all: latest/datasources.json

latest/datasources.json:
	node scripts/make-datasource-ref.js

check test: latest/datasources.json
	npm test
	python scripts/test.py
	node scripts/lint.js

.PHONY: test latest/datasources.json
