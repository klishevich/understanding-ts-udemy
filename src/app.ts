import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import { getName } from "./getName";
import { Product } from "./product.model";

const usetInput = "ddddd";
const storedData = usetInput ?? "DEFAULT";

declare var GLOBAL_MIKE: any;

console.log(storedData);
console.log(getName("Mike"));

console.log(GLOBAL_MIKE);

// const p1 = new Product("A Book", 12.99);
// console.log(p1.getInformation());

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 12.99 }
];

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

const newProduct = new Product("", -5.99);
validate(newProduct).then(errors => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS", errors);
  }
});
console.log(newProduct);
