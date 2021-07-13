// Numeric enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction1 {
  Up, // 자동으로 0으로 초기화된다.
  Down,
  Left,
  Right,
}

// String enums
enum Direction3 {
  Up = "Up",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum HeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  G = "123".length,
}

// enum은 runtime에서 객체로 변환된다.

// keyof typeof enum
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

// enum의 멤버들을 union으로 변경하기 위해 keyof typeof를 사용하자.
type LogLevelStrings = keyof typeof LogLevel;

// reverse
enum Enum3 {
  A,
}

let a = Enum3.A;
let nameOfA = Enum3[a];

// const enum
// const enum은 computed member를 가질 수 없다.
const enum Enum {
  A = 1,
  B = A * 2,
}

// Ambient enum
declare enum Enum5 {
  A = 1,
  B,
  C = 2,
}

// object as const vs enum
const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection1 = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

function walk(dir: EDirection) {}

// object as const의 경우 추가적인 타입 definition이 필요하다.
type Direction10 = typeof ODirection1[keyof typeof ODirection1];
function run(dir: Direction10) {}
export {};
