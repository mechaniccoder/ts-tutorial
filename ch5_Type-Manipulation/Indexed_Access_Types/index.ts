type Person = {
  age: number;
  name: string;
  alive: boolean;
};

type Age1 = Person["age" | "name"];
type Age2 = Person[keyof Person];

// capture element type of array using number index
const myArray = [{ name: "alic", age: 15 }];
type Person1 = typeof myArray[number];
type Age3 = typeof myArray[number]["age"];
type Age4 = Person1["age"];
export {};
