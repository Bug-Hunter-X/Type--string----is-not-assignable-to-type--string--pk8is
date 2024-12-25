# TypeScript Type Error: Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: assigning an array of strings to a variable expecting a single string.

## The Bug

The `greeter` function expects a single string as input. However, the `user` variable is an array of strings.  Attempting to pass the array to the function results in a type error.

## The Solution

The solution involves either modifying the `greeter` function to accept an array or modifying how the `user` variable is handled to provide a single string.
