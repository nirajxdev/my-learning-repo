// ENUMS - let you define a fixed set of named values
// it is like predefined named choices
/*
eg:
enum Status {
Pending= "pending",
Completed = "completed",
Failed = "failed"
}

const status: Status = Status.Pending;
*/

// Enum & Literal Union does the same job



// Promise + Async TypeScript
/*
Write:

getUsername()

as an async function that:

returns Promise<string>
returns "Niraj"

Then call it with await.
*/
// async function getUsername(): Promise<string> {
//   return "Niraj";
// }

// const user = await getUsername();
// console.log(user);

/*
Create these two functions:

1.

getAge()
→ Promise<number>
→ returns 19

2.

getUser()
→ Promise<User>
→ returns an object with id and name

Then use await to get their actual values.
*/
type User = {
  id: number;
  name: string;
}
async function getAge(): Promise<number> {
  return 19;
}

async function getUser(): Promise<User> {
  return {
    id: 1,
    name: "Mayank"
  }
}

const age = await getAge();
const user = await getUser();

console.log(age);
console.log(user);
