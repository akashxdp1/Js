// max number

function getMax(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return "num1 is the winner with " + num1;
    }
    else if(num2 > num1 && num2 > num3) {
        return "num2 is the winner with " + num2;
    }
    else {
        return "num3 is the winner with " + num3;
    }
}

const result = getMax(91, 78, 87);
console.log(result);



// max number in an array--------------------------

const heights = [ 55, 44,33,22,11,66,77,88,99];
function maxheight(numbers){
    let max = numbers[0];
    for(const height of numbers){
        if(height > max){
             max = height;
        } 
    }
    return max;
}

const height = maxheight(heights);
console.log('your height is', height);

// ------------------------------

const num = [99,5.6, 6, 7, 9, 2, 3, 8, 11, 66, 88, 5, 25, 6,1];

function number(lowernumber) {
    let lower = lowernumber[0]; // ✅ assume first element is smallest
    for (let i = 1; i < lowernumber.length; i++) {
        if (lowernumber[i] < lower) {
            lower = lowernumber[i]; // ✅ update lower if we find a smaller number
        }
    }
    return lower; // ✅ return the smallest number found
}

const lowernumbers = number(num);
console.log(lowernumbers);
