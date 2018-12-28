const fs = require('fs');
const config = require('./config.json');

const dir = './dist/';
const filename = 'index.html';

function parseAndUpdateFile(data) {
    let output = data;

    for (const key in config) {
        const regexp = new RegExp(`({{${key}}})`, 'g');
        output = output.replace(regexp, config[key]);
    }

    fs.writeFile(`${dir}${filename}`, output, 'utf8', () => {
        console.log('builded!');
    });
}

fs.readFile(`./${filename}`, 'utf8', (error, data) => {
    if (error) {
        throw error;
    }

    parseAndUpdateFile(data);
});
