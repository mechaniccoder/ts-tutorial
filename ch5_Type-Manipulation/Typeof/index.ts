let s = "hello";
let n: typeof s;

type Predicate = (x: unknown) => string;
type K = ReturnType<Predicate>;

function f() {
  return { x: 10, y: 3 };
}

type P = ReturnType<typeof f>;
export {};
