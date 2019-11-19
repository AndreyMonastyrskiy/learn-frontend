'use sctrict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (myrequest, myresponse) {
    if (myrequest.url == '/style.css'){
        const css = fs.readFileSync('style.css', 'utf8');
        myresponse.end(css);
    } else {
        htmlText = fs.readFileSync('index.html','utf8');
        myresponse.end(htmlText);
    }
    console.log(myrequest.method, myrequest.url);
    myresponse.end();
});

server.listen(3000);
console.log('Server started');