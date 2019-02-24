template := node_modules/node-simple-template/index.js
jest := node_modules/jest/bin/jest.js
eslint := node_modules/eslint/bin/eslint.js

.SILENT:

all: node_modules copy_to_dist build_html run

clean:
	rm -rf dist/*

node_modules: package.json package-lock.json
	npm install

build_html:
	$(template) -f src/index.html -c config.json -d dist/

copy_to_dist:
	cp -R src/ dist/

test:
	$(jest) --coverage

lint:
	$(eslint) src/ --quiet

run:
	pushd dist/; python -m SimpleHTTPServer 9000
