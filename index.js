/*The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. */
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));

/*
The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. */

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];
const result = words.filter((word) => word.length > 6);
console.log(result);

/*
The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
*/
const arrayOne = [5, 1, 8, 130, 44];
const found = arrayOne.find((element) => element > 10);
console.log(found);

/*The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.*/
const arrayTwo = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(arrayTwo.findIndex(isLargeNumber));
/**The findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned. */
const arrayFindlast = [5, 12, 50, 130, 44];
const foundlast = arrayFindlast.findLast((element) => element > 45);
console.log(foundlast);
/*The findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.*/
const arrayLastIndex = [5, 12, 50, 130, 44];
const isLargeNumberlastindex = (element) => element > 45;
console.log(arrayLastIndex.findLastIndex(isLargeNumberlastindex));
/*The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.*/
