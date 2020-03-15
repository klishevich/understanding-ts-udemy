type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Type Guards
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(add(1, 2));

type Employee = {
  name: string;
  startDate: Date;
};

type Admin = {
  name: string;
  privileges: string[];
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("StartDate: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "mike", privileges: ["all", "god"], startDate: new Date() });

class Car {
  drive() {
    console.log("driving...");
  }
}

class Truck {
  drive() {
    console.log("driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading truck ..." + amount);
  }
}
type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

// Descriminated union

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Move with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// type casting
// const paragraph = document.querySelector("p");

// const input = <HTMLInputElement>document.getElementById("user-input")!;
const input = document.getElementById("user-input")! as HTMLInputElement;

input.value = "hi there!";

// INDEX TYPES
interface ErrorContainer {
  // id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "some email",
  userName: "some user name"
};
