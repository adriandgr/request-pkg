var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code:', response.statusCode);
         console.log('Content-type:', response.headers['content-type'])
         console.log('Downloading image...');
       })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on('finish', function (response) {
        console.log('Download complete!');
       });

