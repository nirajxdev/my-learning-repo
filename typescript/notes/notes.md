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
