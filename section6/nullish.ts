type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Function overload
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Michael ", "Klishevich");
const result2 = add(1, 1);

const fetchUserData = {
  id: "u1",
  name: "Mike",
  // job: { title: "CEO", description: "My own company" }
};

// console.log(fetchUserData?.job && fetchUserData.job.title);

const usetInput = "";
const storedData = usetInput ?? "DEFAULT";

console.log(storedData);
