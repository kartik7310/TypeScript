type Numeric = number | boolean;
type Combine = number | string;

function add(a: Numeric, b: Combine): string | number {
 
  if (typeof b === "string") {
    return a.toString() + b.toString();
  }
  
  
  const numA = typeof a === "boolean" ? +a : a;
  return numA + b;
}


console.log(add(true, "lathiyan")); 
console.log(add(2, 5)); 
