// module이 external module이라면 파일 내의 internal module은 namespace가 그 역할을 한다.

namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}

namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Square {}
  }
}

import polygons = Shapes.Polygons;
const s = new polygons.Square();

// 보통 cdn이나 script로 javascript를 로드하고나서
// D3.someApi 이런식으로 사용하는 경우가 많은데 이럴때 namespace를 사용할 수 있다.
declare namespace D3 {
  export interface Selectors {
    select: {
      (selector: string): string;
    };
  }
}

interface Test {
  test: {
    (ss: string): string;
  };
}

const obj: Test = {
  test(s: string) {
    return s;
  },
};
export {};
