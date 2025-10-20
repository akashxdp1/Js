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

function sumOfNumbers(num){
    let sum = 0;
    let i = 0;
    while (i < num.length) {
        sum = sum + num[i];
        i++;
    }
    return sum;
}

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const sum = sumOfNumbers(num);
console.log('sum of number is', sum);

// while loop for understand-------------
    const num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    let sum = 0;
    let i = 0;
    while (i < num.length) {
        sum = sum + num[i];
        i++;
    }
    console.log('Sum is:', sum);