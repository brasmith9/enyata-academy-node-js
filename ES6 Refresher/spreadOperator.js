//...

const data = require("./objectDestructuring");
let person = {
  name: "Ralph",
};
const { city, street, ...restOfData } = data.address;
// console.log({ person, ...data.address });
console.log(restOfData, street, city);
