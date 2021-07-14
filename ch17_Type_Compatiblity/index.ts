interface Pet {
  name: string;
}

class Dog {
  name: string;
}

let pet: Pet;
pet = new Dog();
// 식별자의 이름이 아니라 실제로 멤버들이 어떻게 구성되어 있는지에 영향을 받는다.

interface Pet1 {
  name: string;
}

let pet1: Pet1;

const dog = { name: "seung", age: 28 };

// pet1의 타입인 Pet1에는 age property가 없음에도 불구하고 dog와 호환된다.
// 즉, dog는 name property를 가지기만 하면 된다는 의미이다.
pet1 = dog;

// functions
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

// 함수의 경우는 primitive, object type과는 조금 다르게 작동한다.
// 함수는 인자를 버리는 쪽으로 호환이 된다.
// Array.forEach를 생각해봐라 콜백함수로 element, index, array를 전달할 수 있지만 우리는 대부분 element만을 인자로 넘긴다.
// 즉, 함수는 인자가 적은 방향으로 호환된다.
y = x;
x = y;

// classes
// 클래스의 경우 object와 마찬가지로 오직 member만을 비교한다.
// constructor, static member는 호환에 영향을 주지 않는다.
class A {
  feet: string;
  static hi: number;
}

class B {
  feet: string;
  static tt: string;
}

let a: A;
let b1: B;
a = b1;
b1 = a;

// 다시 한번 말하자면 타입스크립트는 structural type system을 가진다.
// 즉 멤버가 어떻게 구성되어있는지에 영향을 받는다.
interface Emtyp<T> {}
let x3: Emtyp<number>;
let y3: Emtyp<string>;

// 이게 가능한 이유는 y3가 x3와 구조적으로 같기때문이다.
x3 = y3;

interface NotEmpty<T> {
  data: T;
}

let x4: NotEmpty<number>;
let y4: NotEmpty<string>;

// 위의 예제처럼 호환이 안되는 이유는 member의 타입이 정해져서 마치 generic이 아닌것처럼 행동하기 때문이다.
x4 = y4;

// type argument가 정해지지 않은 generic은 any로 평가된다.
let identity = function <T>(x: T): T {
  return x;
};
let reverse = function <U>(y: U): U {
  return y;
};

identity = reverse; // (x: any) => any === (y: any) => any
export {};
