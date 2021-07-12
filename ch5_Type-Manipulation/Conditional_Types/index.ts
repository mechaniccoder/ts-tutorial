interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;

type IdLabel = string;
type NameLabel = number;

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

type NameOrId<T extends string | number> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel1<T extends string | number>(idorName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel1(1);
let b = createLabel1("h");
let c = createLabel1(Math.random() ? "s" : 10);

type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

interface Dof {
  bark(): void;
}

type EmailMessageContents = MessageOf<Email>;
type DogMessageContents = MessageOf<Dof>;

// infer 키워드를 활용해 element의 타입을 추론하자.
// indexed access를 통해 type을 return하는 것보다 훨씬 더 편리하다.
type Flatten<T> = T extends Array<infer Item> ? Item : T;
type Str = Flatten<string[]>;
type Num = Flatten<number>;

type GetReturnType<T> = T extends (...args: never[]) => infer Return
  ? Return
  : never;

type Num1 = GetReturnType<() => number>;
type Str1 = GetReturnType<() => string>;
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean>;

declare function StringOrNum(x: string): number;
declare function StringOrNum(x: number): string;
declare function StringOrNum(x: number | string): string | number;

type StringOrNumType = ReturnType<typeof StringOrNum>;

type ToArray<T> = [T] extends [any] ? T[] : never;
type StrToArray = ToArray<string | number>;
export {};
