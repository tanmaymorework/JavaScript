// 1) Scopes  (Block's Scopes)

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user Power : ${power}`);
// }

//console.log(`user power : ${power}`);   // Here it will give an error because the power is in scope it is not defined out side to it



// 2) Short Hand Notation, OR Emplicet Scope  (NOT USE IN IT)

// const balance = 1000

// if(balance > 500) console.log("True"), console.log("False") ; // This is in on eline code no nned to write the brackets (but very unproper way to writ code not suggested)


// 3) Online Shoping

const userLoggedIn = true
const Debitcard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && Debitcard && 2 == 2){         // In this one false statemnet no execution, we can check the statement && two times
    console.log("Allow to buy Cours")

}

if(LoggedInFromGoogle || LoggedInFromEmail){   // here one false statement it will executed
 console.log("userLoggedIn")
}