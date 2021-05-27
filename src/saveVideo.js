const fs = require('fs');
const videoPath = require('./common/index');

const saveVideo = (data, index) => {
  return new Promise(() => {
    fs.writeFile(`${videoPath}/第${index + 1}集.mp4`, data, 'binary', err => {
      if (err) throw err;
      console.log(`第${index + 1}集下载成功！`);
    });
  });
};

module.exports = saveVideo;
