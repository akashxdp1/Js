// leapyear function -----------------------

function leepYear(year){
    if(year % 100 !==0 && year % 4 ===0){
        return true;
    }
    else if(year % 400==0){
        return true;
    }
    else{
        return false;
    }
}

const leepyear = leepYear(2004);
console.log( leepyear);