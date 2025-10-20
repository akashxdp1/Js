// calculate--------------------------

function clothPrice(shirtQuantity, pantQuantity, shoeQuantity){
const shirt = 700;
const pant = 1200;
const shoe = 1700;

const totalShirtPrice = shirt * shirtQuantity;
const totalPantPrice = pant * pantQuantity;
const totalShoePrice = shoe * shoeQuantity;

const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

return totalPrice;
}

const totalClothPrice = clothPrice(1, 1, 1);
console.log('total price:', totalClothPrice);