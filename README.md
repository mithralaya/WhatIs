# WhatIs
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

###Type:
```
W.type("hello world"); //returns 'String'
W.type(123); //returns 'Number'
W.type(123.23); //returns 'Number'
W.type(NaN); //returns 'Number'
W.type({}); //returns 'Object'
W.type(undefined); //returns 'Undefined'
W.type([]); //returns 'Array'
W.type(true); //returns 'Boolean'
W.type(new Date()); //returns 'Date'
W.type(null); //returns 'Null'
```

###NaN:
```
W.isNaN(NaN); //true
W.isNaN(1312); //false
```

###Falsey: even checks for empty object and empty array
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
W.isFalsey(["", null, 0, NaN, undefined, false]); //true
```

###trim:
```
W.trim("          "); //""
W.trim("    hello   "); //"hello"
W.trim(["", null, 0, NaN, undefined, false, , "hello"]); //["hello"]
```
