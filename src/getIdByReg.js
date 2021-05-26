// 正则提取id数组
const reg = /\$(.+?)\$letv/;
const reg_g = /\$(.+?)\$letv/g;

const getIdByReg = data => {
  // 方法一：match
  const result_g = data.match(reg_g);
  const result = [];

  for (let i = 0, len = result_g.length; i < len; i++) {
    const item = result_g[i];
    result.push(item.match(reg)[1]);
  }

  // return result;
  return Promise.resolve(result);
};

const _getIdByReg = data => {
  // 方法二：exec
  const result = [];
  let execResult;

  while ((execResult = reg_g.exec(data))) {
    execResult && result.push(execResult[1]);
  }

  return result;
};

module.exports = getIdByReg;
