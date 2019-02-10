template := node_modules/node-simple-template/index.js
webpack := node_modules/webpack/bin/webpack.js
jest := node_modules/jest/bin/jest.js

.SILENT:

all: node_modules dist/index.html dist/index.js run

node_modules: package.json package-lock.json
	npm install

dist/index.html: index.html
	$(template) -f index.html -c config.json -d dist/

dist/index.js: src/index.js
	$(webpack)

watch:
	$(webpack) -d --watch

test:
	$(jest)

run:
	pushd dist/; python -m SimpleHTTPServer 9000
