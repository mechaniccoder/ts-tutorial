// 여기서는 기본적인 타입을 복습하도록 하죠.

// primitives type
const s: string = "Hello TypeScript!";
const n: number = 10;
const b: boolean = false;

// Arrays
const na1: number[] = [1, 2, 3];
const na2: Array<number> = [1, 2, 3];

// any
// any를 사용하면 type checking을 비활성화합니다.
let obj: any = { x: 0 };
obj.foo();
obj.bar = 100;

// 이렇게 명시적으로 타입을 작성하지 않아도 타입을 추론합니다.
const myName = "Alic";

// optional property
function printName(obj: { first: string; last?: string }) {
  console.log(obj.last?.toUpperCase()); // 이렇게  항상 undefined값을 인식해줍시다.
}

function printId(id: number | string) {
  if (typeof id === "number") {
    console.log(id);
  } else {
    console.log(id.toUpperCase());
  }
}

/**
 * primitive 타입은 typeof를 활용하는데
 * array는 Array.isArray를 활용하는군요.
 */
function welcomePeople(x: Array<string> | string) {
  if (Array.isArray(x)) {
    console.log(x.join(" and "));
  } else {
    console.log(x);
  }
}

// type aliases
type Point = {
  x: number;
  y: number;
};

type ID = number | string;

// interfaces
interface IPoint {
  x: number;
  y: number;
}

interface IPoint {
  z: number;
}

// type assertion
const t = document.querySelector(".main_canvas") as HTMLCanvasElement;

// .tsx 파일에서는 사용 못한다.
const t1 = <HTMLCanvasElement>document.querySelector(".main_canvas");

let a1 = "hi";
a1 = "ni";

const a2 = "hi"; // literal type

// literal inference
const req = { url: "https", method: "get" as "get" };
const req2 = { url: "https", method: "get" } as const;

// null and undefined
// 에러발생을 방지하기위해 항상 srictNullChecks 옵션을 키자.
function doSomething(x: string | null) {
  if (x === null) {
  } else {
    console.log(x.toUpperCase());
  }
}

// non-null assertion
function live(x?: number | null) {
  console.log(x!.toFixed()); // non-null assertion을 사용할땐 조심하자! 런타임 에러가 발생할 수 있다.
}

// Enum
enum Status {
  loading,
  success,
  failure,
}

// bigint
const oneHundred: bigint = BigInt(100);

// symbol
const firstName: symbol = Symbol("name");
