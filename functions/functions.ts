//function with optional parameter
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

console.log(greet("kartik")); 
console.log(greet("kartik", "kumar")); 

// function with rest parameter
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); 
console.log(sum()); 


//  function type
type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (a, b) => a - b;

console.log(subtract(10, 4)); 


// examples

// function AuthenticationUser(user:{name:string,password:string}){
//   if(user.name ==="admin "||user.password === "1234"){
//     return true
//   }else{
//     return false
//   }
// }
// console.log(AuthenticationUser({name:"kartik",password:"1234"}));

type profile={
name:string,
password:string
}
function AuthenticationUser(user:profile):boolean{
if(user.name === "admin"||user.password ==="1234"){
  return true
}else{
  return false
}
}
const res = AuthenticationUser({name:"kartik",password:"1234"})
console.log(res);

//play with cart
type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

function calculateTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

const cartItems: CartItem[] = [
  { name: "Laptop", price: 1000, quantity: 2 },
  { name: "Mouse", price: 50, quantity: 3 },
];

console.log(calculateTotal(cartItems)); 

function printNumber(num1:number,num2:number,cb:(num3:Number)=>void){
   const result = num1+num2;
   cb(result)
}
printNumber(2,5,(result)=>{
  console.log(result);
  
})