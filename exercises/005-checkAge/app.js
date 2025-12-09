function checkAge(name, age) {
  // your code here
  if(age < 21){
    return "Go home, " + name + "!";
  }
  else{
    return "Welcome, " + name + "!";
  }
}

let num = parseInt(prompt("What is your age?"), 10);
console.log(checkAge("Adrian", num));