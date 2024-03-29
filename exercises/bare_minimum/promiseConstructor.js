/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

var nodeStyle = require('./callbackReview.js');

// Promise.promisifyAll(fs);



// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, function(err, fileData) {
      if (err) {
        reject(err);
      } else {
        fileData = fileData.toString();
        fileData = fileData.split('\n')[0];
        resolve(fileData);
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise (function (resolve, reject) {
    request (url, function (error, response, body) {
      if (error) {
        reject (error);
      } else {
        resolve(response.statusCode);
      }
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
