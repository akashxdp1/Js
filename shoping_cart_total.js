// shoping cart amount---------------------------
const products = [
    {name: 'shampoo', price: 350, quantity: 1},
    {name: 'ciruni', price: 50, quantity: 1},
    {name: 'saban', price: 80, quantity: 1},
    {name: 'lobon', price: 60, quantity: 1},
    {name: 'cal', price: 2500, quantity: 2},
];

function totalShoping(products){
    let total = 0;
    for(const num of products){
        const productprice= num.price * num.quantity;
        // total= total + (num.price * num.quantity); way 1
        total= total + productprice;
    }
    return total;
}


const totalAmount = totalShoping(products);
console.log('Total shopping amount:', totalAmount, 'taka');