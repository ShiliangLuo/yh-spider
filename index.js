const getIds = require('./src/getIds');
const getIdByReg = require('./src/getIdByReg');
const getVideoPathById = require('./src/getVideoPathById');
const getVideoByUrl = require('./src/getVideoByUrl');
const saveVideo = require('./src/saveVideo');

const host = 'http://www.imomoe.la';
let path = '/playdata/159/4767.js';

let link = `${host}${path}`;

const fetchData = async () => {
  const response = await getIds(link).catch(err => {
    throw err;
  });

  if (response) {
    const ids = await getIdByReg(response);

    console.log(ids);

    // 循环取得视频地址
    for (let i = 0, len = ids.length; i < len; i++) {
      try {
        const html = await getVideoPathById(ids[i]);
        const videoData = await getVideoByUrl(html);

        saveVideo(videoData, i);
      } catch (e) {
        throw e;
      }
    }
  }
};

fetchData();
