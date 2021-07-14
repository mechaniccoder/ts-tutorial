// symbol is primitive type
let sym1 = Symbol();
let sym2 = Symbol("key");
let sym3 = Symbol("key");

sym2 === sym3; // false, symbol is unique

let obj = {
  [sym1]: "value", // we can use symbol as key
};

const getClassNameSymbol = Symbol();

class C {
  [getClassNameSymbol]() {
    return "c";
  }
}

const c = new C();
c[getClassNameSymbol]();

// built-in symbol is used to represent internal behavior
// 외울필요는 없지만 인식은 해두자.

export {};
