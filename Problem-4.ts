type Circle = { shape: "circle"; radius: number };

type Rectangle = { shape: "rectangle"; width: number; height: number };

function calculateShapeArea(shape: Circle | Rectangle): number {
  if (shape.shape === "circle") {
    return Math.PI * Math.pow(shape.radius, 2);
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  }
  throw new Error("Unknown shape");
}

// Sample input and output
console.log(calculateShapeArea({ shape: "circle", radius: 5 })); // Output: 78.54
console.log(calculateShapeArea({ shape: "rectangle", width: 4, height: 6 })); // Output: 24
