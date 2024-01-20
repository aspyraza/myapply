

let mode = "light";
let colour;

if (mode === "dark"){
    colour = "black";
}
else if (mode === "blue"){
    colour = "blue";
}
else if(mode === "pink"){
    colour = "pink";
}
else{
    colour = "white";
}

console.log(colour)



//conditional statement


let age = 25;

let result = age >= 27 ? "adult" : "not adult"
 console.log(result)



 let name = prompt("hello");
 console.log(name);


 let num = prompt ("enter a number");
   
 if(num % 5 === 0) {
    console.log(num, "is a multiple of 5");
 }
 else{
    console.log(num, "is not multiple of 5")
 }



 let score = 33;
 let grade;
  
 if (score >= 90 && score <= 100){
    grade = "A"
 }
 else if(score >= 70 && score <= 89){
    grade = "B"
 }
 else if(score >= 50 && score <= 69){
   grade = "C"
 }
 else{
    grade = "f"
 }

 console.log(grade)