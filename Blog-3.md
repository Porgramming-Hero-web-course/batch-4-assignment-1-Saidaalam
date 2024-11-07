Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

Ans: Type guards in TypeScript are used to narrow down the type of a variable within a certain scope, allowing us to access properties and methods specific to that type. Without type guards, TypeScript may not know whether it’s safe to access certain properties or methods on a variable, leading to errors or undefined behavior. Type guards help to prevent this by ensuring that the variable is of the expected type at runtime.

typeof Type guard: The typeof operator allows us to narrow down the type to a specific primitive type, like string, number, boolean, etc.

instanceof Type Guard: It checks whether the object is an instance of a particular class and narrows the type accordingly.

in Type Guard: The in operator checks if a property exists in an object. It’s particularly useful for distinguishing between types that have different properties.