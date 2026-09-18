/* Exercise 1
Create a function:
multiply

It should:
accept two numbers
return their multiplication
have proper TypeScript types
*/
function multiply(a: number, b: number): number {
  return a * b;
}

const answer = multiply(5, 2);
console.log(answer);


/*
Create:
isEven

It should:
accept a number
return a boolean
*/
function isEven(a: number): boolean {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(10));
console.log(isEven(9));

//simpler version of this
// function isEven(a: number, b: number): boolean {
//   return a % 2 === 0;
// }


/*
Create:
printTask

It should accept:
id: number
name: string
done: boolean

and print something like:
1 - Learn TypeScript - Not completed

No return value.
*/
function printTask(id: number, name: string, done: boolean): void {
  console.log(`${id} - ${name} - ${done}`)
}

printTask(1, "learn english", false);


/*
Create:
createTask()

It should accept a task name and return:
{
    id: number,
    name: string,
    done: boolean
}
*/
type Task = {
  id: number,
  name: string,
  done: boolean
}

function createTask(id: number, name: string, done: boolean): Task {
  return {
    id: id,
    name: name,
    done: done
  }
}

const task = createTask(2, "learn how to fuck", true);
console.log(task);
