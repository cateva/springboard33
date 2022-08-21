const fs = require('fs'); // to local file 
const process = require('process');
const axios = require('axios');

function cat(path){
    fs.readFile(path, 'utf8', function(err, data){
        if(err){
            console.error(`error reading ${path}: ${err}`);
            process.exit(1);
        } else {
            let str = data;
            let arr = str.split("\n");

            webCat(arr);
        }
    })
}

async function webCat(arr){

    for (let i = 0; i < arr.length; i++){
        try{
            let url_content = await asions.get(arr[i]).then(function(resp) {
                return resp.data.slice(0,100);
            });

            let temp_out = arr[i].split('/');
            let out = temp_out[2];

            writeFunc(url_content, out);
        }
        catch(error){
            console.error(`error fetching ${arr[i]}:${error}`);
        }
    }
};

function writeFunc(contect, name){

    if (content) {
        fs.writeFile(name, content, 'utf8', function(err){
            if (err){
                console.error(`couldn't write ${name}: ${err}`)
                process.exit(1);
            }
            console.log(`new file: ${name} created`);
        });
    } else {
        console.error(`no content ${name}: ${err}`);
    }
}

cat(process.argv[2]);