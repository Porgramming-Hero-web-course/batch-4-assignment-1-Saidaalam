function sumArray(numbers: number[]): number {
    let total = 0;
    for (let num of numbers) {
      total = total + num;
    }
    return total;
  }
  
  // Sample input and output
  console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15