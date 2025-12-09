function isOldEnoughToVote(age) {
  // your code here
  if(age < 18){
    return false;
  }
  else{
    return true;
  }
  
}

let input = prompt("What is your age");
isOldEnoughToVote(input);

