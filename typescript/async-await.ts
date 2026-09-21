// async
// to handle the multiple operation asynchronously (apne aap)


//promise
// a value that will be available later

const promise = new Promise((resolve => {
  setTimeout(() => {
    resolve("food is ready");
  }, 2000);
}))

// .then - to handle the result, when Promise finishes, give me the result
promise.then((result) => {
  console.log(result);
})

//asyc - an async function always return a promise
// async function getName(): Promise<string> {
//   return "niraj";
// }

//await - wait for the promise to finish and give me its result
async function getName(): Promise<string> {
  return "niraj";
}
const name = await getName();
console.log(name);
