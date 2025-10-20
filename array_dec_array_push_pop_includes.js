let friends = [`akash`, `peash`, `monir`, `bijoy`];
friends.push('rifat');
console.log(friends);
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);
friends.unshift('akash', 'bristy');
console.log(friends);
console.log(friends.includes('akash', 'peash'));

if(friends.includes('akash', 'peash')){
    console.log('tumra biriyani paba');
}
else{
    console.log("tumra akta chocolate paba");
}