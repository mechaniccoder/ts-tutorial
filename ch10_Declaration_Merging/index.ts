// Merging interfaces

interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

// 이렇게 같은 이름의 인터페이스를 정의하면 프로퍼티가 서로 머지된다.
let box: Box = {
  height: 2,
  width: 2,
  scale: 2,
};

interface Cloner {
  clone(animal: Animal): Animal;
}
interface Cloner {
  clone(animal: Sheep): Sheep;
}
interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
}

// 위의 세 인터페이스는 아래의 머지된 인터페이스로 만들어진다.
interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
  clone(animal: Sheep): Sheep;
  clone(animal: Animal): Animal;
}

// string literal type은 overload list에서 bubble up된다.
interface Document {
  createElement(tagName: any): Element;
}
interface Document {
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
  createElement(tagName: string): HTMLElement;
  createElement(tagName: "canvas"): HTMLCanvasElement;
}

interface Document {
  // bubble up된 string literal type
  createElement(tagName: "canvas"): HTMLCanvasElement;
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
  createElement(tagName: string): HTMLElement;
  createElement(tagName: any): Element;
}

// namespace
namespace Animals {
  export class Zebra {}
}

namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Dog {}
}

// 위의 두 namespace는 아래 결과를 가진다.
namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Zebra {}
  export class Dog {}
}

// namespace에서 export되지 않은 멤버는 다른 namespace에서 접근할 수 없다.
namespace Animal {
  let haveMuscles = true;
  export function animalsHaveMuscles() {
    return haveMuscles;
  }
}
namespace Animal {
  export function doAnimalsHaveMuscles() {
    return haveMuscles; // Error, because haveMuscles is not accessible here
  }
}

// namespace와의 merging
class Album {
  label: Album.AlbumLabel;
}

namespace Album {
  export class AlbumLabel {}
}

// 함수와 namespace
function buildLabel(name: string): string {
  return buildLabel.suffix + name + buildLabel.prefix;
}

namespace buildLabel {
  export let suffix: "";
  export let prefix = "hello";
}

export {};
