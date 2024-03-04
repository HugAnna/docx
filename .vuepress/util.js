const fs = require('fs');
const path = require('path');
const getFile = (prefixPath) => {
 
  let arr = fs.readdirSync(path.join(process.cwd(), prefixPath))
  // 排序并去掉后缀
  for (let g = 0; g < arr.length-1; g++) {
    for (let h = 0; h < arr.length - 1; h++) {
      // 替换
      arr[h]= arr[h].replace('.md', '')
      arr[h+1] =  arr[h + 1].replace('.md', '')
      if (!isNaN(Number(arr[h])) ) {
        if (Number(arr[h]) > Number(arr[h+1])) {
          [arr[h],arr[h+1]] = [arr[h+1],arr[h]];
        }
      }
       
    }
}
  arr = arr.map(item => `${prefixPath}/${item}`)

 
  return arr
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