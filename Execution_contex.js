/*
In the JAVASCRIPT execution contec contain 3 types
1)  Global // Global Execution contex have
2) Function Execution contex 
3) Evol Execution contex 
*/

/*
How JS code executed
1 phase = memory creation phase :- Only merory allocated
2 phase = Execustion phase :- All the value get executed
*/


let valu1 = 10;
let val2 = 20;

function addnum(num1, num2){
    let total = num1 + num2 
    return total
}

let result1 = addnum(valu1, val2)
let result2 = addnum(10, 2)


// How this code get executed

/*
1 step by Global execution = (using this key )
2 step by memory phase  = (all the vale get store but not executed , ex in above valu1)

val1 = undefined
val2 = undefined
adddnum = defination
result1 = undefined
result2 = undefined

3 step by execution phase = val1 = 10
val2 =20


Note = after all the execution line by line it will get delete 
*/