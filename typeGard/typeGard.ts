type Numeric = number |boolean
type combine = number|string
function add(a:Numeric,b:combine){
  if(typeof a==='string'||typeof b==='string'){
    return a.toString()+b.toString()
  } return a + b
}
console.log(add("true","lathiyan"));
console.log(2,5);

