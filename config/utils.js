const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const encodeObjectValue = (obj) => {
  const newObj = {};
  for (let key in obj) {
    newObj[key] = JSON.stringify(obj[key]);
  }
  return newObj;
};

module.exports = { encodeObjectValue, resolveApp };
