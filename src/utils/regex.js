// 正则校验

/**
 * 是否是自然数(包含空字符串)
 * @param {String} str 
 */
export function isNatural(str) {
  return /^\d*$/.test(str);
}

/**
 * 是否非负数(包含空字符串)
 * @param {String} str 
 */
export function isNonNegative(str) {
  if (str === '') return true;
  return /^\d*(\.\d*)?$/.test(str);
}