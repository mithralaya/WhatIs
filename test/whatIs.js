"use strict";

var assert = require("assert"),
    What = require("../whatIs");

describe('WhatIs: ', function() {
  describe('type', function() {
    it("should return String for a string variable", function() {
      assert.equal(What.type("hello"), "String");
    });
    it("should return String for a empty string", function() {
      assert.equal(What.type(""), "String");
    });
    it("should return Boolean for false", function() {
      assert.equal(What.type(false), "Boolean");
    });
    it("should return Number for int", function() {
      assert.equal(What.type(234), "Number");
    });
    it("should return Number for decimal", function() {
      assert.equal(What.type(234.23), "Number");
    });
    it("should return Number for NaN", function() {
      assert.equal(What.type(NaN), "Number");
    });
    it("should return Object for object", function() {
      assert.equal(What.type({}), "Object");
    });
    it("should return Array for array", function() {
      assert.equal(What.type([]), "Array");
    });
    it("should return Date for a date", function() {
      assert.equal(What.type(new Date()), "Date");
    });
    it("should return undefined for a undefined", function() {
      assert.equal(What.type(undefined), "Undefined");
    });
    it("should return Null for a null value", function() {
      assert.equal(What.type(null), "Null");
    });
    it("should return Email for an email address", function() {
      assert.equal(What.type("test@test.com"), "Email");
    });
    it("should return Url for an web address", function() {
      assert.equal(What.type("http://www.google.com/?q=testing"), "Url");
    });
    it("should return Phone for a phone number", function() {
      assert.equal(What.type("+447595171946"), "Phone");
    });
  });

  describe('isNaN', function() {
    it("should return true for NaN", function() {
      assert.equal(What.isNaN(NaN), true);
    });
    it("should return false for string", function() {
      assert.equal(What.isNaN("hello"), false);
    });
    it("should return false for int", function() {
      assert.equal(What.isNaN(3434), false);
    });
    it("should return false for decimal", function() {
      assert.equal(What.isNaN(3434.324), false);
    });
    it("should return false for undefined", function() {
      assert.equal(What.isNaN(undefined), false);
    });
    it("should return false for 0", function() {
      assert.equal(What.isNaN(0), false);
    });
    it("should return false for false", function() {
      assert.equal(What.isNaN(false), false);
    });
    it("should return false for object", function() {
      assert.equal(What.isNaN({}), false);
    });
    it("should return false for array", function() {
      assert.equal(What.isNaN([]), false);
    });
    it("should return false for null", function() {
      assert.equal(What.isNaN(null), false);
    });
  });

  describe('isFalsey', function() {
    it("should return true for false", function() {
      assert.equal(What.isFalsey(false), true);
    });
    it("should return true for null", function() {
      assert.equal(What.isFalsey(null), true);
    });
    it("should return true for 0", function() {
      assert.equal(What.isFalsey(0), true);
    });
    it("should return true for undefined", function() {
      assert.equal(What.isFalsey(undefined), true);
    });
    it("should return true for NaN", function() {
      assert.equal(What.isFalsey(NaN), true);
    });
    it("should return true for empty string", function() {
      assert.equal(What.isFalsey(""), true);
    });
    it("should return true for a empty string with spaces", function() {
      assert.equal(What.isFalsey("        "), true);
    });

    it("should return true for a empty object", function() {
      assert.equal(What.isFalsey({

      }), true);
    });
    it("should return true for a empty array", function() {
      assert.equal(What.isFalsey([]), true);
    });
    it("should return true for a falsey array", function() {
      assert.equal(What.isFalsey(["", null, 0, NaN, undefined, false]), true);
    });
    it("should return false for a empty object", function() {
      assert.equal(What.isFalsey({
        "hello": "world"
      }), false);
    });
    it("should return false for a empty array", function() {
      assert.equal(What.isFalsey(["hello"]), false);
    });
    it("should return false for 1", function() {
      assert.equal(What.isFalsey(1), false);
    });
    it("should return false for a string", function() {
      assert.equal(What.isFalsey("dfsdf"), false);
    });
  });
  describe('trim', function() {
    it("should return empty string for a string with space", function() {
      assert.equal(What.trim("          "), "");
    });
    it("should return empty string for a string with prefix and sufix space", function() {
      assert.equal(What.trim("     Hello     "), "Hello");
    });
    it("should return a trimed array by removing all falsey objects", function() {
      assert.deepEqual(What.trim(["", null, 0, NaN, undefined, false, "Hello"]), ["Hello"]);
    });
  });
});
