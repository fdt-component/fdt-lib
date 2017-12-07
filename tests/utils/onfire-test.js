import expect from 'expect';
import * as utils from '../../src/utils';
import {utils as a} from '../../src/index';

console.log(Object.keys(a));

describe('事件监听和触发框架测试', () => {
  it('事件添加', () => {
    const onfire = new utils.OnFire();
    expect(onfire.size('hello')).toEqual(0);
    const fn = () => 'hello';
    onfire.on('hello', fn);
    expect(onfire.size('hello')).toEqual(1);
    onfire.on('hello', fn);
    expect(onfire.size('hello')).toEqual(1);
  });
  it('事件删除', () => {
    const onfire = new utils.OnFire();
    const fn1 = () => 'hello1';
    const fn2 = () => 'hello2';
    const fn3 = () => 'hello3';
    onfire.on('hello', fn1);
    onfire.on('hello', fn2);
    onfire.on('hello', fn3);
    expect(onfire.size('hello')).toEqual(3);

    onfire.off('hello', fn2);
    expect(onfire.size('hello')).toEqual(2);

    onfire.off('hello');
    expect(onfire.size('hello')).toEqual(0);
  });
  it('事件触发', () => {
    const onfire = new utils.OnFire();
    const fn1 = () => onfire.off('hello', fn1);
    const fn2 = () => onfire.off('hello', fn2);
    const fn3 = () => onfire.off('hello', fn3);
    onfire.on('hello', fn1);
    onfire.on('hello', fn2);
    onfire.on('hello', fn3);
    onfire.fire('hello');
    expect(onfire.size('hello')).toEqual(0);
  });
});
