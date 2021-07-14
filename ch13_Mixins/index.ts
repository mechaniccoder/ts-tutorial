// how to make mixins
type Constructor = new (...args: any[]) => {};

function Scale<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    _scale = 1;

    setScale(value: number) {
      this._scale = value;
    }

    getScale() {
      return this._scale;
    }
  };
}

class Sprite {
  name = "";
  x = 0;
  y = 0;

  constructor(name: string) {
    this.name = name;
  }
}

const EightBitSprite = Scale(Sprite);

const flappySprite = new EightBitSprite("seng");
flappySprite.getScale();

// Constrained Mixins

// 타입에 관한 정보를 얻을 수가 없다.
type Constructor1 = new (...args: any[]) => {};

type GConstructor<T = {}> = new (...args: any[]) => T;

type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
type Spriteable = GConstructor<Sprite>;
type Loggable = GConstructor<{ print: () => void }>;

// 이렇게 constrained 설정함으로써 mixin안에서 base의 멤버에 접근할 수 있다.
function Jumpable<TBase extends Positionable>(Base: TBase) {
  return class Jumpable extends Base {
    jump() {
      this.setPos(2, 2);
    }
  };
}

// Alternative Pattern
class Jump {
  jump() {}
}

class Duckable {
  duck() {}
}

class Sprite1 {
  x = 0;
  y = 0;
}

interface Sprite extends Jump, Duckable {}

function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

// static mixins
function base<T>() {
  class Base {
    static props: T;
  }
  return Base;
}

function derived<T>() {
  class Derived extends base<T>() {
    static anotherProp: T;
  }
  return Derived;
}

class Spec extends derived<string>() {}

Spec.props;
Spec.anotherProp;

// mixin을 만들기 위한 여러가지 방법들을 배웠습니다.
// factory, alternative(prototyp 활용), static mixin
export {};
