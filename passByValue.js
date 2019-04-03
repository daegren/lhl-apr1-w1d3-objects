// ref -> 0x001
function replace(ref) {
  // ref -> 0x002
  ref = {}; // this code does _not_ affect the object passed
}

// ref -> 0x001
function update(ref) {
  ref.otherkey = "newvalue"; // this code _does_ affect the _contents_ of the object
}
// a -> 0x001
var a = { key: "value" };
replace(a); // a still has its original value - it's unmodfied
console.log("after replace:", a);
// a -> 0x001
update(a); // the _contents_ of 'a' are changed
console.log("after update:", a);
