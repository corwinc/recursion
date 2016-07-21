// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className) {
  var result = [];

  function filterElements(node) {
    if (node.classList && (node.classList).contains(className)) {
      result.push(node);
    };

    (node.childNodes).forEach(function(child) {
        filterElements(child);
      });
  };

  filterElements(document.body);
  return result;
};


// Find all elements of className argument
// Identify current node
// If current node's classlist contains className, push to result.
// Repeat (recurse) for each child node
  // Create function to use for recursion
