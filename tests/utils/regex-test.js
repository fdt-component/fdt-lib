import expect from 'expect';

import * as utils from '../../src/utils/index';

describe('正则表达式', () => {
  it('自然数', () => {
    expect(utils.isNatural('1')).toEqual(true);
    expect(utils.isNatural('')).toEqual(true);
    expect(utils.isNatural('-1')).toEqual(false);
    expect(utils.isNatural('01')).toEqual(true);
    expect(utils.isNatural('a')).toEqual(false);
    expect(utils.isNonNegative()).toEqual(false);
  });
  it('非负数', () => {
    expect(utils.isNonNegative(-1)).toEqual(false);
    expect(utils.isNonNegative('-1')).toEqual(false);
    expect(utils.isNonNegative('0')).toEqual(true);
    expect(utils.isNonNegative('1')).toEqual(true);
    expect(utils.isNonNegative()).toEqual(false);
  });
});
