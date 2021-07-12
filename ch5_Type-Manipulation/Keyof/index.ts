type Point = { x: number; y: number };
type P = keyof Point;
const p: P = "y";

// index signature with keyof
type Arrayish = {
  [n: number]: unknown;
};

type A = keyof Arrayish;

type Mapish = {
  [s: string]: boolean;
};

type M = keyof Mapish;

export {};
