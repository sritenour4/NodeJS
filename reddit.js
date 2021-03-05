const fs = require('fs');
const rp = require('request-promise');

const options = {
    uri: 'https://www.reddit.com/r/popular.json',
    json: true // Automatically parses the JSON string in the response
}

rp(options)
    .then(payload => {
        let extractedArticleArr = [];

        payload.data.children.forEach(article => {
            extractedArticleArr.push({
                title: article.data.title,
                url: article.data.url,
                author: article.data.author
            });
        }) 
            
        fs.writeFile('popular-articles.json', JSON.stringify(extractedArticleArr, null, 2), (err) => {
            if(err) throw err;
            console.log('Saved!');
        });    
    })
    .catch(err => console.log(err));



// const request = require('request');
// const fs = require('fs');

// const dataPath = path.join(__dirname, './popular-articles.json');

// request('https://www.reddit.com/r/popular.json', (err, res, body) => {
    
//     if(err) console.log(err);

//     JSON.parse(body).data.children.forEach(item => {
//         fs.appendFileSync(dataPath, item.data.title + '\n' + item.data.url + '\n' + item.data.author + '\n\n');
//     });
// });