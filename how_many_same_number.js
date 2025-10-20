// Count how many 5s are in the array
// Count how many 25s are in the array


function countNumber(array, target) {
    let count = 0;
    for(const num of array) {
        if(num === target) {
            count++;
        }
    }
    return count;
}

const numbers = [5,6,11,12,98,5];

const countFives = countNumber(numbers, 5);
console.log('Number of 5s:', countFives);
const countTwentyFives = countNumber(numbers, 25);
console.log('Number of 25s:', countTwentyFives);