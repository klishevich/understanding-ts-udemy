class Department {
  // name: string;

  constructor(private name: string) {
    // this.name = n;
    // this.describe = this.describe.bind(this);
  }

  describe(this: Department, text: string) {
    console.log(`Department: ${this.name} ${text}`);
  }
}

const accounting = new Department("Accounting");
accounting.describe("first");

// const accountingCopy = {
//   name: "new name",
//   describe: accounting.describe
// };
//
// accountingCopy.describe("second");
