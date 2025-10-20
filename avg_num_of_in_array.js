// Calculate the average of the odd numbers in an array
const nums = [5,6,11,12,98,5];
function oddavg(numbers){
    const odds = [];
    for( const num of numbers){
        if( num % 2 === 1){
            odds.push(num)
        }
    }
    let sum = 0;
    for(const num of odds){
        sum = sum + num;
    }
    const count = odds.length;
    const avg = sum / count;
    return avg
}
const avg = oddavg(nums)
console.log(avg)