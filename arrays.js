// Create Array 
// Collection of items  ( storing a particular type of information or kind of information)

// there are 5 students we want to store their marks 

// We can also make an object marks or student object and declare their marks but that will require to 
// to create a lot of variables. 

let mark= [98,44,43,22]; // array of marks 
let germany= ["Country", "Europe", 98]
console.log(mark); 
console.log(typeof mark); 

// Looping over an array 

for ( let index=0; index<=mark.length; index++)

{
    console.log(mark[index])
}

let sum1=0
// can also use for-of loop 
for ( let i of mark){
    console.log(i)
    sum1=sum1+ i; 
}

console.log("Average of numbers are :", sum1/mark.length)


// given array with marks of students. Find average marks of entire class 

