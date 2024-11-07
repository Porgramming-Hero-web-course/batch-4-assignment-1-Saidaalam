function getProperty(object: any, key: string): any {
    return object[key];
  }
  
  // Sample Input and Output
  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));  // Output: Alice
  console.log(getProperty(person, "age"));   // Output: 30
  