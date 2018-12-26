const fs = require('fs');
const config = require('./config.json');

function parseAndUpdateFile(data) {
    (data.match(/({{[a-z.]+}})/g) || []).map(value => {
        const key = value.split('{{')[1].split('}}')[0].trim();
        return {
            [value]: config[key]
        }
    }).forEach((obj) => {
        const key = Object.keys(obj);
        const value = obj[key];

        data = data.replace(key, value);
    });

    fs.writeFile('./index.html', data, 'utf8', () => {
        console.log('template updated!');
    });
}

fs.readFile('./index.html', 'utf8', (error, data) => {
    if (error) {
        throw error;
    }

    parseAndUpdateFile(data);
});
