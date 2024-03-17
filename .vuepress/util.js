const fs = require('fs');
const path = require('path');
const getFile = (prefixPath) => {
  let arr = fs.readdirSync(path.join(process.cwd(), prefixPath))
  let resArr = arr
  // 排序并去掉后缀
  for (let g = 0; g < arr.length-1; g++) {
    for (let h = 0; h < arr.length - 1; h++) {
      // 替换
      resArr[h]= resArr[h].replace('.md', '')
      resArr[h+1] =  resArr[h + 1].replace('.md', '')
      if (!isNaN(Number(resArr[h])) ) {
        if (Number(resArr[h]) > Number(resArr[h+1])) {
          [resArr[h],resArr[h+1]] = [resArr[h+1],resArr[h]];
        }
      }
       
    }
}
  resArr = resArr.map(item => `${prefixPath}/${item}`)
  return resArr

}

const createSideBarConfig = (title, prefixPath, collapsable = true) => {

  return  {
    title,
    collapsable,
    children: getFile(prefixPath)
  }
}


module.exports = {
  createSideBarConfig
}