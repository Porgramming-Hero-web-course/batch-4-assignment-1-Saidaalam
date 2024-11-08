class Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getCarAge(currentYear: number = new Date().getFullYear()): number {
      return currentYear - this.year;
    }
  }
  
  // Sample input and output
  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge()); // Output: 6 (assuming the current year is 2024)
  