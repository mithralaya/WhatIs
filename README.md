# WhatIs [![travis-ci](https://travis-ci.org/mithralaya/WhatIs.svg?branch=master)](https://travis-ci.org/mithralaya/WhatIs)
A small util class that can take input and returns an answer for general javascript utility.

The plugin is only available for Node.JS currently.

##Install package

```
npm install TFWhatIs
```

##Include package

```
var W = require('TFWhatIs');
```

##Functions available

####type:
```
W.type("hello world"); //'String'
W.type(123); //'Number'
W.type(123.23); //'Number'
W.type(NaN); //'Number'
W.type({}); //'Object'
W.type(undefined); //'Undefined'
W.type([]); //'Array'
W.type(true); //'Boolean'
W.type(new Date()); //'Date'
W.type(null); //'Null'
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

####trim:
```
W.trim("          "); //""
W.trim("    hello   "); //"hello"
W.trim(["", null, 0, NaN, undefined, false, , "hello"]); //["hello"]
```
