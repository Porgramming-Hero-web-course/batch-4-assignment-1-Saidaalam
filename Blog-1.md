Question : The significance of union and intersection types in Typescript.

Ans : Union types in TypeScript let a variable hold values of multiple types. This is particularly useful when we want to accept different types of inputs without sacrificing type safety. 
Instead of declaring a single type, we can use | (the union operator) to combine multiple types.

Example: 
type Animal = "dog" | "cat";

function makeSound(animal: Animal): string {
  if (animal === "dog") {
    return "Ghew Ghew!";
  } else {
    return "Meow!";
  }
}

console.log(makeSound("dog")); // Output: Ghew Ghew!
console.log(makeSound("cat")); // Output: Meow!

Intersection types let us combine multiple types into a single type that must satisfy all the properties of each type involved. Think of intersections as merging properties from multiple sources into one unified structure.

Intersection types allow us to create complex objects that inherit properties from multiple types without deep inheritance trees or complicated interfaces. They’re especially useful in creating structured data models, like combining a User and an Employee into a more comprehensive type.

Example: 
type Person = { name: string };
type Employee = { id: number };
type Staff = Person & Employee;

const staffMember: Staff = { name: "Moni", id: 50 };
console.log(staffMember);  // Output: { name: 'Moni', id: 50 }
