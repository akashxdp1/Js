let friends = ["akash", 'peash', 'joshim', 'kamal', 'jamal']

let i= 0;
while(i <friends.length){
    let reverse = friends.reverse()
    console.log(reverse[i]);
        i++;
    
}


let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let reverse = n.reverse();
console.log(reverse)



let revNumber = [];
for(const i of n){
    revNumber.unshift(i);
}
console.log(revNumber);


let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for( let i=number.length -1; i >= 0; i--){
    let num = number[i];
    if(num % 2 === 0){
     console.log(num);
    }
}