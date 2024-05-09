class Animal {
    private secret: string = "123";
    constructor(public name: string) {}
  
    move(distance: number): void {
      console.log(`${this.name} moved ${distance} meters.`);
    }
  }
  
  class Dog extends Animal {
    bark(): void {
      console.log("Woof!");
    }
  }

  const rexy: Dog = new Dog('rexy')
  console.log(rexy.name);
  //console.log(rexy.secret); // Error
  
  function identity<T>(arg: T): T {
    return arg;
  }

//const result_id: string = identity(3)
const result_id: number = identity(3)

function printId(id: number | string): void {
    console.log(`Your ID is: ${id}`);
  }
  
printId(1)
printId("1")  
// printId({ id: 1}) // Error