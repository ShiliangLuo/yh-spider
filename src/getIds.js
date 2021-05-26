const http = require('http');
const iconv = require('iconv-lite');

// 爬取所有视频id
const getIds = url => {
  return new Promise(resolve => {
    http.get(
      url,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        },
      },
      res => {
        let data = Buffer.allocUnsafe(0);

        res.on('data', chunk => {
          data = Buffer.concat([data, chunk], data.length + chunk.length);
        });
        res.on('end', () => {
          // 编码处理
          const result = iconv.decode(data, 'gb2312');

          resolve(result);
        });
        res.on('error', err => {
          throw err;
        });
      }
    );
  });
};

module.exports = getIds;
