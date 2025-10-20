// // discount if else -----------------------------------------------

// let purchese = 2099;
// let book = 'math';


// if (purchese >= 6000 && book === 'math') {
//     let discount = purchese * 50/100;
//     let pay = purchese - discount;
//     console.log(pay);
// }


// else if(purchese >= 6000){
//     let discount = purchese * 20/100;
//     let pay = purchese -  discount;
//     console.log(pay);
// }

// else if( purchese >=1000 && purchese <= 2000 ) {
//     let discount = purchese * 10/100;
//     let pay = purchese - discount;
//     console.log(pay);
// }

// else{
//     console.log(purchese)
// }

// // normal if else ----------------------------------------------------
// let age = 20;

// if(age >= 18){
//     console.log( 'tumi vote dite parba')
// }
// else{
//     console.log('tumi ekhon o  coto manus age boro hou')
// }

// // Array decliar and array push, pop, shift, unshift, and includes -----------------

// let friends = [`akash`, `peash`, `monir`, `bijoy`];
// friends.push('rifat');
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);
// friends.unshift('akash', 'bristy');
// console.log(friends);
// console.log(friends.includes('akash', 'bristy'));

// if(friends.includes('akash', 'bristy')){
//     console.log('Tumader biye hobe');
// }
// else{
//     console.log("kono biye nai");
// }

// // For of Loop on array------------------------------------------------
// const fruits = ['mango', 'apple', 'grap', 'watermalon', 'banana', 'lichi']

// for(const fruit of fruits){
//     console.log('i want to eat '+fruit);
// }

// // while loop total sum ber korar jnno---------------------------------
// let num = 1;
// let sum = 0;

// while(num <=20){
//     sum = sum+num;
//     console.log('sum:', sum);
//     num++;
// }

// // even & odd number -------------------------------------------------------
// let num = 1;
// while( num <= 50){
//     if(num % 2 ==0){
//         console.log('the even number is', num);
//     }
//     num++;
// };

// let nums = 1;
// while( nums <= 50){
//     if(nums % 2 ==1){
//         console.log('the odd number is', nums);
//     }
//     nums++;
// }


// // for loop -----------------------------------------------------------------------
// for(let i=20 ; i >=0; i--){
//     console.log(i);
// };

// for(i = 0 ; i <= 20; i++){
//     console.log(i)
// }


// //  break -------------------------------------------------------------------------------
// let number = 1;
// while( number <= 50){
//     if(number > 30){
//         break;
//     }
//     console.log('the number is',number);
//     number++;
// }


// //  trim unwanted space from start and end && tolowercase/ touppercase-------------------------
// let names= `    Akash is alive       `;
// console.log(names.trim());
// console.log(names.trim().toLowerCase());
// console.log(names.trim().toUpperCase());

// // Object && object er key, value ber kora-----------------------------------------------
// let akash = {
//     name: 'hasan mahmud akash',
//     age: 29,
//     job: "freelancer",
//     location: 'kishoreganj',
//     matarialStatus: "married",
// }
// akash ["name"] = 'Akash';


// console.log(akash['name']);

// let key= Object.keys(akash);
// console.log(key);

// let value= Object.values(akash);
// console.log(value);


// //  Reverse ----------------------------------------------------------------
// let friends = ["akash", 'peash', 'joshim', 'kamal', 'jamal']

// let i= 0;
// while(i <friends.length){
//     let reverse = friends.reverse()
//     console.log(reverse[i]);
//         i++;
    
// }


// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let reverse = n.reverse();
// console.log(reverse)

// let revNumber = [];
// for(const i of n){
//     revNumber.unshift(i);
// }
// console.log(revNumber);


// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for( let i=number.length -1; i >= 0; i--){
//     let num = number[i];
//     if(num % 2 === 0){
//      console.log(num);
//     }
// }


// // function parameter ---------------------------
// function square(number){
//     const borgo = number*number;
//     console.log('square of the given number is:', borgo);
// }

// square(5);
// square(52);
// square(15);
// square(25);


// function add(n1, n2, n3, n4){
//     const sum = n1+n2+n3+n4;
//     console.log(sum);
// }

// add(55, 44, 4, 20);



// // defference function -------------------------
// function defference (n1, n2){
//     const dif = n1-n2;
//     console.log('father age is ', n1, 'my age is',n2, 'difference is', dif)
// }

// const fatherAge = 60;
// const myAge = 29;
// defference(fatherAge, myAge);

// // return function---------------------------
// function five(nb){
//     const result = nb * 5;
//     return result;
// }

// const output = five(4);
// console.log('output:', output)


// // even number way 1

// function even(num){
//     const even= num % 2 ===0;
//     return even;
// }
// const evenNumber= even(101);
// console.log("even number" ,evenNumber)

// // even number way 2

// function isEven(num){
//     if(num % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const isevenNumber= isEven(100);
// console.log("even number" ,isevenNumber)

// // odd number way 1

// function odd(num){
//     const odd= num % 2 ===1;
//     return odd;
// }
// const oddNumber= even(101);
// console.log("odd number" ,oddNumber)

// // odd number way 2

// function isOdd(num){
//     if(num % 2 == 1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const isOddNumber= isOdd(100);
// console.log("even number" ,isOddNumber)

// // ------------------
// function odd(num) {
//     if (num % 2 === 1) {
//         // If odd, multiply by 2
//         return num * 2;
//     } else {
//         // If even, divide by 2
//         return num / 2;
//     }
// }

// const result = odd(3);
// console.log('Result:', result);


// // -----------------------------

// function odd_even(number) {
//     if (number % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }

// // Test cases
// console.log(odd_even(4));  // should print "even"
// console.log(odd_even(7));  // should print "odd"
// console.log(odd_even(0));  // should print "even"
// console.log(odd_even(-3)); // should print "odd"


// //  total sum of a number with for of loop-------------

// function sumOfNumbers(num){
//     let sum = 0;
//     for(const number of num){
//         sum = sum + number;
//     }
//     return sum;
// }

// const num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const sum = sumOfNumbers(num);
// console.log ('sum of number is', sum,);



// //  total sum of a number with while loop-------------

// function sumOfNumbers(num){
//     let sum = 0;
//     let i = 0;
//     while (i < num.length) {
//         sum = sum + num[i];
//         i++;
//     }
//     return sum;
// }

// const num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const sum = sumOfNumbers(num);
// console.log('sum of number is', sum);

// // while loop for understand-------------
//     const num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
//     let sum = 0;
//     let i = 0;
//     while (i < num.length) {
//         sum = sum + num[i];
//         i++;
//     }
//     console.log('Sum is:', sum);



// //  inch to feet function-------------------
// function inchtoFeet(inch){
//     const feet = inch/12;
//     const feetnum = parseInt(feet);
//     const inchreman = inch% 12;
//     const result = feetnum + ' ft ' + inchreman + ' inch';
//     return result

// }

// let myheight = inchtoFeet(70);
// console.log('my height:', myheight);


// mile to kilometer function-------------------------
// function mtk(mile){
//     const kilo = mile* 1.60934;
//     return kilo;
// }

// console.log('kilometer is:',mtk(5));


// // celsius to fahrenheit 

// function c2f(celsius){
//     const fahrenheit = celsius * 1.8 + 32;  // formula: (°C × 9/5) + 32
//     return fahrenheit;
// }

// console.log(c2f(5) + '°F') 

// // leapyear function -----------------------

// function leepYear(year){
//     if(year % 100 !==0 && year % 4 ===0){
//         return true;
//     }
//     else if(year % 400==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const leepyear = leepYear(2004);
// console.log( leepyear);


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

// Count how many 5s are in the array
// // Count how many 25s are in the array


// function countNumber(array, target) {
//     let count = 0;
//     for(const num of array) {
//         if(num === target) {
//             count++;
//         }
//     }
//     return count;
// }

// const numbers = [5,6,11,12,98,5];

// const countFives = countNumber(numbers, 5);
// console.log('Number of 5s:', countFives);
// const countTwentyFives = countNumber(numbers, 25);
// console.log('Number of 25s:', countTwentyFives);

// const numbers = [51, 56, 12, 47, 59, 13, 588, 691, 3, 103, 5];
// const avg = oddavg(numbers);
// console.log( 'average of the odd numbers :', avg);

// // -----------------------------------------------
// // Calculate the average of the even numbers in an array

// function evenavg(number){
//     const even = [];
//     for(const num of number){
//         if(num % 2===0){
//             even.push(num);
//         }
//     }
//     let sum = 0;
//     for( const num of even){
//         sum = sum + num;
//     }
//     const len= even.length;
//     const avgs = sum/len;
//     return avgs
// }

// const number = [51, 56, 12, 18, 59, 16, 588, 691, 3, 103, 5];
// const avgs = evenavg(number);
// console.log('average of the even numbers:', avgs)



// // Remove duplicate items from an array
// const users = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul'];
// const numbers = [ 5, 4, 4, 3, 8, 6, 8, 7, 9, 5, 1, 2, 4,35,8];

// function noDupli(array){
//     const unique = [];
//     for(const item of array){
//         if(unique.includes(item) === false){
//             unique.push(item);
//         }
//     }
//     return unique;
// }

// const uniqueArray = noDupli(users);
// const uniqueArray2 = noDupli(numbers);
// console.log(uniqueArray);
// console.log(uniqueArray2);

// // Math, abs, round, ceil, floor, and random number

// console.log(Math.min(5, 10, 5, 8, 22, 100, 200));
// console.log(Math.max(5, 10, 5, 8, 22, 100, 200));
// console.log(Math.pI);
// console.log(Math.abs(5-10));
// console.log(Math.abs(10-7));
// console.log(Math.round(2.566));
// console.log(Math.round(3.566));
// console.log(Math.round(3.2));
// console.log(Math.floor(2.56));
// console.log(Math.ceil(2.9));
// console.log(Math.ceil(2.1));
// console.log(Math.random());
// console.log(Math.random()*20);

// const roundRand = Math.round(Math.random()*30);
// console.log(roundRand)



// // Swap variable ---------------------------------

// let a = 5;
// let b= 7;

// const temp = a;

// a=b;
// b=temp;
// console.log(a,b)

// // swap without temp, destructing------------------------

// let x=9;
// let y=22;

// [x,y] = [y,x]
// console.log(x,y)


// // max number

// function getMax(num1, num2, num3) {
//     if(num1 > num2 && num1 > num3) {
//         return "num1 is the winner with " + num1;
//     }
//     else if(num2 > num1 && num2 > num3) {
//         return "num2 is the winner with " + num2;
//     }
//     else {
//         return "num3 is the winner with " + num3;
//     }
// }

// const result = getMax(91, 78, 87);
// console.log(result);


// // max number in an array--------------------------

// const heights = [ 55, 44,33,22,11,66,77,88,99];
// function maxheight(numbers){
//     let max = numbers[0];
//     for(const height of numbers){
//         if(height > max){
//              max = height;
//         } 
//     }
//     return max;
// }

// const height = maxheight(heights);
// console.log('your height is', height);



// // calculate--------------------------

// function clothPrice(shirtQuantity, pantQuantity, shoeQuantity){
// const shirt = 700;
// const pant = 1200;
// const shoe = 1700;

// const totalShirtPrice = shirt * shirtQuantity;
// const totalPantPrice = pant * pantQuantity;
// const totalShoePrice = shoe * shoeQuantity;

// const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

// return totalPrice;
// }

// const totalClothPrice = clothPrice(1, 1, 1);
// console.log('total price:', totalClothPrice);


// // cheap phone // max phone---------------------

// const mobiles = [
//     {name: 'samsung', price: 120000, camera: '100 mp'},
//     {name: 'iPhone', price: 160000, camera: '100 mp'},
//     {name: 'mi', price: 45000, camera: '100 mp'},
//     {name: 'vivo', price: 40000, camera: '100 mp'},
//     {name: 'htc', price: 80000, camera: '100 mp'},
//     {name: 'infinix', price: 15000, camera: '100 mp'},
//     {name: 'oppo', price: 18000, camera: '100 mp'},
//     {name: 'honor', price: 60000, camera: '100 mp'},
// ];

// // cheap phone

// function cheapestPhones(phones){
//     let cheapPhone = mobiles[0];
//     for( num of phones){
//         if(num.price < cheapPhone.price){
//             cheapPhone=num;
//         }
//     }
//     return cheapPhone;
// }

// const cheapPrice = cheapestPhones(mobiles);
// console.log('cheapest phone is: ', cheapPrice);


// // max phone

// function maxPhone(phones){
//  let maxPhone = mobiles[0];
//     for(num of phones){
//         if(num.price > maxPhone.price){
//             maxPhone = num
//         }
//     }
//     return maxPhone;
// }

// const maxphone = maxPhone(mobiles);
// console.log("heighest price phone is:", maxphone);


// // shoping cart amount---------------------------
// const products = [
//     {name: 'shampoo', price: 350, quantity: 1},
//     {name: 'ciruni', price: 50, quantity: 1},
//     {name: 'saban', price: 80, quantity: 1},
//     {name: 'lobon', price: 60, quantity: 1},
//     {name: 'cal', price: 2500, quantity: 2},
// ];

// function totalShoping(products){
//     let total = 0;
//     for(const num of products){
//         const productprice= num.price * num.quantity;
//         // total= total + (num.price * num.quantity); way 1
//         total= total + productprice;
//     }
//     return total;
// }


// const totalAmount = totalShoping(products);
// console.log('Total shopping amount:', totalAmount, 'taka');



// // Discount ----------------------------------
// function discountPrice(quantity){
//     if(quantity <= 100){
//         const total = quantity * 100;
//         return total;
//     }
//     if(quantity <= 200){
//         const total = quantity * 90;
//         return total;
//     }
//     if(quantity > 200){
//         const total = quantity * 70;
//         return total;
//     }
// }

// const total = discountPrice(1);
// console.log(total)


// // multi layer discount=======================

