// typescript는 typeof, intanceof, in과 같은 type guard를 활용해
// narrowing을 할 수 있습니다.

function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  }
  return padding + input;
}

function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    // typeof null === 'object' 이다. 조심해라.
    for (const s of strs) {
      console.log(s);
    }
  }
}

function printAll1(strs: string[] | string | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

// equality narrowing
function example(x: string | number, y: string | boolean) {
  if (x == y) {
    // equality로 type을 narrowing합니다.
  }
}

// in type guard
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

// instaceof narrowing
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// type predicates (pet is Fish)
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Discriminated unions
interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

// never 존재할 수 없는 타입일 경우
const a: string & number;
