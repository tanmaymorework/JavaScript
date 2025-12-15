function saymyname (){
    // console.log("T");
    // console.log("A");
    // console.log("N");
    // console.log("M");
    // console.log("A");
    // console.log("Y");
}

// saymyname()  // to exicute give (),  to give referance dont give ()

// function addtwonumber (number1, number2){
//     console.log(number1 + number2)
// }

// addtwonumber(3, 4)

const result = addtwonumber(3, 4)
// console.log(result)   // Value of result is undefined  


function addtwonumber (number1, number2){
    // let result = number1 + number2
    // return result;
    // console.log("Hitesh")  // This will not print because of the return type (it will restrict the data to be return...) 

    // anotheer way to return the number

    return number1 + number2
}


function loginUsermessage(username){
if(!username){                                // This is the profesional way to write an code, ! (meaning is not equal)
   // console.log("Please enter a username");
}



    // if(username === undefined){    // === meanning is not equal 
//     console.log("Please enter a username");
//     return
// }

    return `${username} just logged in`
}

// console.log(loginUsermessage("Tanmay"))
// console.log(loginUsermessage())  // If we will not pass the value then it will give the value as undefined 



// +++++++++++++++++++++++++++++ Function are added int he js for the shoping websites (EcarD) +++++++++++++++++++++++++++++

// Note  ... = is know as rest operator and This is another part spred operator


function calculatecartprice(val1, val2, ...num1){
    return(num1)
}

console.log(calculatecartprice(200, 500, 540))