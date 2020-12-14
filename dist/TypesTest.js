"use strict";
//typescript can define type of variables:
let a = 1 + 2;
let b = a + 5;
let c = {
    apple: a,
    banana: b
};
let d = c.apple * 4;
//not possible (compile error):
//d = "text";
//typescript cannot define type of variable:
let e;
//so, it's possible:
e = { apple: 5 };
console.log(e);
e = e + 5;
e = e + "text";
console.log(e);
//# sourceMappingURL=TypesTest.js.map