// This =  Refers the current context

const user = {
    username : "Tanmay",
    price : 999,
    
    welcomemessage : function() {
        // console.log(`${this.username} , Welcome to Website`);
        // console.log(this)
    }
}


// user.welcomemessage()
// user.username = "Saee"
// user.welcomemessage()  // Here the user value will be updated from -- to --
// // console.log(this);  // This will give an empty msg 

// function chai (){
//     let username = "Tanny"
//     // console.log(this.username)  // It will give nothing just undefiend values
// }

// chai()


const chai =  () => {              // Those arrow indicate as an arrow functions (it will aslo give an undefined value )
    let username = "Tanny"
    console.log(this.username)  
}

// chai()


// Syntax of an Arrow function

// () => {}

    // Basic Arrow function 

// const addtow = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addtow(2,3))

    // Another Implecite return     
//                     In this we will not use the {} only syntax diff

const addtow = (num1, num2) =>  num1 + num2
console.log(addtow(2,4))
