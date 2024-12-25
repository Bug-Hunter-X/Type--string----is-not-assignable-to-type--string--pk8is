function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
console.log(greeter(user.join(" "))); // Solution 1: Join the array elements

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user)); // Solution 2: Modify the greeter function to accept an array