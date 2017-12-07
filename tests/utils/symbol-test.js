import expect from 'expect';

import * as utils from '../../src/utils';

describe('商品相关工具函数', () => {
  it('获取商品Id', () => {
    expect(utils.getSymbolId('603123.SH.SC')).toEqual('603123');
  });
  it('获取商品市场', () => {
    expect(utils.getSymbolMarket('603123.SH.SC')).toEqual('SH');
  });
  it('商品是否有通标识符', () => {
    expect(utils.isSymbolHasTong(1, '603123.SH.SC')).toEqual(true);
    expect(utils.isSymbolHasTong(0, '603123.SH.SC')).toEqual(false);
    expect(utils.isSymbolHasTong(1, '00700.HK.SC')).toEqual(false);
    expect(utils.isSymbolHasTong(0, '00700.HK.SC')).toEqual(false);
  });
});
