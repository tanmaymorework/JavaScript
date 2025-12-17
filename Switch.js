// Syntax of an Switch 

// switch (key) {   // Key is the value we have to check repeated (example month)
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
    console.log("January");
        break;
    case 2:
    console.log("februvary");
        break;
    case 3:
    console.log("March");
        break;
    case 4:
    console.log("April");
        break;
    case 6:
    console.log("June");
        break;
    case 7:
    console.log("July");
        break;
    case 8:
    console.log("Augest");
        break;
    case 9:
    console.log("September");
        break;
    case 10:
    console.log("Octumber");
        break;
    case 11:
    console.log("November");
        break;
    case 12:
    console.log("January");
        break;
    case 1:
    console.log("December");
        break;

    default:
        console.log("Default case Value out of bound")
        break;
}