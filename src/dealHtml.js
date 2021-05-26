const cheerio = require('cheerio');

// 处理网页
const dealHtml = data => {
  const $ = cheerio.load(data);

  const frameUrl = $('#play2').attr('src');
};

module.exports = dealHtml;
