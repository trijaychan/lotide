 Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @trijaychan/lotide`

**Require it:**

`const _ = require('@trijaychan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Asserts whether two arrays are equal and outputs a message alerting if the assertion failed or passed.
* `assertEqual(actual, expected)`: Asserts whether two arrays are equal and outputs a message alerting if the assertion failed or passed.
* `assertObjectsEqual(obj1, obj2)`: Asserts whether two objects are equal and outputs a message alerting if the assertion failed or passed.
* `countLetters(str)`: Returns an object that contains the number of occurence per letter in the input.
* `countOnly(allItems, itemsToCount)`: Returns an object that contains the number of occurences of various strings in an array.
* `eqArrays(arr1, arr2)`: Checks if two arrays are equal.
* `eqObjects(obj1, obj2)`: Checks if two objects are equal.
* `findKey(obj, callback)`: Finds a key in an object given a certain condition.
* `findKeyByValue(obj, callback)`: Finds a key in an object given a certain value.
* `flatten(arr)`: Levels out an array by flattening out subarrays.
* `head(arr)`: Returns the head of an array.
* `map(arr, callback)`: Returns a new array with an operation performed on each element.
* `middle(arr)`: Returns the middle element(s) of an array.
* `tail(arr)`: Returns the tail of an array.
* `takeUntil(array, callback)`: Returns a subarray starting from the head unti a certain condition.
* `without(arr, elements)`: Returns a subarray which does not contain certain elements.