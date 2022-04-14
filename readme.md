## not-same
- Check object equality in javascript 
- Inspired by the absence of deep equality check for objects in javascript


```
const isObjSame = require("is-obj-same");


const objectA = {a: "aa", b: "bb", c: ["cd": {e: "ee"}, "dc": {f: "ff", g: ["a", "b", "c", "d"]}] }
const objectA = {a: "aa", b: "bb", c: ["cd": {e: "ee"}, "dc": {f: "ff"}, g: ["a", "c", "b", "D"]] }


console.log(isObjSame(objectA, objectB)); // false

```

### Install

```
npm install not-same
```

## NB:
- I can't fully guarantee the library, since I haven't tested all use-cases, but it works to an extent. (I intend to do this eventually, once I am free)