const fs = require('fs');
const videoPath = require('./common/index');

const dealDir = () => {
  return new Promise(resolve => {
    // 先创建目录
    fs.mkdir(videoPath, { recursive: true }, err => {
      if (err) throw err;
    });

    // 再读取目录中的文件，查看已经下载了的集数
    fs.readdir(videoPath, (err, files) => {
      if (err) throw err;
      const ids = files.map(item => item.match(/\u7b2c(.+?)\u96c6/)[1] - 1);

      resolve(ids);
    });
  });
};

module.exports = dealDir;
