// Template Literal Type은 string literal type을 기반으로 만들어졌다. 자바스크립트의 template literal 문법과 같다. 하지만 타입에서만 사용한다.
type World = "world";
type Greeting = `Hello ${World}`;

type Email = "welcom_email" | "email_heading";
type Footer = "footer_title" | "footer_sendoff";

type AllLocale = `${Email} ${Footer}`;

type PropsEventSource<T> = {
  on<Key extends keyof T & string>(
    eventName: `${Key}Changed`,
    callback: (newValues: T[Key]) => void
  ): void;
};

declare function makeObj<T>(obj: T): T & PropsEventSource<T>;

const p = makeObj({
  firstName: "se",
  lastName: "yu",
  age: 28,
});

type Gg = Uppercase<"h">;
type Lc = Lowercase<"H">;
type Cl = Capitalize<"dK">;
type Uc = Uncapitalize<"DD">;
