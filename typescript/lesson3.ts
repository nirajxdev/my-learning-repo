/*
Create a type called User with:

id       → number
name     → string
email    → string
age      → number

Then create a valid User object.
*/
type User = {
  id: number;
  name: string;
  email: string;
  age: number;
}

const user: User = {
  id: 1,
  name: "niraj",
  email: "abc@gmail.com",
  age: 19
}

/*
Modify User so that age is optional.

Both should work:
const user1: User = {
    id: 1,
    name: "Niraj",
    email: "niraj@example.com"
};

and:
const user2: User = {
    id: 2,
    name: "Amit",
    email: "amit@example.com",
    age: 20
};
*/
type User = {
  id: number;
  name: string;
  email: string;
  age?: number;
}

const user1: User = {
  id: 1,
  name: "Niraj",
  email: "niraj@examle.com"
}

const user2: User = {
  id: 2,
  name: "Mayank",
  email: "mayank@example.com",
  age: 20
}

/*
Create:

type Product = ...

It should contain:

id       → number
name     → string
price    → number
inStock  → boolean

Then create an array containing three products.
*/
type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "smartphone",
    price: 100000,
    inStock: true
  },
  {
    id: 2,
    name: "laptop",
    price: 600000,
    inStock: true
  },
  {
    id: 3,
    name: "headphones",
    price: 20000,
    inStock: false
  }
]
console.log(products);

/*
Create:
type ID = ...

It should allow:
123
"abc123"

but not:
true
*/
type ID = string | number;

let userId: ID;

userId = "abc";
userId = 123;
userId = true;  //X

/*
Create:
type Task = ...

with:
id
name
done

Then create:
const tasks: Task[]
containing at least 3 tasks.

Finally, write:
function completeTask(...)
which receives a task and returns a completed task.

For example:
const task = {
    id: 1,
    name: "Learn TypeScript",
    done: false
};

const completed = completeTask(task);

console.log(completed);

Expected:
{
    id: 1,
    name: "Learn TypeScript",
    done: true
}*/
type Task = {
  id: number;
  name: string;
  done: boolean;
}
const tasks: Task[] = [
  {
    id: 1,
    name: "finish homework",
    done: true
  },
  {
    id: 2,
    name: "go to market",
    done: false
  },
  {
    id: 3,
    name: "have dinner",
    done: false
  }
]
function completeTask(task: Task): Task {
  return {
    id: task.id,
    name: task.name,
    done: true,
  }
}
const completed = completeTask(tasks[1]);
console.log(completed);
