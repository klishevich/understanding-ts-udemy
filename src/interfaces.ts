interface INamed {
  readonly name: string;
}

interface IGreetable extends INamed {
  greet(phrase: string): void;
}

interface IBarkable {
  bark(): void;
}

class Person implements IGreetable, IBarkable {
  constructor(public name: string, public age: number) {}

  greet(phrase: string): void {
    console.log(`hi ${phrase}`);
  }

  bark(): void {
    console.log("bark");
  }
}

let user1: IGreetable;
//
// user1 = {
//   name: "Michael",
//   age: 30,
//   greet(phrase: string): void {
//     console.log(phrase, this.name);
//   },
//
// };

user1 = new Person("Michael", 30);

user1.greet("Howdy");
