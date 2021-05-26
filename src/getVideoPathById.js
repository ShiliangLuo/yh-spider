const https = require('https');

//
const getVideoPathById = id => {
  return new Promise(resolve => {
    let data = '';
    let url = `https://v.jialingmm.net/mmletv/mms.php?vid=${id}&type=letv`;

    https.get(
      url,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        },
      },
      res => {
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

module.exports = getVideoPathById;
