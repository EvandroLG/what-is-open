template := node_modules/node-simple-template/index.js
jest := node_modules/jest/bin/jest.js
eslint := node_modules/eslint/bin/eslint.js
babel := ./node_modules/.bin/babel
src_files := $(shell find src/ -name '*.js')
transpiled_files := $(patsubst src/%,dist/%,$(src_files))

.SILENT:

all: node_modules dist/index.html $(transpiled_files) run

clean:
	rm -rf dist/*.js dist/*.map

node_modules: package.json package-lock.json
	npm install

dist/index.html: index.html
	$(template) -f index.html -c config.json -d dist/

dist/%: src/%
	$(babel) $< --out-file $@ --source-maps

test:
	$(jest)

lint:
	$(eslint) src/ --quiet

run:
	pushd dist/; python -m SimpleHTTPServer 9000
