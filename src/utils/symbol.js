// 这里的symbol指的是商品, 而不是js的Symbol对象

// id为商品id, market指的是市场比如（US, HK, SZ, SH）, marketType指的的市场类型比如（SC,FX）
// 商品的标识符格式为: id.market.marketType;
import get from 'lodash/get';

// 获取商品的id
export function getSymbolId(symbol = '') {
  return get(symbol.split('.'), ['0'], '');
}

// 获取商品所在市场
export function getSymbolMarket(symbol) {
  return get(symbol.split('.'), ['1'], '');
}

// 是否有通标识符
export function isSymbolHasTong(hk_connect, symbol) {
  const market = getSymbolMarket(symbol);
  return hk_connect === 1 && (market === 'SZ' || market === 'SH');
}