// To add comments ( Comments in JS)

// This code prints Hello World 

console.log("Hello World")

// Operators in Js 

let a=5;
let b=9;
console.log(a+b);
console.log(a%b);

// Urnary Operators 

// Increment 
// Decrement

let c =1; 
c++

console.log(c);

{
    let a =20;
    a-- 
    console.log(a); 

}


// Comparison Operators (will return True or False)

// This is start of a block 
{
 let a =5 ;
 let b ="5";
 
 console.log('a==b', a==b); // Will return True 

 console.log("a==b", a===b);// Will return false ( Triple equal to compare the data types first) 

}


// Logical Operators 

// Logical &&    // BOth the conditions should be true to return true

// For example
{

    let a =6 ;
    let b= 5; 

    const cond1 = a>b;// True 
    const cond2= a===6;// True

    console.log("Cond1 and Cond2",cond1&& cond2);
}
// Logical OR || // If any one of them is True, it will return True 
// Logical NOT ! // Will make true condition false and vice versa 

{

    let  a =6 ; 
    let b= 12; 

    const cond1= a<b; // True 

    console.log("Condition is", !cond1)
};

// Conditional Statements 

// Type 1- If statement 


     let marks = 13; 

     
     if ( marks%2===0) {
        console.log("Number is even");
     }

     else {

        console.log("Number is Odd");
     }


