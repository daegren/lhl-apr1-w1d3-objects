# Objects in JS

Hi all, the code we wrote in class this morning can be found [here](https://github.com/daegren/lhl-apr1-w1d3-objects)

## Primitive data types

We know these guys already:

- String - `"Hello"`, `"banana"`, `'apple'`, `"This sentence is false."`
- Number - `1`, `378643`, `2e5`, `0xFF`
- Boolean - `true`, `false`
  - There are many other _falsey_ values: `undefined`, `null`, `NaN`, the number `0` and empty strings (`''`).
  - Everything else will evaluate to `true` inside an `if` statement.
- Array - `[1000, "This sentence isn't true", [4, 5, 6], "wat?"]`
  - ...but `typeof` will say it's an `object`
- How do I find the type of something?
  - `typeof(...)`

## Objects

Objects are first and foremost key-value pairs. Differently from Arrays, you use keys (which are _always strings_) to get data in an out. The values can be of **any type** - including arrays, other objects and functions (more on this below).

```javascript
var job = {
  company: "Lighthouse Labs",
  started: "January 2017",
  courses: [
    {
      name: "web"
    },
    {
      name: "blockchain"
    }
  ]
};
```

I can access the data in an object in two ways: _dot notation_:

```javascript
job.friends = ["John"];
```

or _bracket notation_ (subscripting):

```javascript
job["role"] = ["John"];
```

NOTE: Even if you try to use different data types as keys, they will be converted to strings automatically, so it's a good idea to only use strings in the first place.

We talked about how objects are passed _by reference_ to functions. This means when you modify an object inside a function you are _actually_ modifying the original object.

```javascript
function newFriend(gig, friend) {
  gig.friends.push(friend);
}

newFriend(job, "Dave");

console.log(job.friends); // ["John", "Dave"]
```

## Resources

- [MDN - Primitive Types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
- [Javascript Passing by Value vs. Reference Explained in Plain English](https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c)
