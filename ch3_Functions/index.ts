function greet(fn: (a: string) => void) {
  fn("hello");
}

// call signatures
type Desc = {
  descrip: string;
  (some: string): boolean; // call signature
};

function doSomething(fn: Desc) {
  console.log(fn.descrip + fn("hello"));
}

// construct signatures
type SomeCons = {
  new (s: string): object;
};

function fn(ctor: SomeCons) {
  return new ctor("hello");
}

// call and contruct signature
interface CallOrCons {
  new (s: string): object;
  (s: string): string;
}

// generic function
function first<T>(arr: T[]): T {
  return arr[0];
}

// 명시적으로 type parameter를 주지않아도 infer한다.
first([1, 2, 3]);

// constraint
function long<T extends { length: number }>(a: T, b: T) {
  if (a.length > b.length) {
    return a;
  }
  return b;
}

function minumum<T extends { length: number }>(obj: T, minimum: number) {
  if (obj.length > minimum) {
    return obj;
  } else {
    return { length: minimum };
  }
}

const array = minumum("1", 1);

// best practice
function fE<T>(arr: T[]) {
  return arr[0];
}

function sE<T extends any[]>(arr: T) {
  return arr[0];
}

// function overloads
function hi(a: string): string; // overload signature
function hi(x: string, y: string): string; // overload signature
function hi(a1: string, b1?: string): string {
  // implementation signature
  if (b1 !== undefined) {
    return a1 + b1;
  } else {
    return a1;
  }
}

// declaring this in function
interface DB {
  filterUsers(filter: (this: string) => boolean): string[];
  sayHi(a: string): string;
  (a: string): boolean;
}

// void is not same with undefined
function noop() {
  return;
}

// unknown: much safer than any
function f1(a: any) {
  a.b();
}

function f2(a: unknown) {
  a.b();
}

function safeParse(s: string): unknown {
  return JSON.parse(s);
}

const a3 = safeParse("hello");

// rest parameter
function multiply(n: number, ...m: number[]) {}

multiply(1, 2, 3, 4);

const ff1: VoidFunction = () => {
  return true;
};

const v1 = ff1();
