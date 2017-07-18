
/**
 * 
 * 获取这个月第n天是星期几，返回的n的取值为(0-6)
 * @param {int} n 
 * @returns {int} n
 */
export function getFirstDayInfo(n){
  var date=new Date();
  date.setDate(n);
  return date.getDay();
}


/**
 * 
 * 生成指定返回的数组
 * @param {int} index 
 * @param {int} end
 * @returns {arr} result 
 */
export function createRangeArr(index,end){
  var result=[]
  while(index<=end){
    result.push(index)
    index++
  }
  return result
}