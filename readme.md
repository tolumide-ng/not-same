## not-same

-   Inspired by the absence of deep equality check for objects in javascript

```
const isObjSame = require("not-same");


const objectA = {a: "aa", b: "bb", c: ["cd": {e: "ee"}, "dc": {f: "ff", g: ["a", "b", "c", "d"]}] }
const objectA = {a: "aa", b: "bb", c: ["cd": {e: "ee"}, "dc": {f: "ff"}, g: ["a", "c", "b", "D"]] }


console.log(isObjSame(objectA, objectB)); // false

```

### Install

```
npm install not-same
```
