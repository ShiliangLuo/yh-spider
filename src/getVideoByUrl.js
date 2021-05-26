const http = require('http');

const getVideoByUrl = html => {
  return new Promise((resolve, reject) => {
    let url = `http://${html.match(/\'http\:\/\/(.+?)\'/)[1]}`;
    let data = '';

    http.get(url, res => {
      res.setEncoding('binary');

      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
      res.on('error', err => {
        reject(err);
      });
    });
  });
};

module.exports = getVideoByUrl;
