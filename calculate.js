// calculate--------------------------

function clothPrice(shirtQuantity, pantQuantity, shoeQuantity){
const shirt = 700;
const pant = 1200;
const shoe = 1700;

const totalShirtPrice = shirt * shirtQuantity;
const totalPantPrice = pant * pantQuantity;
const totalShoePrice = shoe * shoeQuantity;

const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

return totalPrice;
}

const totalClothPrice = clothPrice(1, 1, 1);
console.log('total price:', totalClothPrice);





// Simple calculator to call function inside a function


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