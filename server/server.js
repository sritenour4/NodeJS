const path = require('path');
const fs = require('fs');

const dataPath = (path.join(__dirname, '../chirps.json'));

fs.readFile(dataPath, {
    encoding: "utf-8"     
}, (err, data) => {

    console.log(data);  
    
})