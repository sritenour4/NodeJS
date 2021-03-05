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

// JS => JSON JSON.stringify()
// JSON => JS JSON.parse()
// JSON.stringify(value, replacer, space) null, (2 formats with 2 white spaces)

fs.writeFile('chirps.json', JSON.stringify(chirps, null, 2), (err) => {
    if (err) throw err;
    console.log('Saved!'); // could also put chirps instead of Saved! to meet lab requirements
});

fs.readFile('chirps.json', (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
});


// const dataPath = (path.join(__dirname, '../chirps.json'));

// fs.writeFile(dataPath, JSON.stringify(chirps, null, 2), (err) => {
//     if (err) console.log(err)
//     console.log(chirps)
// });

// fs.readFile(dataPath, {
//     encoding: "utf-8"     
// }, (err, data) => {

//     if (err) console.log(err);  
//     console.log(data);    
// });