// Generics <T>
function getValue<T>(value: T): T {
  return value;
}
// here T is a type placeholder

/*
Create a generic function:

identity<T>

It should:

accept one value
return that same value
work with strings, numbers, booleans, etc.

Then test it with:

a string
a number
a boolean
*/
function identity<T>(value: T): T {
  return value;
}

const test = identity("it is a string");
console.log(test);


//generic constraints - like you dont want to accept anything
/*
Create a generic function:

getName<T extends { name: string }>

It should return the name.

It should work with:

{ name: "Niraj", age: 19 }

and:

{ name: "Alex", role: "developer" }

But reject something like:

{ age: 20 }

*/
function getName<T extends { name: string }>(value: T): string {
  return value.name;
}

const userName = getName({
  name: "Niraj",
  age: 19
})
console.log(userName);


//keyof
/*
Given:

type Product = {
  id: number;
  name: string;
  price: number;
};

Write a generic getProperty() function that:

accepts a Product-like object
accepts only a valid key
returns the value of that key
*/
type Product = {
  id: number;
  name: string;
  price: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const product = {
  id: 1,
  name: "smartphone",
  price: 10000,
}

console.log(getProperty(product, "id"))


//unknow vs any
/*
any
→ trust me, don't check

unknown
→ I don't know yet, make me check
*/
