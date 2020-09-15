const path = require("path");
const fs = require("fs");
const vm = require("vm")

function Modal() {}
/**
 * 引入模块，如果同时存在xxx.js和xxx.json，优先引入xxx.js
 * @param {string} filename - 文件名
 */
function myRequire(filename) {
  let filePath = path.resolve(__dirname, filename)
  let isExists = fs.existsSync(filePath)
  console.log(filePath, isExists)
}


const file = myRequire("./files")

console.log(file)