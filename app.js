var express = require('express');
var app = express();

app.listener('3000');




const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// $(document).ready(function() {
//   $('#myForm').submit(function(){
//     //alert("submitted");
//     // get data
//     var data = $(this).serialize();
//     alert(data);
//
//     //create and save PDF
//     var doc = new jsPDF();
//     doc.text(data,10,10);
//     doc.save('a4.pdf');
//
//   });
// });
