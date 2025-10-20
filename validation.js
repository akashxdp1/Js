// number validation--------------

function plus( num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== "number"){
        const result = "Please provide a Number only"
        return result
    }
    const sum = num1 + num2;
    return sum;
}

const total = plus(51,"sas");
console.log(total);

// string validation-------------------------

function Name(first, last){
    if(typeof first !== 'string'){
        const resutl = "Please Provide A valid Name";
        return resutl;
    }
    else if(typeof last !== 'string'){
        const resutl = "Please Provide A valid Name";
        return resutl;
    }
    const fullName= first+" "+last;
    return fullName;
}

const fullName = Name('hasan', 55)
console.log(fullName);

// array Validation-----------------------

function array(numbers){
    if(Array.isArray(numbers) === false){
        return "Please provide an array";
    }
    const age = numbers[1];
    return age;
}

const user = array(['Name: Akash', 29 , 'job: Developer']);
console.log(user);


//  object validation-----------------------------------

function price(products){
    if(typeof products !== 'object'){
        return 'please provide an object';
    }
    const price = products.price;
    return price;
}

const productPrice =price({name: 'alu', price: 59, shop: 'mamar dokan'});
console.log(productPrice);