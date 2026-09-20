//objects
/*
Create these two types:

Address

city → string
pincode → number

User

id → number
name → string
address → Address

Then create one valid User object.
*/
type Address = {
  city: string;
  pincode: number;
}
type User = {
  id: number;
  name: string;
  address: Address;
}

const user: User = {
  id: 1,
  name: "Niraj",
  address: {
    city: "Lucknow",
    pincode: 226021,
  }
}


//interfaces
// remember it is just same like type as it is used to describe the shape of an object but it can be extended, that is the cool part in interfaces

/*
Create:

interface Person

with:

name → string
age → number

Then create:

interface Employee extends Person

with:

employeeId → number

Finally, create one Employee object.
*/
interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: "Niraj",
  age: 19,
  employeeId: 147,
}

console.log(employee);


/*
Create:

type Developer

with:

language → string

Create:

type BackendDeveloper

with:

framework → string

Then create:

type FullStackDeveloper

using & so it contains both sets of properties.

Create one FullStackDeveloper object.
*/
type Developer = {
  language: string;
}
type BackendDeveloper = {
  framework: string;
}
type FullStackDeveloper = Developer & BackendDeveloper;

const fullstackdeveloper: FullStackDeveloper = {
  language: "Typescript",
  framework: "express.JS"
}
console.log(fullstackdeveloper);
