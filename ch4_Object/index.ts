// optional property
interface PaintOptions {
  shape: string;
  x?: number;
  y?: number;
}

const shap: PaintOptions = {
  shape: "shap",
  x: 2,
};

// readonly
interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  console.log(obj.prop);
}

interface Home {
  // resident의 포인터값만 readonly이고 그 안의 멤버들은 수정할 수 있다.
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  console.log(home.resident.name);
  home.resident = {};
}

interface Person {
  name: string;
  age: number;
}

interface RdPerson {
  readonly name: string;
  readonly age: number;
}

const a4: Person = {
  name: "se",
  age: 28,
};

let rp: RdPerson = a4;

// Index Signatures
interface Animal {
  name: string;
}

interface Dog {
  breed: string;
}

interface NotOkay {
  // 100으로 인덱싱했을때 자바스크립트는 이를 자동으로 string 변환한다.
  // 따라서 아래의 2가지 index signature는 에러가 발생한다.
  // 둘 다 호환이 가능하도록 해야한다.
  [x: number]: Animal;
  [x: string]: Dog | Animal;
}

// extends interface
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
interface AddressWithUnit extends BasicAddress {
  unit: string;
}

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

// extends multiple types
interface ColorfulCircle extends Colorful, Circle {}

// intersection types
type ColorfulCircle2 = Colorful & Circle;

interface Box {
  contents: unknown;
}

let x: Box = {
  contents: "helo",
};

// we can check a type of property
if (typeof x.contents === "string") {
  x.contents.toUpperCase();
}

interface GenericBox<T> {
  contents: T;
}

const gb: GenericBox<string> = {
  contents: "hello",
};

type TBox<T> = {
  contenst: T;
};

const map1: Map<string, string> = new Map([["j", "j"]]);
const set1: Set<string> = new Set(["h", "h", "h1"]);
const ra: ReadonlyArray<string> = ["1", "12", "13"];
let rt: readonly string[] = [];
let ry: string[] = ["1", "2"];

// readonly를 사용하면 mutable obejct에 할당할 수 없다. 반대는 가능!
ry = rt;

// Tuple
type stringnumber = [string, number];
function doSomgehint1(st: stringnumber) {
  const [ss, nn] = st;
}
// optional tuple
type Ei = [number, number, string?];

function setco(coo: Ei) {
  const [x, y, z] = coo;
}

// rest element with tuple
type RestTuple = [string, number, ...boolean[]];

const rt3: RestTuple = ["h", 1, true, false, true];

//readonly tuple
function doSseom(pair: readonly [string, number]) {
  pair[0] = "h";
}
