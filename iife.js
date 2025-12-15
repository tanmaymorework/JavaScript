// Immediately Invoked function Expression (IIFE)
//                   :- Global scope ke polution see problem hoti hee bahut bar to avoid this polution we use IIFE


// we just wrap the whole function  
// This is named IIFE
(function chai(){                      
    // console.log(`DB CONNECTED`)
})  ();  // ; is impo


// Syntax = ()  [This ia for the rapping of an function],  () [This is for calling for the function]

// Example for arrow into iife

// ( () => {
//     console.log(`Do it `)             // It will work
// }) ()

// This is an unnamed IIFE
( (namee) => {
    console.log(`Do it ${namee}`)             // treat him like an function 
}) ('Tanmay')