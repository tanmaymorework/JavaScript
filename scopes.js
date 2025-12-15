var c = 300;
let a = 34;

if(true){
    let a = 20
    const b = 32
    var c = 43

  //  console.log("Inner :" , a);
    
}

// console.log(a)  // this will give an error because of the a is called in the box of an scope (it cannot access outside of it)
//console.log(b)  // this will give an error because of the b is called in the box of an scope (it cannot access outside of it)
//console.log(c)  // It will not give an error it will update an value of the var c to = 30(It can access the value inside of it ) 

//console.log("Outside :" , a);


//++++++++++++++++++++++++++++++= Nested Scope ++++++++++++++++++++++++++++++++++++++

function one(){
    const username = "tanmay"

    function two(){
        const professsion = "Actor"
        console.log(username);  // We can asscess this value because it will treat as the sce in scope
        
    }
    two()
    // console.log(professsion);  // It will give an error because it is out of the scope
    
}
one()


if(true){
    const username = "Tanmay"

    if(username === "Tanmay"){
        const professsion = " Actor"
        console.log(username + professsion);
        
    }
    // console.log(professsion); // Give an error because it cannot acces out of the scope
    
}
// console.log(username);  // Again Error becuse cannot access out of the scope


// ++++++++++++++++++ Intresting in fuction  ++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}
 // Anotheer method two right an function in the scopes

// addtwo(5)  // In the first method it will not give an error to acess it we must call out off  the scope

const addtwo = function (num){
    return num + 2
    
}
console.log(addtwo(5))