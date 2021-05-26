const https = require('https');

const getVideoPathById = id => {
  return new Promise((resolve, reject) => {
    let data = '';
    let url = `https://v.jialingmm.net/mmletv/mms.php?vid=${id}&type=letv`

    https.get(url, res => {
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

module.exports = getVideoPathById;
