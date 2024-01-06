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



// Print all even numbers from zero to hundred and odd nunmbers consectively 

// print 0,2 4 ,6... // odd numbers 1,3,5... .



for ( let n=0; n<=100; n++ )

{



if ( n % 2===0)
{
    console.log("All even numbers are", n);
}

else {
    console.log("  odd numbers are : ", n); 
}

}


// Random no question guessing a given randon value by the user 

let gamNum= 25; 


let number= prompt(" Guess the gamenumber : ");

console.log(number); 

while( gamNum!= number){

let number= console.log("Number entered was wrong, enter the number again: ")
}

console.log(" Number entered was right")

