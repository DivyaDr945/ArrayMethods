/*The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. */
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
/*The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.*/
const arrayAt = [5, 12, 8, 130, 44];
let index = 2;
console.log('Array at : ' + arrayAt.at(index));
index = -2;
console.log('Array at in negative : ' + arrayAt.at(index));
//**The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. */
const arrayConcat1 = ['a', 'b', 'c'];
const arrayConcate2 = ['d', 'e', 'f'];
const arrayConcat3 = arrayConcat1.concat(arrayConcate2);
console.log('Array concat : ' + arrayConcat3);

/*
The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
*/
const arraycopywithIn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
console.log('Copy with in: ' + arraycopywithIn.copyWithin(2, 5));
/*The entries() method returns a new array iterator object that contains the key/value pairs for each index in the array.*/
const arrayentries = ['a', 'b', 'c'];
console.log('Array entries : ' + arrayentries.entries());
console.log('Array entries : ' + arrayentries.entries().next().value);
const arrayEntriesfor = arrayentries.entries();
for (const elements of arrayEntriesfor) {
  console.log(elements);
}
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
/*The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.*/
const arrayfill = [1, 2, 3, 4];
// Fill with 0 from position 2 until position 4
console.log(arrayfill.fill(0, 2, 4)); // Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(arrayfill.fill(5, 1)); // Expected output: Array [1, 5, 5, 5]

console.log(arrayfill.fill(6)); // Expected output: Array [6, 6, 6, 6]

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
console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], (x) => x + x));
/*The Array.fromAsync() static method creates a new, shallow-copied Array instance from an async iterable, iterable, or array-like object.*/
/*The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present*/
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison', 2));
console.log(beasts.indexOf('giraffe'));

/*The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.*/
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));
/*The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex
 */
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));
console.log(animals.lastIndexOf('Tiger'));
/*The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.*/
console.log(Array.of('foo', 2, 'bar', true));
console.log(Array.of());
/*The push() method adds the specified elements to the end of an array and returns the new length of the array.*/
const animalspush = ['pigs', 'goats', 'sheep'];
const count = animalspush.push('cows');
console.log(count);
console.log(animalspush);
animalspush.push('chickens', 'cats', 'dogs');
console.log(animalspush);
/*The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.*/
const arrayReduce = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = arrayReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log('arrayReduce: ' + sumWithInitial);
/*The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.  
reduce for left to right */
const arrayRight = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const resultarrayRight = arrayRight.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);
console.log(resultarrayRight);
/*The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.*/
const arrayReserve = ['one', 'two', 'three'];
console.log('arrayReserve:', arrayReserve);
const reversed = arrayReserve.reverse();
console.log('reversed:', reversed);
console.log('arrayReserve:', arrayReserve);
/*The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.*/
const arrayShift = [1, 2, 3];
const firstElement = arrayShift.shift();
console.log(arrayShift);
console.log(firstElement);
/*The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.*/
const animalsSlice = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animalsSlice.slice(2));
console.log(animalsSlice.slice(2, 4));
console.log(animalsSlice.slice(1, 5));
console.log(animalsSlice.slice(-2));
console.log(animalsSlice.slice(2, -1));
console.log(animalsSlice.slice());
/*The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.*/
const array = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// Expected output: true

/*The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending,*/
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]
const arraySort = [1, 30, 4, 21, 100000];
array1.sort();
console.log(arraySort);
// Expected output: Array [1, 100000, 21, 30, 4]

/*The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.*/
const monthsplice = ['Jan', 'March', 'April', 'June'];
monthsplice.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(monthsplice);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
monthsplice.splice(4, 1, 'May');
console.log(monthsplice);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

/*The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.*/
const arrayunShift = [1, 2, 3];
console.log(arrayunShift.unshift(4, 5)); // Expected output: 5
console.log(arrayunShift); // Expected output: Array [4, 5, 1, 2, 3]

/*The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.*/
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat()); // Expected output: Array [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]

/*The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.*/
const arrFlatmap = [1, 2, 1];
const resultarrFlatmap = arrFlatmap.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(resultarrFlatmap);
// Expected output: Array [1, 2, 2, 1]

/*The forEach() method executes a provided function once for each array element.*/
const arrayforEach = ['a', 'b', 'c'];
arrayforEach.forEach((element) => console.log(element));

/*The Array.isArray() static method determines whether the passed value is an Array.*/
console.log(Array.isArray([1, 3, 5])); // Expected output: true
console.log(Array.isArray('[]')); // Expected output: false
console.log(Array.isArray(new Array(5))); // Expected output: true
console.log(Array.isArray(new Int16Array([15, 33]))); // Expected output: false

/*The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 */
const arrayinclude = [1, 2, 3];
console.log(arrayinclude.includes(2)); // Expected output: true
console.log(arrayinclude.includes('cat')); // Expected output: false

/*The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.*/
const beastsindexOf = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beastsindexOf.indexOf('bison')); // Expected output: 1
// Start from index 2
console.log(beastsindexOf.indexOf('bison', 2)); // Expected output: 4
console.log(beastsindexOf.indexOf('giraffe')); // Expected output: -1

/*The keys() method returns a new array iterator object that contains the keys for each index in the array.*/
const arraykey = ['a', 'b', 'c'];
const iterator = arraykey.keys();

for (const key of iterator) {
  console.log(' arraykey : ' + key);
}
/*The pop() method removes the last element from an array and returns that element. This method changes the length of the array.*/
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // Expected output: "tomato"
console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage"]

/*The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma ",").*/
const arraytoLocal = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = arraytoLocal.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString);

/*The toReversed() method of an Array instance is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order.*/
const itemstoreversed = [1, 2, 3];
console.log(itemstoreversed); // [1, 2, 3]
//const reversedItems1 = itemstoreversed.toReversed();
console.log(); // [3, 2, 1]

/*The toSorted() method of an Array instance is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.*/
const monthssort = ['Mar', 'Jan', 'Feb', 'Dec'];
//const sortedMonths = monthssort.toSorted();
//console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(monthssort); // ['Mar', 'Jan', 'Feb', 'Dec']

/*The toSpliced() method of an Array instance is the copying version of the splice() method. It returns a new array with some elements removed and/or replaced at a given index.
toSpliced(start)
toSpliced(start, deleteCount)
toSpliced(start, deleteCount, item1)
toSpliced(start, deleteCount, item1, item2, itemN)

*/
/*The toString() method returns a string representing the specified array and its elements.*/
const arraytostring = [1, 2, 'a', '1a'];
console.log(arraytostring.toString());

/*The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.*/
const arrayunshift = [1, 2, 3];
console.log(arrayunshift.unshift(4, 5)); // Expected output: 5
console.log(arrayunshift); // Expected output: Array [4, 5, 1, 2, 3]

/*The values() method returns a new array iterator object that iterates the value of each item in the array.*/
const arrayvalues = ['a', 'b', 'c'];
const iteratorvalues = arrayvalues.values();
for (const value of iteratorvalues) {
  console.log(value);
}

/*The with() method of an Array instance is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value. array.with(index, value)
 */
const arr = [1, 2, 3, 4, 5];
//console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
