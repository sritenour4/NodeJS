const path = require('path');
const fs = require('fs');

const chirps = [
    {
        username: "rolltidefan1000",
        message: "SEC Basketball Champs! Woot!"        
    },
    {
        username: "bamagirl23",
        message: "not used to this"
    },
    {
        username: "rolltidefan1000",
        message: "it's awesome!"
    },
    {
        username: "nicksaban4prez",
        message: "Rooooooollllll Tide!"
    },
    {
        username: "rolltidefan1000",
        message: "RTR! "
    }
];

const dataPath = (path.join(__dirname, '../chirps.json'));

fs.writeFile(dataPath, JSON.stringify(chirps), (err) => {
    if (err) console.log(err)
});

fs.readFile(dataPath, {
    encoding: "utf-8"     
}, (err, data) => {

    if (err) console.log(err);  
    console.log(data);    
});