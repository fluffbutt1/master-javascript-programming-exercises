function isOldEnoughToDrink(age) {
    // your code here
    if(age >= 21){
        return true;
    }
    else if(age <= 21){
        return false;
    }
}

let input = prompt("Wht is your age");
isOldEnoughToDrink(input);

