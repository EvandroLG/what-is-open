template := node_modules/node-simple-template/index.js
webpack := node_modules/webpack/bin/webpack.js

.SILENT:

all: node_modules dist/index.html run

node_modules: package.json package-lock.json
	npm install

dist/index.html: index.html
	$(template) -f index.html -c config.json -d dist/

watch:
	$(webpack) -d --watch

run:
	pushd dist/; python -m SimpleHTTPServer 9000
