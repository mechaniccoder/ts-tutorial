function toArray<T>(xs: Iterable<T>): T[] {
  return [...xs];
}

// for...in vs for...of
// for...in -> key
// for...of -> value
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (let pet in pets) {
  console.log(pet); // "species"
}
for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}
