const http = require('http');

const getVideoByUrl = html => {
  return new Promise(resolve => {
    // let url = `http://${html.match(/\'http\:\/\/(.+?)\'/)[1]}`;
    let data = '';

    http.get(
      html,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        },
      },
      res => {
        res.setEncoding('binary');

        res.on('data', chunk => {
          data += chunk;
        });
        res.on('end', () => {
          resolve(data);
        });
        res.on('error', err => {
          throw err;
        });
      }
    );
  });
};

module.exports = getVideoByUrl;
