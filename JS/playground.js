//c const a = 10

/* 
NOTE: MultiLine
*/

var temp ="Hello"
temp = "Google"

let temp2 = 100
temp2 = 50

const temp3 = true
//temp3 = false

temp4 = "Dog"
temp4 = "Cat"

const a = 10
const b = 5
let c = 5
c = "ABC"
const sum = a + b
// console.log(sum)
// console.log(a+b+c)

const temp5 =[1, 2, 3, 4, 5, "A"]
// console.log(temp5[0]);

temp5.forEach(item => {
    // console.log(item);
})

const filterTemp = temp5.filter(item => item >= 3)
// console.log("Filter number more than 3 is", filterTemp);

temp5.push(6)
// console.log("Insert 6 to array", temp5);

const car1 = {
    "color": "Red",
    "brand": "Honda",
    "model": {
        a1: 'ASD#R',
        a2: 'FGY*R'
    }
}
// console.log(car1.model.a1);

// function sayHello() {
    //console.log('Hi');
// }

//NOTE: Function arg.
const sayHello = (number, name) =>{
    // console.log(`Number is: ${number} by ${name}`);
}

// const nickname = "Ben"
// sayHello(123, nickname)



//NOTE: Funtion return

const firstName = 'Jed'
const lastName = 'Tao'

const mergeName = (firstName, lastName) => {
    //NOTE: 1.
    // return firstName + " " + lastName

    // NOTE: 2.
    // const fullName = firstName + " " + lastName
    // return fullName

    //NOTE: 3.
    return `${firstName} ${lastName}`
}

// const fullName = mergeName(firstName, lastName)
// console.log(fullName);



//NOTE: Conditions (if else)
const number1 =30
// if (number1 > 30) {
//     console.log("Number1 is more than 30");
// }

// if (number1 < 30) {
//     console.log("Number1 is more than 30");
// }else {
//     console.log("Number1 is more than 30");
// }

// number1 < 30 
//     ? console.log('Number1 is less than 30');
//     : console.log('Number1 is more than 30');

// if (number1 < 20) {
//     console.log("Number1 is less than 20");
// } else if(number1 < 30) {
//     console.log("Number1 is less than 30");
// }else{
//     console.log("Number1 is more than 40");
// }

// switch (number1) {
//     case 10:
//         console.log("Number1 is less than 20");
//         break;
//     case 20:
//         console.log("Number1 is less than 30");
//         break;
//     case 40:
//         console.log("Number1 is equal 40");
//         break;
//     default:
//         console.log("Number1 is more than 40");
//         break;
// }

//NOTE: Loop & Iteration

const myCars = [
    "Ford",
    "Honda",
    "Toyoya",
    "Lambogini"
]
// for (let index = 0; index < myCars.length; index++) {
//     const car = myCars[index];
//     console.log(car);
// }



// for (const key in car1) {
//     if (Object.hasOwnProperty.call(car1, key)) {
//         const element = car1[key];
//         console.log(element);
        
//     }
// }

for (const car of myCars) {
    //console.log(car);
}

let i = 0

while (i < 10) {
    console.log("The numner is ", i);
    i++
}