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

/**
 * [function description]
 * @param  {[any]} what [description]
 * @return {[type]}      [description]
 */
What.prototype.isFalsey = function(what) {
  if (this.trim(what)) {
    if (this.type(what) === "Object" &&
        JSON.stringify(what) === "{}") {
        return true;
    }
    if (this.type(what) === "Array" &&
        this.trim(what).length === 0) {
          return true;
    }
    return false;
  }
  return true;
};

/**
 * [function description]
 * @param  {[type]} what [description]
 * @return {[type]}      [description]
 */
What.prototype.trim = function(what) {
  if (this.type(what) === "String") {
    return what.trim();
  }
  if (this.type(what) === "Array") {
    return what.filter(Boolean);
  }
  return what;
};

module.exports = new What();
