// Strings in Javascript 

let string0= "Apna College"; 
console.log(string0.length); 

// template literals ( Used to print strings and variables/ numbers easily )

// syntax- string text $(expression ) string text 

// For example 

let output= 24; 

let money= `My name is Aniket and my roll number is  ${output} `;
console.log(money);

// there is also another concept of escape characters ( given by /t)

let name= "My name is \t Aniket "
console.log(name); 


/// STRING METHODS IN JS
// These are built- in functions to manipulate a string 


let string= "my name is aniket goyal"; 
console.log(string.toUpperCase())

// in javascript strings are immutable  ( that is whenever a string is changed a string is created)

// .trim method deletes the spaces from starting and end 

// str.slice returns part of string 

let string2= "myname"; 
let newstr= string2.slice(1,5); 

console.log(newstr); 


// concat method ( very famous method to join two strings together )


//.................................// 

// Practise Questions- Tell the user to enter their full name and based on that give them a username 
// starting with @ and print the full length of the given username 

let fullName= prompt(" My name is: " ); 
console.log("Entered name is: ", fullName);
let userName= "@"+ fullName;  
console.log("Available username is : ", userName); 
console.log("Length of the username is: ", fullName.length)






