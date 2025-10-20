//  inch to feet function-------------------
function inchtoFeet(inch){
    const feet = inch/12;
    const feetnum = parseInt(feet);
    const inchreman = inch% 12;
    const result = feetnum + ' ft ' + inchreman + ' inch';
    return result

}

let myheight = inchtoFeet(70);
console.log('my height:', myheight);