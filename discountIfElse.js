let purchese = 2099;
let book = 'math';


if (purchese >= 6000 && book === 'math') {
    let discount = purchese * 50/100;
    let pay = purchese - discount;
    console.log(pay);
}


else if(purchese >= 6000){
    let discount = purchese * 20/100;
    let pay = purchese -  discount;
    console.log(pay);
}

else if( purchese >=1000 && purchese <= 2000 ) {
    let discount = purchese * 10/100;
    let pay = purchese - discount;
    console.log(pay);
}

else{
    console.log(purchese)
}