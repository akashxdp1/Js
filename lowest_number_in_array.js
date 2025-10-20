
const num = [ 1,6,6,7,9,2,3,8,11,66,88,5,25,6];
function number(lowernumber){
    let lower = lowernumber[0];
    for(let i= 1; i < lowernumber.length; i++){
        if(lowernumber[i] < lower){
            lower = lowernumber[i];
        }
    }
    return lower;
}

const lowernumbers = number(num);
console.log(lowernumbers);