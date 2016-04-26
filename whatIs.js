"use strict";

function What() {

}
/**
 * [function description]
 * @param  {[any]} what [input any type]
 * @return {[String]}      [returns the string of type]
 */
What.prototype.type = function(what) {
  return Object.prototype.toString.call(what).slice(8, -1);
};
/**
 * [function description]
 * @param  {[any]} what [description]
 * @return {[type]}      [description]
 */
What.prototype.isNaN = function(what) {
  if (what !== what) {
    return true;
  }
  return false;
};

module.exports = new What();
