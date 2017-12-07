import isFunction from 'lodash/isFunction';
import isUndefined from 'lodash/isUndefined';
import get from 'lodash/get';

const ons = Symbol('ons');

// 事件监听和触发框架
export class OnFire {
  constructor() {
    // 监听的事件, 处理函数
    this[ons] = {};
  }
  // 监听事件
  on(name, handle) {
    if (!name) throw 'name不能为空';
    if (!isFunction(handle)) throw `handle of ${name}必须为函数`;
    const handles = get(this, [ons, name], new Set());
    this[ons][name] = handles.add(handle);
  }
  // 触发事件
  fire(name, data) {
    get(this, [ons, name], new Set()).forEach(h => h(data));
  }
  // 取消事件监听, handle参数不传，则取消所有事件
  off(name, handle) {
    if (!name) throw 'name不能为空';
    if (isUndefined(handle)) {
      delete this[ons][name];
    } else if (this.size(name)) {
      this[ons][name].delete(handle);
    }
  }
  // 获取事件的监听函数数量
  size(name) {
    return get(this[ons], [name, 'size'], 0);
  }
}
