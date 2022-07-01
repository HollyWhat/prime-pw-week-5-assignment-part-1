console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: "Holly",
  lastName: "Drazenovich",
  hasSiblings: true,
  shoeCount: 4,
  favThreeFoods: ["coffee", "jambalaya", "avocado toast"]
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName +  " " +  me.lastName;
// is there another way to add a space between properties? 
console.log("my full name is", fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log("my first favorite food is",me.favThreeFoods[0]);
console.log("My last fav food is", me.favThreeFoods[2]);



/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log("current shoe count it", me.shoeCount );//should be 4 
console.log("new show count is",me.shoeCount += 1); // should be 5 



/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
console.log("this is about me!", me);

console.log(" adding my favorite color now", me.favoriteColor = "yellow" );//

console.log("testing my new object", me); //favorite color should new be added