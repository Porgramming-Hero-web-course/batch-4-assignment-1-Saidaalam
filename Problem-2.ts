function removeDuplicates(numbers: number[]): number[] {
  let uniqueNumbers: number[] = [];
  for (let num of numbers) {
    if (uniqueNumbers.indexOf(num) === -1) {
      uniqueNumbers.push(num);
    }
  }
  return uniqueNumbers;
}

// Sample Input
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
