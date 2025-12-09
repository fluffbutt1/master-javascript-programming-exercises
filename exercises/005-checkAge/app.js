let person = prompt("name please");
let age = parseInt(prompt("age please"), 10);

function checkAge(name, age) {
  // your code here
  if(age < 21){
    return "Go home, " + name;
  }
  else{
    return "Welcome, " + name;
  }
}


console.log(checkAge(person, age));