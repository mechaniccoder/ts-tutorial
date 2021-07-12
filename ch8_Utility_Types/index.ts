// Partial<Type>
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, field: Partial<Todo>) {
  return { ...todo, ...field };
}

// Required
interface Props {
  a?: number;
  b?: number;
}

const obj: Props = { a: 5 };
const obj2: Required<Props> = { a: 2, b: 3 };

// Readonly
interface Todos {
  title: string;
}

const todo1: Readonly<Todos> = {
  title: "hello",
};
todo1.title = "h";

// Record
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris";

const cats: Record<CatName, CatInfo> = {
  boris: { age: 1, breed: "a" },
  miffy: { age: 2, breed: "b" },
};

//  Pick
interface Podo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Podo, "title" | "description">;

const podo: TodoPreview = {
  title: "a",
  description: "b",
};

// Omit
interface Oodo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type OodoPreview = Omit<Oodo, "description">;

const oodo: OodoPreview = {
  title: "1",
  completed: true,
  createdAt: 0,
};

// Exclude
type T0 = Exclude<"a" | "b" | "c", "a">;

// Extract
type F0 = Extract<"a" | "b" | "c", "a" | "f">;
type F1 = Extract<string | number | (() => void), Function>;

type G0 = NonNullable<string | number | undefined>;
type G1 = NonNullable<string[] | null | undefined>;

// Parameters
// 함수의 인자로 튜플을 만든다.
type P1 = Parameters<() => string>;
type P2 = Parameters<(s: string) => void>;

// ConstructorParameters
// Parameters와 비슷하게 Constructor의 파라미터를 활용해 튜플이나 배열을 만든다.

// ReturnType
type R1 = ReturnType<() => string>;
type R2 = ReturnType<(s: string) => void>;

// InstanceType
class C {
  x = 0;
  y = 0;
}

type C1 = InstanceType<typeof C>;

// ThisParameter
// this의 타입을 추출한다.
function toHex(this: number) {
  return this.toString(16);
}

const testHex = toHex;

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

// OmitThisParameter
function toHex1(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex1> = toHex.bind(5);
export {};
