
// Swap variable ---------------------------------

let a = 5;
let b= 7;

const temp = a;

a=b;
b=temp;
console.log(a,b)

// swap without temp, destructing------------------------

let x=9;
let y=22;

[x,y] = [y,x]
console.log(x,y)