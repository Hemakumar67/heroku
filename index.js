const express = require('express');
const app = express();
var pdfUtil = require('pdf-to-text');
var imgytil = require('image-to-text');
var pdf_path = "/Users/avengers/Documents/node/pdf/Screenshot 2022-08-23 at 11.20.30 PM.png";

var Tesseract = require('tesseract.js');

app.listen(8000,()=>{
    console.log('first page')
})

Tesseract.recognize(
  `${pdf_path}`,
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log('text',text);
})

// pdfUtil.pdfToText(pdf_path, function(err, data) {
//   if (err) throw(err);
//   console.log(data); //print all text    
// });



// var file = {
//   name: 'sample',
//   path: './0Jl54.png'
// };

// var key = 'ztEX9VMpdh3YbmiGfvlLDA'; //Your key registered from cloudsightapi @ https://cloudsightapi.com
// imageToTextDecoder.setAuth(key);
// imageToTextDecoder.getKeywordsForImage(file).then(function(keywords){
//    console.log('keywords', keywords);
// },function(error){
//    console.log(error);
// });


 
