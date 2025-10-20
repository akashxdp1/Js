// Remove duplicate items from an array
const users = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul'];
const numbers = [ 5, 4, 4, 3, 8, 6, 8, 7, 9, 5, 1, 2, 4,35,8];

function noDupli(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDupli(users);
const uniqueArray2 = noDupli(numbers);
console.log(uniqueArray);
console.log(uniqueArray2);