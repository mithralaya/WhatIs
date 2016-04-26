"use strict";

function W() {

}

W.prototype.type = function(what) {
  return Object.prototype.toString.call(what).slice(8, -1);
};

W.prototype.isNaN = function(what) {
  if (what !== what) {
    return true;
  }
  return false;
};

module.exports = new W();
