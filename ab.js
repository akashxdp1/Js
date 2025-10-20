function plus(num1, num2){
    const total = num1 + num2;
    return total;
}
function minus(num1, num2){
    const total = num1 - num2;
    return total;
}
function devide(num1, num2){
    const total = num1 / num2;
    return total;
}
function gun(num1, num2){
    const total = num1 * num2;
    return total;
}

function calculator(a, b, operation){
if(operation === 'plus'){
        const result = plus(a,b);
        return result;
    }

else if( operation === 'minus'){
    const result = minus(a,b);
    return result;
}

else if( operation === 'devide'){
    const result = devide(a,b);
    return result;
}
else if(operation === 'gun'){
    const result = gun(a,b);
    return result;
}

else{
    return "only 'plus', 'minus', 'gun', 'devide' operation is allowed"
}
}

const result = calculator( 5, 42, 'gun');
console.log(result);