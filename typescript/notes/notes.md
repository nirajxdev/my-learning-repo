# TypeScript — Revision

## 1. What is TypeScript?

TypeScript is a **superset of JavaScript** that adds a static type system.  
It helps catch type-related mistakes before the code runs.

---

## 2. Basic Types

`string` → text  
`number` → numeric values  
`boolean` → `true` or `false`

Basic syntax:

`variable: type`

### Arrays

`string[]` → array of strings  
`number[]` → array of numbers  
`boolean[]` → array of booleans

---

## 3. Type Inference

TypeScript can automatically determine a type from the assigned value.

Example logic:

`age = 19` → TypeScript knows it is a `number`.

No need to explicitly write the type when it is obvious.

---

## 4. Union Types

`|` means **OR**.

Basic syntax:

`type1 | type2`

Example:

`string | number`

The value can be either a string or a number.

---

## 5. Literal Types

Restrict a value to specific allowed values.

Example:

`"pending" | "completed"`

Only those specified values are allowed.

---

## 6. Functions

Function parameters can have types.

Return type is written after the parameter list.

Basic syntax:

`parameter: type`

`): returnType`

Example structure:

`function add(a: number, b: number): number`

- Parameter types define what arguments the function accepts.
- Return type defines what the function must return.

### `void`

`void` means the function does not return a useful value.

---

## 7. Type Alias

`type` creates a reusable name for a type.

Basic syntax:

`type Name = ...`

Usually used to describe the shape of an object.

Think:

**Type alias = blueprint/structure for data**

---

## 8. Optional Properties

`?` means optional.

Basic syntax:

`property?: type`

The property may exist or may be `undefined`.

Only use `?` when the property genuinely can be missing.

---

## 9. Readonly

`readonly` prevents a property from being reassigned.

Basic syntax:

`readonly property: type`

Useful for values that should not change after creation.

---

## 10. Arrays of Objects

`Task[]` means:

**An array containing only Task objects.**

The same idea applies to:

`User[]`  
`Product[]`  
`Order[]`

---

## 11. Undefined + Array Access

An array index might not exist.

Therefore an array access can have a type like:

`Task | undefined`

This means:

**The value can either be a Task or undefined.**

Check that the value exists before passing it somewhere that expects a `Task`.

---

## 12. Type Narrowing

Type narrowing means making a broad type more specific after a check.

Example:

`string | number`

After checking with `typeof`, TypeScript can determine whether the value is a string or number.

Common narrowing methods:

- `typeof`
- `if`
- `else`
- checking whether a value exists

---

## 13. `type` vs `interface`

Both can describe the structure/shape of objects.

For now:

- Know both.
- Understand their basic purpose.
- Learn advanced differences later.

---

# Interview Quick Revision

**TypeScript:**  
A statically typed superset of JavaScript.

**Type inference:**  
TypeScript automatically determines a type from available information.

**Union type:**  
Allows a value to have multiple possible types.

**Type alias:**  
A reusable name for a type.

**Optional property:**  
A property that may be missing or `undefined`.

**Readonly:**  
Prevents reassignment of a property.

**Void:**  
Used when a function does not return a useful value.

**Type narrowing:**  
Making a broad type more specific after a type/value check.

---

# Syntax Cheat Sheet

`variable: type`

`string | number`

`string[]`

`property?: type`

`readonly property: type`

`type Name = ...`

`function name(parameter: type): returnType`

---

# Keep an Eye On

- `:` → specifies a type
- `|` → OR / union
- `[]` → array of a type
- `?` → optional
- `readonly` → cannot be reassigned
- `type` → reusable type definition
- `void` → no useful return value
- `Task[]` → array of Tasks
- `Task | undefined` → Task OR undefined
- Use **type narrowing** when dealing with uncertain values.
- Don't use `?` or `!` just to silence TypeScript errors.

---

## 14. Interfaces

`interface` describes the shape of an object.

Basic syntax:

`interface User { name: string; age: number; }`

Similar to a `type` alias for objects.

### `extends`

An interface can extend another interface.

`interface Admin extends User { role: string; }`

`Admin` gets all properties from `User` + its own properties.

---

## 15. Intersection Types

`&` means **AND**.

Basic syntax:

`type FullUser = User & Admin`

The resulting type must contain properties from **both** types.

Remember:

`|` → OR  
`&` → AND

---

## 16. Generics

Generics allow types to be flexible while keeping type safety.

Basic syntax:

`function identity<T>(value: T): T`

`T` is a type placeholder.

The actual type is determined when the function is used.

Example logic:

`identity("hello")` → `T = string`

`identity(10)` → `T = number`

---

## 17. Generic Constraints

`extends` can restrict what a generic type can be.

Basic syntax:

`<T extends SomeType>`

Example:

`<T extends { name: string }>`

Means:

**T can be any type, but it must contain `name: string`.**

---

## 18. `keyof`

`keyof` gives the keys of a type.

Example:

`type UserKeys = keyof User`

If `User` has:

`id`, `name`, `email`

then:

`keyof User` → `"id" | "name" | "email"`

### With Generics

`K extends keyof T`

Means:

**K must be one of the keys of T.**

Useful for safely accessing object properties.

---

## 19. `unknown`

`unknown` means the type is not known yet.

You must check/narrow it before using it.

Example logic:

`unknown` → check type → safely use value

Prefer `unknown` when the type is genuinely unknown.

---

## 20. `any`

`any` disables most TypeScript type checking.

It basically tells TypeScript:

**"Don't check this."**

Avoid unnecessary use of `any`.

### Remember

`any` → no type safety

`unknown` → type safety + must narrow first

---

## 21. Type Assertions

A type assertion tells TypeScript what you believe the type is.

Basic syntax:

`value as Type`

Example:

`value as string`

Important:

**Type assertions do NOT convert the value.**

They only tell TypeScript how to treat it.

---

## 22. Utility Types

Utility types create new types from existing types.

### `Partial<T>`

Makes all properties optional.

`Partial<User>`

Useful for update/PATCH operations.

### `Pick<T, K>`

Selects specific properties.

`Pick<User, "id" | "name">`

### `Omit<T, K>`

Removes specific properties.

`Omit<User, "password">`

### `Record<K, T>`

Creates a key-value object type.

`Record<string, number>`

### Quick memory

`Partial` → everything optional

`Pick` → choose these

`Omit` → remove these

`Record` → key/value structure

---

## 23. Enums

Enums define a fixed set of named values.

Basic syntax:

`enum Status { Pending, Completed, Failed }`

String enum:

`enum Status { Pending = "pending", Completed = "completed" }`

Literal unions can often be used instead:

`type Status = "pending" | "completed"`

---

## 24. Promise Types

A Promise represents a value that will be available later.

Basic TypeScript syntax:

`Promise<Type>`

Examples:

`Promise<string>`

`Promise<number>`

`Promise<User>`

`Promise<User[]>`

---

## 25. Async / Await

`async` functions always return a Promise.

Basic syntax:

`async function getUser(): Promise<User>`

`await` gets the actual value from the Promise.

Remember:

`getUser()` → `Promise<User>`

`await getUser()` → `User`

---

## 26. `Promise<void>`

Used when an async function doesn't return useful data.

`async function deleteUser(): Promise<void>`

---

## 27. Classes

A class is a blueprint for creating objects.

Important parts:

- `class`
- `constructor`
- properties
- methods
- `new`

Basic syntax:

`class User { ... }`

Create object:

`const user = new User(...)`

---

## 28. Access Modifiers

### `public`

Accessible from anywhere.

`public name: string`

Public is the default.

### `private`

Accessible only inside the same class.

`private password: string`

### `protected`

Accessible inside the class and child classes.

`protected role: string`

### Remember

`public` → everywhere

`protected` → class + child classes

`private` → class only

---

## 29. `implements`

A class can implement an interface.

`class User implements Person`

Means:

**The class promises to follow the structure defined by the interface.**

---

## 30. `never`

`never` represents something that never successfully returns.

Common cases:

- Function that always throws
- Infinite loop
- Exhaustiveness checking

Example:

`function fail(): never`

### `void` vs `never`

`void` → function finishes without useful return value

`never` → function never successfully finishes

---

## 31. Function Types

Functions themselves can have types.

Basic syntax:

`type Add = (a: number, b: number) => number`

Means:

**A function accepting two numbers and returning a number.**

Useful when passing functions as arguments.

---

## 32. Type Guards

Type guards help TypeScript narrow a type.

Common type guards:

- `typeof`
- `instanceof`
- `in`
- `Array.isArray()`
- existence checks

Example:

`typeof value === "string"`

narrows the value to `string`.

---

## 33. Discriminated Unions

A union of object types that share a common literal property.

Example idea:

`status: "success"`

`status: "error"`

`status: "loading"`

Checking `status` allows TypeScript to determine the exact object type.

Useful for:

- API responses
- application states
- result types

---

## 34. Modules

TypeScript uses JavaScript's `import` / `export` system.

### Named export

`export const name = "Niraj"`

Import:

`import { name } from "./file"`

### Default export

`export default function greet() {}`

Import:

`import greet from "./file"`

### Remember

Named export → `{ }`

Default export → no `{ }`

---

## 35. `tsconfig.json`

`tsconfig.json` controls TypeScript compiler behavior.

Important option:

`"strict": true`

Strict mode enables stronger type checking.

Important concepts:

- `strict`
- `strictNullChecks`
- `noImplicitAny`

For real projects, keeping strict checking enabled is important.

---

# Interview Quick Revision — Additional

**What are generics?**  
A way to write reusable code while preserving type information.

**What does `extends` do in generics?**  
Restricts a generic type to types that satisfy a specific structure.

**What does `keyof` do?**  
Gets the keys of a type.

**What does `K extends keyof T` mean?**  
K must be a valid key of T.

**What is `unknown`?**  
A safe type for values whose type isn't known yet.

**What is `any`?**  
A type that largely disables TypeScript checking.

**What is a type assertion?**  
Telling TypeScript to treat a value as a specific type.

**What is `Partial<T>`?**  
Makes all properties of T optional.

**What is `Pick<T, K>`?**  
Creates a type containing only selected properties.

**What is `Omit<T, K>`?**  
Creates a type excluding selected properties.

**What is `Record<K, T>`?**  
Creates an object type with specified key and value types.

**What is a Promise?**  
Represents a value that will be available asynchronously.

**What does `async` do?**  
Makes a function return a Promise.

**What does `await` do?**  
Waits for a Promise and gives its resolved value.

**What is `never`?**  
Represents a value/function path that never successfully returns.

**What is `implements`?**  
Requires a class to follow an interface's structure.

**What is a type guard?**  
A check that allows TypeScript to narrow a type.

**What is `strict` mode?**  
A collection of stricter TypeScript checks that catches more potential errors.

---

# Syntax Cheat Sheet — Extended

`variable: type`

`string | number`

`string[]`

`property?: type`

`readonly property: type`

`type User = { ... }`

`interface User { ... }`

`interface Admin extends User { ... }`

`type FullUser = User & Admin`

`function identity<T>(value: T): T`

`function getProperty<T, K extends keyof T>(obj: T, key: K)`

`value as string`

`Partial<User>`

`Pick<User, "id" | "name">`

`Omit<User, "password">`

`Record<string, number>`

`Promise<User>`

`async function getUser(): Promise<User>`

`class User { ... }`

`class User implements Person`

`public name: string`

`private password: string`

`protected role: string`

`type Add = (a: number, b: number) => number`

---

# Keep an Eye On

- `:` → specifies a type
- `|` → OR / union
- `&` → AND / intersection
- `[]` → array of a type
- `?` → optional
- `readonly` → cannot be reassigned
- `type` → reusable type definition
- `interface` → object/class contract
- `extends` → inherit/restrict
- `implements` → class follows an interface
- `<T>` → generic type parameter
- `keyof` → keys of a type
- `K extends keyof T` → K must be a key of T
- `unknown` → unknown but type-safe
- `any` → disables type checking
- `as` → type assertion, not type conversion
- `Partial` → all optional
- `Pick` → select properties
- `Omit` → remove properties
- `Record` → key/value object type
- `Promise<T>` → Promise containing T
- `async` → returns a Promise
- `await` → gets the resolved Promise value
- `void` → no useful return value
- `never` → never successfully returns
- `typeof` / `instanceof` / `in` → type narrowing
- `strict: true` → stronger type checking
- Don't use `?`, `!`, `as`, or `any` just to silence TypeScript errors.
- Prefer precise types over broad types like `object` or `any`.
