# TypeScript zero to hereo!

- 이번 기회에 타입스크립트 구석구석 제대로 익혀보겠습니다.

# TIL

### Erased Types

- 타입스크립트의 type annotation은 브라우저에서는 이해할 수가 없는 문법이기 때문에 tsc로 트랜스파일링하면 없어진다.

### Downleveling

- Babel처럼 tsc도 최신 자바스크립트 문법을 더 낮은 버전으로 트랜스파일링 한다. 이를 `downleveling`이라 부른다. 기본으로 tsc의 `target`은 `es3`로 설정되어 있다.

### Strictness

- 타입스크립트의 엄격한 type checking 기능을 활용하기 위해서 tsc 설정의 `strict: true`로 하는게 좋다. 이를 키게 되면 `noImplicitAny`(any를 명시하지 않는 것을 허용하지 않는 속성) 혹은 `strictNullChecks`(null을 반드시 확인하는 속성)로 인해 런타임 에러가 발생하는 것을 막을 수 있다.

### Interface vs Type Alias

|            | interface                                         | type alias              |
| ---------- | ------------------------------------------------- | ----------------------- |
| 상속       | extends를 사용                                    | intersections(&)를 사용 |
| new field  | 같은 interface를 정의하면 새로운 필드로 추가된다. | 에러                    |
| union type | 불가능                                            | 가능                    |
