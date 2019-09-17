// REQUIRED FEATURES:
// 1 - Create a variable called firstName and assign it the value of your first name
let firstName = "Femi";

// 2 - Create a second variable called lastName and assign it the value of your last name
let lastName = "Oye";

// 3 - Create a third variable called fullName, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullName = firstName +" "+ lastName;

// 4 - Console log the value of fullName
console.log(fullName);

// 5 - Create a variable called age and assign it the value of your age
let age = 39;

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I am (age) years old.'.
// Refer back to the videos if you need help with this one.
console.log("My name is " + fullName + " and I am " + age + " years old.")

// 7 - Create a variable named adventurous and set it to a boolean value (true or false)
let adventurous = true


// 8 - Create a variable named food, and set its value to a string of your favorite food
let food = "pho";

// 9 - Create a variable called pets and set it to the value of the number of pets you have
let pets = 12;

// 10 - Create a variable called friendsPets and assign it the value of the number of pets your friend has
let friendsPets = 20;

// 11 - Add two pets to your pets variable
pets += 2 //same as pets = pets + 2

// 12 - Create a constant variable called allowedPets and set it to a number value of your choice
const allowedPets = 5;

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
if (adventurous == true){
    console.log("Adventures are great!");

}

// if it's not true, console log "How about we stay home?"
else {
    console.log("How about we stay home?");
}

// CLASS NOTES:
// && = and
// || = or
// > greater than
// < less than
// >= greater than or equals to
// <= less than or equals to
// !=

// STRETCH GOALS:
// 14 - Create a compound conditional: if age is greater than 18 and adventurous is true,
// console log "Hurray!"
if ((age > 18) && (adventurous)){
    console.log("Hurray!")
    }
else{
    console.log("Not Hurray!")
}

let numArray = [1, 3, 6, 5];
numArray.push(24)
numArray.push("nubu")
console.log(numArray.length)
console.table(numArray)

// CLASS 2 ASSIGNMENTS
// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of pets is less than the value of allowedPets,
if (pets < allowedPets){
    console.log("I can have more pets!")
}

// console logs "I have enough pets" if the value of pets is equal to the value of allowedPets,
if (pets == allowedPets){
    console.log("I have enough petsf")
}
// and console logs "Oh no, I have too many pets!"
// if the value of pets is greater than the value of allowedPets.
if (pets > allowedPets){
    console.log("Oh no, I have too many pets!")
}

// 16 - Write a conditional that assigns the value of the pets variable
// to a new variable called mostPets IF pets is greater than friendsPets.
if (pets > friendsPets){
    let mostPets = pets;
    console.log("mostPets equals: " + mostPets)
}
else{
    console.log("mostPets is not equal to pets")
}

// If friendsPets is greater than pets, assign the value of the friendsPets
// variable to mostPets. Console log the value of mostPets.
if (friendsPets > pets){
    let mostPets = friendsPets;
    console.log("friendsPets equals: " + mostPets)
}
else{
    console.log("mostPets is not equal to friendPets")
}

// READ ARRAYS, FUNCTIONS, FOR LOOPS

// ADDITIONAL CLASS 2 ASSIGNMENTS - ARRAYS

// Declare two empty arrays named: days_of_the_week and my_schedule
let days_of_the_week = [];
let my_schedule = [];

// Push the days of the week into days_of_the_week. Fill the other array with your work schedule.
days_of_the_week.push('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
console.log(days_of_the_week.length);
console.table(days_of_the_week);

my_schedule.push('Monday: 8am-4pm', 'Tuesday: 8am-4pm', 'Wednesday: 8am-4pm', 'Thursday: 8am-4pm', 'Friday: 8am-4pm')
console.log(my_schedule.length);
console.table(my_schedule);

// Write a compound conditional to check if you work on the Monday and Friday, if true, 
// console log Yes I am on the schedule, else log out I am off.

// ADDITIONAL ARRAYS/JAVASCRIPT RESOURCES:
// Links for Javascript materials:
// https://developer.mozilla.org/en-US/docs/Web/javascript
 
// Arrays:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


