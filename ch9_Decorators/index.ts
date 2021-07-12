// Class Decorators
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "repot";
  title: string;
  constructor(t: string) {
    this.title = t;
  }
}

const br = new BugReport("hi");

function repota<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    // decorator가 type을 변경하지는 않으므로 typescript는 repotingURL을 모른다.
    reportingURL = "https://www..."; 
}

@repota
class BugReport1 {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport("hi");

// method decorator & accessor decorator
// 1. constructor, 2. property name, 3. property descriptor
function enumerable(value: boolean) {
  return function(target: any, propertyKey:string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  }
}

class Greeter {
  greeting: string;
  constructor(m: string) {
    this.greeting = m;
  }

  @enumerable(false)
  greet() {
    return 'hello' + this.greeting;
  }
}

export {};
