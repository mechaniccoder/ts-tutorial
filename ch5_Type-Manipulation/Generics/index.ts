// call signature with generic
function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: { <T>(arg: T): T } = identity;

interface GenericIdentityFn {
  <T>(arg: T): T;
}

let gIF: GenericIdentityFn = identity;

// generic classes
class GenericNumber<T> {
  zeroVal: T;
  add: (x: T, y: T) => T;
}

let myGN = new GenericNumber<number>();
myGN.zeroVal = 0;
myGN.add = (x, y) => x + y;

// generic constraints
interface Lengthwise {
  length: number;
}

function logginIdentity<T extends Lengthwise>(arg: T) {
  console.log(arg.length);
}

// class type in generic
function factory<T>(c: { new (): T }): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createAnimal<T extends Animal>(c: { new (): T }): T {
  return new c();
}

createAnimal(Bee);
createAnimal(Lion);
