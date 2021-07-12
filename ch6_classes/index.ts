// fields
class Point {
  public x: number;
  public y: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;

// --strictPropertyInitialization field 초기화가 필수인지 선택하는 속성.

// readonly
class Greeter {
  readonly name: string = "world";

  error() {
    this.name = "hi";
  }
}

// constructor
// constructor don't have type parameter like generics
// constructor always returns instance(this)
class Point1 {
  constructor(x: number, y?: number) {}
}

class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    super();
    // this를 사용하기전에 먼저 super를 호출해야한다.
    // 자식 클래스는 this를 객체에 할당하는 작업을 부모에게 위임하기 때문ㅇ
    console.log(this.k);
  }
}

// getter setter
class C {
  _length = 0;
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }
}

class MyClass {
  // index signature
  [s: string]: string | ((s: string) => string);

  check(s: string): string {
    return "";
  }
}

// class heritage
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping");
  }
}

class Ball implements Pingable {
  pong() {
    console.log("pong");
  }
}

interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(s: string) {
    return false;
  }
}

// overiding
class Base1 {
  greet() {
    console.log("hello world");
  }
}

class Derived1 extends Base1 {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log("hello", name);
    }
  }
}

class Base2 {
  greet() {
    console.log("hello world");
  }
}

class Derived2 extends Base2 {
  greet() {
    console.log("hi");
  }
}

class MsgError extends Error {
  constructor(m: string) {
    super(m);
  }

  sayHello() {
    console.log("hello");
  }
}

const mE = new MsgError("error");

class Base5 {
  protected x: number = 1;
}

class Derived3 extends Base5 {
  f1(other: Derived3) {
    other.x = 10;
  }

  // this를 타고 검색하는 것과 다르게 참조값으로 멤버에 접근하는 것은
  // 문맥을 알 수 없으므로 에러가 발생한다.
  f2(other: Base5) {
    other.x = 15;
  }
}

// cross instance privat access
class A {
  private x = 10;
  public sameAs(other: A) {
    other.x = this.x;
  }
}

class B5 {
  static x = 0;

  static printNum() {
    return B.x;
  }
}

class B2 extends B5 {
  // static method is also inherited
  tt = B5.printNum();
}

// generic class
class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}

// static member들은 type parameter를 참조할 수 없다.

// arrow function
class MyClass {
  name = "my class";
  getName = () => {
    return this.name;
  };
}

const c = new MyClass();
const g = c.getName;
console.log(g());

function fn(this: any, x: number) {}

// this - type guards
class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
}

// parameter properties
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {}
}

// abstract
abstract class Base10 {
  abstract getName(): string;

  printName() {
    console.log("hello" + this.getName());
  }
}

class Derived10 extends Base10 {
  getName() {
    return "seunghwan";
  }
}

const d = new Derived10();

function greet(ctor: new () => Base10) {
  const instance = new ctor();
  instance.printName();
}

// relation
class T1 {
  x = 0;
  y = 0;
}

class T2 {
  x = 1;
  y = 1;
}

const t: T1 = new T2();

class L1 {
  name: string;
  age: number;
}

class L2 {
  name: string;
  age: number;
  salary: number;
}

const l: L1 = new L2();

class Basee {
  a = 0;
}

class Subes extends Basee {
  b = 10;
}

const bb: Basee = new Subes();

export {};
