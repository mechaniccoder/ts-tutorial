import "reflect-metadata";
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
  };
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
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Greeter {
  greeting: string;
  constructor(m: string) {
    this.greeting = m;
  }

  @enumerable(false)
  greet() {
    return "hello" + this.greeting;
  }
}

// property decorator
// 1. constructor function, 2. name of member

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

class Greeter1 {
  @format("hello, %s")
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }
}

// parameter decorator
/**
 * @param constructor
 * @param name
 * @param index
 */

const requireMetadataKey = Symbol("required");
function validate(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  let method = descriptor.value;
  descriptor.value = function () {
    let requiredParams: number[] = Reflect.getOwnMetadata(
      requireMetadataKey,
      target,
      propertyName
    );
    if (requiredParams) {
      for (let pI of requiredParams) {
        if (pI >= arguments.length || arguments[pI] === undefined) {
          throw new Error("Missing reuqired argument");
        }
      }
    }
    return method.apply(this, arguments);
  };
}

function required(target: any, propertyKey: string, parameterIndex: number) {
  let existingRequiredParams: number[] = Reflect.getOwnMetadata(requireMetadataKey, target, propertyKey);
}
class BugReport2 {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }

  @validate
  print(@required verbose: boolean) {
    if (verbose) {
      return this.type + this.title;
    } else {
      return this.title;
    }
  }
}
export {};
