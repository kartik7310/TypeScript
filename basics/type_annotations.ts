// Type annotations => Type annotations  specify the type of a variable explicitly

let userName: string = "John";
let Age: number = 30;


//arrays  => annotate arrays to specify the types of elements they will hold
let scores: number[] = [10, 20, 30];
let mixedArray: (string | number)[] = ["hello", 42];

console.log(scores);
console.log(mixedArray);


//type annotations for function parameters to specify what type of arguments the function accepts.
function greet(name: string): string {
  return (`Hello, ${name}`);
}
const result = greet("kartik"); 
console.log(result);

//type annotations for object
let customer: { name: string; age: number } = {
  name: "deep",
  age: 30,
};

console.log(customer.name);

