var lighthouse = {
  courses: [
    {
      name: "FT Web Bootcamp",
      instructors: ["Juan", "Dave", "Stosh"]
    },
    {
      name: "FT iOS Bootcamp",
      instructors: ["Dave", "James"]
    }
  ]
};

// Fetching the "James" value

// Subscripting
var courses = lighthouse["courses"];
var course = courses[1];
var instructors = course["instructors"];
var james = instructors[1];

console.log("James should be", james);

// Dot Notation
var courses2 = lighthouse.courses;
var course2 = courses2[1];
var instructors2 = course.instructors;
var james2 = instructors2[1];

lighthouse.courses[1].instructors[1];

console.log("James should be", james2);
