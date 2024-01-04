// This script will focus on loops
// Used to execute a piece of information again and again. 

for(let i=1;i<=5;i++)
{
    console.log("Apna college");
}


// Calculate sum of 1 to 5 

let sum=0;
for ( let j=1; j<=5;j++)

{
    
    sum=sum+j;
}
    console.log(sum);


// While loop ( initialized first, check the condition, increment when the loop begins)

let i=10;
while(i <=20)

{
    console.log( "i values are : ", i);
    i++; 
}

// example of a do-while loop  ( initialization, statmennt, increment, condition)

// EXCEPTION 

// Loop will atleast run once
// There is a semi- colon in the end in do-while loop 

let d=20
do { 
console.log("My name is Aniket ")
d++
}
while (d<=30);

// for-of loop ( New loop in Javascript) ( USED FOR CHARACTERS AND STRINGS)

let str= "Aniket Goyal"; 

for (let i of str){
console.log("Values of i are :",i)
}


// for-in loop ( Used for objects ) Return keys of objects

let people ={
name: "Aniket Goyal ", 
age: 23,
cgpa: 7.6, 
isPass: true,
}; 

// Now we have to put the loop on this student object 

for ( let key in people){
    console.log(key); 
}