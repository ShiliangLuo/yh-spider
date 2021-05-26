const fs = require('fs');

const saveVideo = (data, index) => {
  return new Promise(() => {
    fs.writeFile(`./video/第${index + 1}集.mp4`, data, err => {
      if (err) throw err;
      console.log(`第${index + 1}集下载成功！`);
    });
  });
};

module.exports = saveVideo;
