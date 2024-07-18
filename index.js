// problem 1:  ES6 Destructuring
// Problem: You have an object representing a person. Use ES6 destructuring to extract the name and age properties.
// Answer1

const person = {
    name:"Shohid Abusaid",
    Age: 25
}

let {name , Age} = person;

console.log(Age);

// problem2
// Problem: Create a module that exports a function to calculate the area of a circle and import it into another file.

function areaOfCircle(radius){
    return Math.PI*radius*radius;
}

// let circleArea = areaOfCircle(5);
//console.log(circleArea);

module.exports = { areaOfCircle };

// alternative

// // Function to calculate the area of a circle
// export function calculateCircleArea(radius) {
//     return Math.PI * radius * radius;
// }

// 3. ES6 Classes
// Problem: Create a class Rectangle with properties width and height and a method to calculate the area.

// Answer3
class Rectangle {
constructor(hight,width){
    this.hight = hight;
    this.width = width;
}
calculateArea(){
    return this.hight * this.width;
}
}

const myRectangle = new Rectangle(10,5);
const Area = myRectangle.calculateArea();
console.log(`my rectangle hight is: ${myRectangle.hight} and width is: ${myRectangle.width}. Total area is ${Area}`);

// 4. Getter and Setter in ES6
// Problem: Create a class Person with a getter and setter for the fullName property.

// Answer4

// next problem solving is added after some times later net problems