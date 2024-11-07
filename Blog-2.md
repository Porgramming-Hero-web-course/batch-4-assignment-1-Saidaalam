How to handle asynchronous operations using async/await over callback/promise TypeScript.

Ans: Async/Await is a modern syntax for handling asynchronous operations. The async keyword is used to define a function that returns a promise, and await is used to pause the function execution until the promise is resolved.

In the callback approach, we can pass a function (the callback) as an argument to another function that performs an asynchronous operation. Once the operation is complete, the callback is executed with the result.
Callbacks can lead to "callback hell," where multiple nested callbacks make the code difficult to read and maintain.

A promise represents the eventual completion (or failure) of an asynchronous operation. A promise is either resolved (successful) or rejected (failed). we can handle the result using .then() for success and .catch() for failure.
Promises improve readability over callbacks but still involve chaining .then() and .catch(), which can get messy, especially in complex logic.