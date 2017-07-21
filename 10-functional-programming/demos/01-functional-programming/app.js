'use strict'

const doctors = [
  { number: 20, actor: 'William Hartnell', begin: 1963, end: 1966 },
  { number: 30, actor: 'Patrick Troughton', begin: 1966, end: 1969 },
  { number: 3, actor: 'Jon Pertwee', begin: 1970, end: 1974 },
  { number: 4, actor: 'Tom Baker', begin: 1974, end: 1981 },
  { number: 5, actor: 'Peter Davison', begin: 1982, end: 1984 },
  { number: 6, actor: 'Colin Baker', begin: 1984, end: 1986 },
  { number: 7, actor: 'Sylvester McCoy', begin: 1987, end: 1989 },
  { number: 8, actor: 'Paul McGann', begin: 1996, end: 1996 },
  { number: 9, actor: 'Christopher Eccleston', begin: 2005, end: 2005 },
  { number: 10, actor: 'David Tennant', begin: 2005, end: 2010 },
  { number: 11, actor: 'Matt Smith', begin: 2010, end: 2013 },
  { number: 12, actor: 'Peter Capaldi', begin: 2013, end: 2013 }
];

// `.filter()` => returns a new array of values based on conditional return statement
let filteredDocs = doctors.filter(doctor => doctor.number > 10) // => Returns a new array of doctors; only those with a `number` value greater than 10
console.log(filteredDocs)


// Define a filter callback, which can then be passed directly into .filter()
// The parameter and return value are implicite in this pattern
function filterByEndDate(doctor) {
  return doctor.end > 2000
}
filteredDocs = doctors.filter(filterByEndDate)


// `.map()` => returns a new array of values, which have been manipulated in some way
let mappedDocs = doctors.map(doctor => {
  return {
    number: doctor.number,
    name: doctor.actor.split(' '),
    yearsPlayed: (doctor.end - doctor.begin) + 1
  }
}) // => Returns a new array of doctors; each new object has a number, name, and yearsPlayed prop with pass-thru or new values
console.log(mappedDocs)

// map and filter chain
let anotherMappedDocs = doctors.map(doctor => {
  return {
    number: doctor.number,
    name: doctor.actor.split(' '),
    yearsPlayed: (doctor.end - doctor.begin)
  }
}).filter(doctor => doctor.yearsPlayed < 5) // Newly mapped array is returned from map, and filter is called on that new array
console.log(anotherMappedDocs)


// `.reduce()` => returns a new value; defaulting to integer values, but can also be a new array of values
var arr = [34, 55, 3, 23, 12, 7, 99]

let sumArray = arr.reduce((acc, current) => acc + current)
console.log(sumArray)
// => returns the total sum of the array, 233 (default accumulator is `0`)

let sumArrayPlusOne = arr.reduce((acc, current) => acc + current, 1)
console.log(sumArrayPlusOne)
// => returns the total sum of the array from the starting value, 234 (accumulator is `1`)


// Below passes an array as the accumulator.
let newArr = doctors.reduce((acc, curr) => {
  if (curr.number > 10) {
    acc.push({
      number: curr.number,
      name: curr.actor.split(' '),
      yearsPlayed: (curr.end - curr.begin) + 1
    })
  }
  return acc
}, [])
// .filter()
// .map()
// .reduce() // REVIEW: Reminder to students that they can continue to chain
              // these methods to continue their logic
console.log(newArr)


// below is just an example of assigning methods to an object, and then handing that object out to the global scope
let articleView = {}
articleView.method1 = function() {}
articleView.method2 = function() {}
articleView.method3 = function() {}
articleView.method4 = function() {}
articleView.method5 = function() {}
articleView.method6 = function() {}
