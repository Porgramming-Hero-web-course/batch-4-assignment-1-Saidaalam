function validateKeys(obj: any, keys: string[]): boolean {
    for (let key of keys) {
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  }
  
  // Sample Input and Output
  const person1 = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person1, ["name", "age"]));  // Output: true
  console.log(validateKeys(person1, ["name", "phone"]));  // Output: false
  