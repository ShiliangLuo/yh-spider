const getIds = require('./src/getIds');
const getIdByReg = require('./src/getIdByReg');
const getVideoPathById = require('./src/getVideoPathById');
const getVideoByUrl = require('./src/getVideoByUrl');
const saveVideo = require('./src/saveVideo');
const dealDir = require('./src/dealDir');

const host = 'http://www.imomoe.la';
let filepPath = '/playdata/120/7288.js';

let link = `${host}${filepPath}`;

const fetchData = async () => {
  // 处理文件路径
  const alreadyDownloadIds = await dealDir();
  // 取得包含视频id或视频url的js文件
  const response = await getIds(link);

  if (response) {
    // 正则匹配，找出视频id或视频url
    const ids = await getIdByReg(response);
    console.log(ids);
    // 循环取得视频地址
    for (let i = 0, len = ids.length; i < len; i++) {
      if (alreadyDownloadIds.includes(i)) continue;

      try {
        // const html = await getVideoPathById(ids[i]);
        const videoData = await getVideoByUrl(ids[i]);

        saveVideo(videoData, i);
      } catch (e) {
        throw e;
      }
    }
  }
};

fetchData();
