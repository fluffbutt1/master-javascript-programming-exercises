function isOldEnoughToDrive(age) {
  // your code here
  if(age >= 16){
    return true;
  }
  else if(age <= 16){
    return false;
  }
  
}

let input = prompt("What is your age");

isOldEnoughToDrive(input);
