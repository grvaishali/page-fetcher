const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

if (url === undefined || path === undefined) {
  console.log('Request URL and path are required')
  process.exit();
}

request(url, (error, response, body) => {
  if (error !== undefined && error !== null) {
    console.log(error);
  }

  if (response && response.statusCode && response.statusCode !== 200) {
    console.log(response);
  }

  fs.writeFile(path, body, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });

});

