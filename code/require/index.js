const path = require("path");
const fs = require("fs");
const vm = require("vm")

class Modal {
  
}

/**
 * 引入模块，如果同时存在a.js和a.json，优先引入a.js
 * @param {string} filename - 文件名
 */
function myRequire(filename) {
  let filePath = path.resolve(__dirname, filename)
  let isExists = fs.existsSync(filePath)
  console.log(filePath, isExists)
  return isExists
}


const file = myRequire("../../static/files")

console.log(file)