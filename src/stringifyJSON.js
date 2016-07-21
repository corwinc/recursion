// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // NULL / UNDEFINED / NON-ENUMERABLE
  if (obj == null) {
    return "null";
  };

  if (obj == undefined || typeof obj == "symbol" || typeof obj == "function") {
    return;
  };


  // ARRAYS
  if (Array.isArray(obj)) {
    var stringifiedArray = [];
    for (var i = 0; i < obj.length; i++) {
      stringifiedArray.push(stringifyJSON(obj[i]));
    };

    var result = "[" + stringifiedArray + "]";
    return result;
  };


  // OBJECTS
  if (typeof obj == "object") {
    var stringifiedObject = "";

    for (x in obj) {
      var length = Object.keys(obj).length

      if (obj[x] === undefined || typeof obj[x] === 'function') {

      } else {
        if (x == Object.keys(obj)[length - 1]) {
          stringifiedObject += stringifyJSON(x) + ":" + stringifyJSON(obj[x]);
        } else {
          stringifiedObject += stringifyJSON(x) + ":" + stringifyJSON(obj[x]) + ",";
        };
      };
    };

    return "{" + stringifiedObject + "}";
  }


  // PRIMITIVES
  if (typeof obj == "string") {
    return "\"" + obj + "\"";
  }

  return obj.toString();
};





// TEST CASES
console.log("null: " + stringifyJSON(null));
console.log("function: " + stringifyJSON(function () {return "Should return undefined";}));
console.log("symbol: " + stringifyJSON(Symbol("Should return undefined")));
console.log("empty object: " + stringifyJSON({}));
console.log("array: " + stringifyJSON([1, 2, 3]));
console.log("object: " + stringifyJSON({name: "corwin", age: 28}));
console.log("number: " + stringifyJSON(13));
console.log("string: " + stringifyJSON("HELLO WORLD"));

// COMPARISON
console.log(JSON.stringify(null));
console.log(JSON.stringify(function () {return "Should return undefined";}))
console.log(JSON.stringify(Symbol("Should return undefined")));
console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify({name: "corwin", age: 28}));
console.log(JSON.stringify(13));
console.log(JSON.stringify("HELLO WORLD"));



// OUTLINE
// 1. Understand JSON.stringify
// 2. Create recursive solution from scratch

// Check for type of obj: create different scenarios for each
// Not able to stringify: Null / undefined / function
// Non-enumerable
// Array
// object
// primitive
