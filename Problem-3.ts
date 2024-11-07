function countWordOccurrences(sentence: string, word: string): number {
 
  const lowerSentence = sentence.toLowerCase();
  const lowerWord = word.toLowerCase();

  const words = lowerSentence.split(" ");

  let count = 0;
  for (const w of words) {
    if (w === lowerWord) {
      count++;
    }
  }

  return count;
}

// Sample Input
console.log(countWordOccurrences("I love typescript", "typescript")); // Output: 1
