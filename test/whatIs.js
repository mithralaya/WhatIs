"use strict";

var assert = require("assert"),
    W = require("../whatIs");
console.log(W);
describe('WhatIs: ', function() {
  describe('Type', function() {
    it("should return String for a string variable", function() {
      assert.equal(W.type("hello"), "String");
    });
    it("should return Boolean for false", function() {
      assert.equal(W.type(false), "Boolean");
    });
    it("should return Number for int", function() {
      assert.equal(W.type(234), "Number");
    });
    it("should return Number for decimal", function() {
      assert.equal(W.type(234.23), "Number");
    });
    it("should return Number for NaN", function() {
      assert.equal(W.type(NaN), "Number");
    });
    it("should return Object for object", function() {
      assert.equal(W.type({}), "Object");
    });
    it("should return Array for array", function() {
      assert.equal(W.type([]), "Array");
    });
    it("should return Date for a date", function() {
      assert.equal(W.type(new Date()), "Date");
    });
    it("should return undefined for a undefined", function() {
      assert.equal(W.type(undefined), "Undefined");
    });
  });

  describe('isNaN', function() {
    it("should return true for NaN", function() {
      assert.equal(W.isNaN(NaN), true);
    });
    it("should return false for string", function() {
      assert.equal(W.isNaN("hello"), false);
    });
    it("should return false for int", function() {
      assert.equal(W.isNaN(3434), false);
    });
    it("should return false for decimal", function() {
      assert.equal(W.isNaN(3434.324), false);
    });
    it("should return false for undefined", function() {
      assert.equal(W.isNaN(undefined), false);
    });
    it("should return false for 0", function() {
      assert.equal(W.isNaN(0), false);
    });
    it("should return false for false", function() {
      assert.equal(W.isNaN(false), false);
    });
    it("should return false for object", function() {
      assert.equal(W.isNaN({}), false);
    });
    it("should return false for array", function() {
      assert.equal(W.isNaN([]), false);
    });
  });
});
