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

const total = discountPrice(1);
console.log(total)