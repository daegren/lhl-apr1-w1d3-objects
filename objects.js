var classes = ["iOS", "web"];

// Objects contain key-value pairs.
// The keys are always strings
// The value can be any JavaScript value (including other objects)
var instructor = {
  name: "Dave",
  yearsOfExperience: 11,
  numberOfStudents: 24,
  isActive: true,
  classes: classes,
  doSomething: function() {
    console.log("Doing something!");
  },
  favouriteClass: classes[1],
  // Keys are unique, so when keys overlap only the last one is kept
  isActive: false
};

// Subscripting Syntax

console.log("Is the instructor active?", instructor["isActive"]);
var key = "isActive";
console.log("Is the instructor active?", instructor[key]);

instructor["friends"] = ["Juan", "Tim", "Vasily"];

var friends = instructor["friends"];
var bestFriend = friends[1];
console.log("best friend is", instructor["friends"][1]);
console.log("best friend is", bestFriend);
instructor["bestFriend"] = bestFriend;

instructor["testScores"] = ["a", "b", "c"];

console.log("instructor", instructor);

// Dot notation

console.log("Instructors name is", instructor.name);
instructor.bestFriend = "Vasily";

console.log("Instructors best friend is", instructor.bestFriend);
