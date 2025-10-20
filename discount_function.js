// Discount ----------------------------------
function discountPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    if(quantity > 200){
        const total = quantity * 70;
        return total;
    }
}

const total = discountPrice(30);
console.log(total);




// multi-layer discount price calculation---------

function discounttotal(quantity){
    const first100price = 100;
    const second100price = 90;
    const above200price = 70;

    if(quantity <= 100){
        const total = quantity * first100price;
        return total;
    }

    else if(quantity <=200){
        const first100total = 100 * first100price;
        const remainingQuantity = quantity - 100;
        const remainingtotal = remainingQuantity *second100price;
        const total = first100total+remainingtotal;
        return total;
    }

    else{
        const first100total = 100 * first100price;
        const secound100total = 100 * second100price;
        const remainingQuantity = quantity - 200;
        const remainingtotal = remainingQuantity * above200price;
        const total = first100total + secound100total + remainingtotal;
        return total;
    }
}

const totalPrice = discounttotal(300);
console.log(totalPrice)