//  total sum of a number with for of loop-------------

function sumOfNumbers(num){
    let sum = 0;
    for(const number of num){
        sum = sum + number;
    }
    return sum;
}

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const sum = sumOfNumbers(num);
console.log ('sum of number is', sum,);



//  total sum of a number with while loop-------------

function sumOfNumbers(num1){
    let sum1 = 0;
    let i = 0;
    while (i < num1.length) {
        sum1 = sum1 + num1[i];
        i++;
    }
    return sum1;
}

const num1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const sum1 = sumOfNumbers(num1);
console.log('sum of number is', sum1);

// while loop for understand-------------
    const num2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    let sum2 = 0;
    let i = 0;
    while (i < num2.length) {
        sum2 = sum2 + num2[i];
        i++;
    }
    console.log('Sum is:', sum2);