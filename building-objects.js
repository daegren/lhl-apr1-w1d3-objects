var items = [
  "coffee",
  "tea",
  "tea",
  "laptop",
  "monitor",
  "mouse",
  "keyboard",
  "mouse",
  "tea",
  "coffee",
  "cup",
  "bottle",
  "printer",
  "HDMI cable"
];

function countValues(input) {
  var countedItems = {};

  for (var i = 0; i < input.length; i++) {
    // Using a local variable to keep track of the current item we're iterating through
    // This saves us from having to use input[i] everywhere.
    var currentItem = input[i];

    // If the key doesn't exist in the object `undefined` will be returned.
    if (countedItems[currentItem] === undefined) {
      // If the key doesn't exist, create it and assign it the value `1`
      countedItems[currentItem] = 1;
    } else {
      // Otherwise increment the current count
      countedItems[currentItem] += 1;
      // This is the same as above
      // countedItems[currentItem] = countedItems[currentItem] + 1;
    }
  }

  // Finally return the object we constructed using the for loop.
  return countedItems;
}

// Invoke the function, using the items variable as the first parameter and `console.log` the result
console.log(countValues(items));
