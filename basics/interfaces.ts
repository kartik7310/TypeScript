//InterFaces => Interfaces defines the shape of an object

// primitive types
let isDone: boolean = true;
let Phone: number = 25;
let Name: string = "John Doe";
console.log(isDone, Phone, Name);

interface User {
  name: String;
  age: number;
  roll: number;
}
const user: User = {
  name: "kartik",
  age: 20,
  roll: 25,
};
console.log(user);

//function interface
interface mathOperation {
  (number1: number, number2: number): number;
}

const addition: mathOperation = function (num1, num2) {
  return num1 + num2;
};
//
// console.log(addition(5,6));
const sum = addition(2, 6);
console.log(sum);

//Interface Inheritance (Extending Interfaces)
interface BaseUser {
  id: number;
  name: string;
}

interface AdminUser extends BaseUser {
  isAdmin: boolean;
}

const admin: AdminUser = {
  id: 1,
  name: "Alice",
  isAdmin: true,
};

console.log(admin);

//Indexable Interfaces => Working with dynamic properties, such as dictionaries or mapping configurations
interface EnvConfig {
  [key: string]: string; // Dynamic properties
}

const env: EnvConfig = {
  API_URL: "https://api.example.com",
  PORT: "3000",
};

console.log(env);

//Generic Interfaces =>A generic interface is a reusable template for creating different types of data structures. By using a type parameter <T>, we can specify a different data type for each use of the interface.

interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: "Alice" },
  success: true,
};

console.log(userResponse);


//2 example of generic interface
const productResponse: ApiResponse<{
  product: { id: number; name: string };
  reviews: { user: string; comment: string }[];
}> = {
  data: {
    product: { id: 101, name: "Laptop" },
    reviews: [
      { user: "Alice", comment: "Great product!" },
      { user: "Bob", comment: "Worth the price!" },
    ],
  },
  success: true,
};

console.log(productResponse);
