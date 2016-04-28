# WhatIs [![Build Status](https://travis-ci.org/mithralaya/WhatIs.svg?branch=master)](https://travis-ci.org/mithralaya/WhatIs)
A small util class.

*The plugin is only available for Node.JS currently.*

##Install package

```
npm install TFWhatIs
```

##Include package

```
var W = require('TFWhatIs');
```

##Functions available

####type: also checks for email, url, phone number(uses libphonenumber library), NaN, Float, Int and Infinity  types
```
W.type("hello world"); //'String'
W.type(123); //'Int'
W.type(123.23); //'Float'
W.type(NaN); //'NaN'
W.type(Infinity); //'Number'
W.type(-Infinity); //'Number'
W.type({}); //'Object'
W.type(undefined); //'Undefined'
W.type([]); //'Array'
W.type(true); //'Boolean'
W.type(new Date()); //'Date'
W.type(null); //'Null'
W.type("test@test.com"); //'Email'
W.type("http://www.google.com/?q=testing"); //'Url'
W.type("+44 7700 900804"); //'Phone'
```

####isNaN:
```
W.isNaN(NaN); //true
W.isNaN(1312); //false
```

####isFalsey: even checks for empty object and array
```
W.isFalsey(false); //true
W.isFalsey(null); //true
W.isFalsey(0); //true
W.isFalsey(""); //true
W.isFalsey("   "); //true
W.isFalsey({}); //true
W.isFalsey([]); //true
W.isFalsey(undefined); //true
W.isFalsey(NaN); //true
W.isFalsey(["", null, 0, NaN, undefined, , false]); //true
```

####isEmpty: same as isFalsey but it returns false for false and 0. This helps to check required fields
```
W.isEmpty(false); //false
W.isEmpty(null); //true
W.isEmpty(0); //false
W.isEmpty(""); //true
W.isEmpty("   "); //true
W.isEmpty({}); //true
W.isEmpty([]); //true
W.isEmpty(undefined); //true
W.isEmpty(NaN); //true
W.isEmpty(["", null, 0, NaN, undefined, , false]); //false
```

####trim:
```
W.trim("          "); //""
W.trim("    hello   "); //"hello"
W.trim(["", null, 0, NaN, undefined, false, , "hello"]); //["hello"]
```
