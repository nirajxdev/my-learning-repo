/*
// class in javascript
// a blueprint for creating objects, like you dont want to manually create many objects

//manually
const user1 = {
  name: "Niraj",
  age: 19
};

const user2 = {
  name: "Mayank",
  age: 20
};

// you can create a class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// then you can create objects from it
const user1 = new User("Niraj", 19);
const user2 = new User("Mayank", 20);
*/


// Class in TypeScript

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
