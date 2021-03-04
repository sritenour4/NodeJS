const path = require('path');
const fs = require('fs');
const request = require('request');

const dataPath = path.join(__dirname, './popular-articles.json');

request('https://www.reddit.com/r/popular.json', (err, res, body) => {
    
    if(err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {
        fs.appendFileSync(dataPath, item.data.title + '\n' + item.data.url + '\n' + item.data.author + '\n\n');
    });
});