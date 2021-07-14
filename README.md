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

### type guard, narrowing, type predicates

- typescript에서는 여러 가지 type guard들이 있다. 타입을 체크하는 특별한 코드를 의미하는데 이를 활용해 타입을 narrowing할 수 있다. 즉, 좀 더 specific한 타입으로 범위를 줄여가는 과정이다.

- type predicates는 user가 custom하게 정의할 수 있고 이를 활용해 narrowing할 수 있다. `pet is string` 을 return 타입에 사용한다.

### function overloading

- 타입스크립트에서는 함수 오버로딩을 지원한다. 오버로딩은 크게 두 부분으로 나뉜다. overload signature / implementation signature

- overload signature는 구현하는 부분이 아닌 함수의 인자와 리턴값의 관한 타입들을 표시하며, implementation signature는 실제로 이 함수를 어떻게 구현하는지를 표현한다.

- implementation signature는 overload signature와 호환이 가능해야 한다.

### Interfaces vs. Intersections

- 타입을 확장하는 두가지 방법이다. 차이점은 interface는 extends키워드를 사용해서 확장을 하지만, intersections의 경우는 & 연산자를 활용한 결과에 type alias로 naming을 하여 이를 구현한다.

### Arrow function in class

- class에서 arrow함수, 일반 함수를 사용하는 것에 차이점이 있다. 일반 함수를 사용하면 이를 클래스에 바인딩하므로 프로토타입 chain를 통해 메서드를 검색할 수 있지만, arrow함수는 super키워드를 활용한 프로토타입 체인을 통해 메서드를 검색할 수 없다. 대신에 각 함수의 복사본을 인스턴스에 바인딩하므로 더 많은 메모리를 사용한다.

### Namespace

- 파일을 나누고 그 파일을 사용하기 위해 외부의 모듈을 import하는 문법을 사용한다. 우리가 흔히 말하는 모듈이란 외부의 모듈을 말한다. 반대로 namespace는 하나의 파일에서 내부에 정의된 internal 모듈을 의미한다.
