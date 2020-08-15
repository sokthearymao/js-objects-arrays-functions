// OBJECTS
// let radius = 1
// let x = 1
// let y = 1
// function draw() {}
// function move() {}
// Object Oriented Programming OOP Styled JavaScript
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw')
//     }
// }

// circle.draw() // draw method

// Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw')
//         }

//     }  
// }

// const circle1 = createCircle(1)
// console.log(circle1)

// const circle2 = createCircle(2)
// console.log(cricle2)

// Constructor Function
// Camel Case Notation: oneTwoThreeFour
// Pascal Case Notation OneTwoThreeFour
// function Circle(radius) {
//     this.radius = radius
//     this.draw = function() {
//         console.log('draw')
//     }
//     return this
// }

// const circle = new Circle(1)
// const x = {}

//Dynamic Nature of Objects
// const circle = {
//     radius: 1
// }

// circle.color = 'yellow'
// circle.draw = function() {}

// delete circle.color
// delete circle.draw

// console.log(circle)

//Enumerating Properties of an Object
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw')
//     }
// }

// for (let key in circle)
//     console.log(key, circle[key])

// for (let key of Object.keys(circle))
//     console.log(key)

// for (let entry of Object.entries(circle))
//     console.log(entry)

// if ('radius' in circle) console.log('yes')

// Cloning an Object
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw')
//     }
// }

// const another = {}

// for (let key in circle)
//     another[key] = circle[key]

// //another['radius'] = circle['radius']

// const another = Object.assign({
//     color: 'yellow'
// }, circle)

// const another = { ...circle }

// console.log(another)

// Garbage Collection is built into javascript no control

//String primitive
// const message = 'This is my first message'

// String object
// const anotherString = new String('hi meng')

// Date objects
// const now = new Date()
// const date1 = new Date('May 11 2020 09:00')
// const date2 = new Date(2020, 4, 11, 9)

// now.setFullYear(2024)

//Exercise Address Object
// street
// city
// zipCode
// showAddress(address)

// let address = {
//     street: '153 Millview Bay',
//     city: 'Calgary',
//     zipCode: 'T2Y 4A8'
// }

// function showAddress(address) {
//     for (let key in address)
//         console.log(key, address[key])
// }

// showAddress(address)


// Exercise Factory and Constructor Functions

// let address = new Address('a', 'b', 'c')
// console.log(address)

// Factory FUnction
// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     }
// }

// Constructor Function
// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// Exercise Object Equality
// let address1 = new Address('a', 'b', 'c')
// let address2 = new Address('a', 'b', 'c')


// console.log(areEqual(address1, address2))
// console.log(areSame(address1, address2))

// Constructor Function
// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// function areEqual(address1, address2) {
//     return address1.street === address2.street &&
//         address1.city === address2.city &&
//         address1.zipCode === address2.zipCode
// }

// function areSame(address1, address2) {
//     return address1 === address2
// }

// Exercise Blog Post Object
//title
//body
//author
//views
//comments
// (author, body)
// isLive

// let post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 10,
//     comments: [
//         { author: 'a', body: 'b' },
//         { author: 'c', body: 'd' },
//     ],
//     isLive: true
// }

// console.log(post)

// let post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 10,
//     comments: [
//         { author: 'a', body: 'b' },
//         { author: 'c', body: 'd' },
//     ],
//     isLive: true
// }

// function Post(title, body, author) {
//     this.title = title
//     this.body = body
//     this.author = author
//     this.views = 0
//     this.comments = []
//     this.isLive = false

// }

// Exercise Price Range Object
// let priceRanges = [
//     { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
//     { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
//     { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
 
// ]

// let restaurants = [
//     { averagePerPerson: 5 }
// ]

//ARRAYS Adding Elements
// const numbers = [3, 4]

//Add to end of an array
// numbers.push(5,6)

//Add to beginning of an array
// numbers.unshift(1, 2)

//Add to middle of an array
// numbers.splice(2, 0, 'a', 'b')

// console.log(numbers)

// Finding Elements (Primitives)
// const numbers = [1, 2, 3, 1, 4]

// console.log(numbers.indexOf('a'))
// console.log(numbers.lastIndexOf(1))

// console.log(numbers.indexOf(1) !== -1)
// console.log(numbers.includes(1))

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b '}
// ]

// console.log(courses.includes({ id: 1, name: 'a' }))
// const course = courses.findIndex(function(course) {
//     return course.name === 'a'
// })

// console.log(course)

// Arrow Functions
// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b '}
// ]

// const course = courses.find(course => course.name === 'a')

// const numbers = [1, 2, 3, 4]

// End
// const last = numbers.pop()

// Beginning
// const first = numbers.shift()

// Middle
// numbers.splice(2, 2)
// console.log(numbers)

// Emptying an Array
// let numbers = [1, 2, 3, 4]
// let another = numbers

// Solution 1
// numbers = []

// Solution 2
// numbers.length = 0

// Solution 3
// numbers.splice(0, numbers.length)

// Solution 4
// while (numbers.length > 0)
//     numbers.pop()

// console.log(numbers)
// console.log(another)

// Combining and Slicing Arrays
// const first = [1, 2, 3]
// const second = [4, 5, 6]

// const combined = first.concat(second)

// const slice = combined.slice(2, 4)

// console.log(combined)
// console.log(slice)

// The Spread Operator
// const first = [1, 2, 3]
// const second = [4, 5, 6]

// const combined = first.concat(second)
// const combined = [...first, 'a', ...second, 'b']

//const copy = combined.slice()
// const copy = [...combined]
// console.log(combined)
// console.log(copy)

// const numbers = [1, 2, 3]

// for (let number of numbers)
//     console.log(number)

// numbers.forEach((number, index) => console.log(index, number))

// Joining Arrays
// const numbers = [1, 2, 3]
// const joined = numbers.join(',')
// console.log(joined)

// const message = 'This is my first message'
// const parts = message.split(' ')
// console.log(parts)

// const combined = parts.join('-')
// console.log(combined)

// Sorting Arrays
// const numbers = [2, 3, 1]
// numbers.sort()
// console.log(numbers)

// numbers.reverse()
// console.log(numbers)

// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'javaScript' }
// ]

// courses.sort(function(a, b) {
//     // a < b => -1
//     // a < b => 1
//     // a === b => 0
//     const nameA = a.name.toUpperCase()
//     const nameB = b.name.toUpperCase()
    
//     if (nameA < nameB) return -1
//     if (nameA > nameB) return 1
//     return 0
// })

// console.log(courses)

// Testing elements of an array
// const numbers = [1, -1, 2, 3]

// const atLeastOnePositive = numbers.some(function(value) {
//     return value >= 0
// })

// console.log(atLeastOnePositive)

// Filtering an Array
// const numbers = [1, -1, 2, 3]

// const filtered = numbers.filter(n => n >= 0)

// console.log(filtered)

// Mapping an Array
// const numbers = [1, -1, 2, 3]

// const filtered = numbers.filter(n => n >= 0)

// const items = filtered.map(n => '<li>' + n + '</li>')

// const html = '<ul>' + items.join('') + '</ul>'

// const items = filtered.map(n => ({ value: n}) ) 

// const items = numbers
//     .filter(n=> n >= 0)
//     .map(n => ({ value: n }))
//     .filter(obj => obj.value > 1)
//     .map(obj => obj.value)

// console.log(items)

// Reducing an Array
// const numbers = [1, -1, 2, 3]

// let sum = 0;
// for (let n of numbers)
//     sum += n

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
// const sum = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
// )
// console.log(sum)

// Array from Range
// const numbers = arrayFromRange(-10, -4)

// console.log(numbers)

// function arrayFromRange(min, max) {
//     const output = []
//     for (let i = min; i<= max; i++)
//         output.push(i)
//     return output
// }

// Includes
// const numbers = [1, 2, 3, 4]

// console.log(numbers.includes(numbers, 1))

// function includes(array, searchElement) {
//     for (let element of array)
//         if (element === searchElement)
//             return true
//         return false
// }

// Except
// const numbers = [1, 2, 3, 4]

// const output = except(numbers, [1, 2, 3, 4])

// console.log(output)

// function except(array, excluded) {
//     const ouput = []
//     for (let element of array)
//         if (!excluded.includes(element))
//             output.push(element)
//         return output
// }

// Exercise Moving an element
// const numbers = [1, 2, 3, 4]

// const output = move(numbers, 1, 2)

// console.log(output)

// function move(array, index, offset) {
//     const position = index + offset
//     if (position >= array.length || position < 0) {
//         console.error('Invalid offset')
//         return
//     }
        
//     const output = [...array]
//     const element = output.splice(index, 1)[0]
//     output.splice(position, 0, element)
//     return output
// }

// Count Occurrences
// const numbers = [1, 2, 3, 4, 1]

// const count = countOccurrences(numbers, 1)

// console.log(count)

// function countOccurrences(array, searchElement) {
    // let count = 0
    // for (let element of array)
    //     if (element === searchElement)
    //         count++
    // return count

//     array.reduce((accumulator, current) => {
//         const occurrence = (current === searchElement) ? 1: 0
//         console.log(accumulator, current, searchElement)
//         return accumulator + occurrence
//     }, 0)
// }

// Exercise Get Max array.reduce
// const numbers = [1, 2, 3, 4]

// const max = getMax([1, 2, 3, 4, 8, 9])

// console.log(max)

// function getMax(array) {
    // if (array.length === 0) return undefined

    // let max = array[0]

    // for (let i = 1; i < array.length; i++)
    //     if (array[i] > max)
    //         max = array[i]

    // return max

//     if (array.length === 0) return undefined

//     return array.reduce((a, b) => (a > b) ? a : b)

// }

// Exercise Movies
// const movies = [
//     { title: 'a', year: 2020, rating: 4.5 },
//     { title: 'b', year: 2020, rating: 4.7 },
//     { title: 'c', year: 2020, rating: 3 },
//     { title: 'd', year: 2019, rating: 4.5 },
// ]

// Get all the movies in 2020 with rating > 4
// Sort them by their rating
// descending order
// Pic only their title property and display on console

// const titles = movies
//     .filter(m => m.year === 2020 && m.rating >= 4)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map(m => m.title)
        // a < b => -1
        // a === b => 0
        // a > b => 1
// console.log(titles)
    
// Function Declarations vs Expressions
// function declaration
// function walk() {
//     console.log('walk')
// }

// Function expression
// let run = function() {
//     console.log('run')
// }
// let move = run
// run()
// move()

// Key differencies / hoisting
// Function Declaration
// function walk() {
//     console.log('walk')
// }
// walk()


// Function Expression
// console.log(x)
// let x = 1
// run()

// const run = function() {
//     console.log('run')
// }

// Arguments
// function sum(a, b) {
//     let total = 0
//     for (let value of arguments)
//         total += value
//     return total
// return args.reduce((a, b) => a + b)
// }

// console.log(sum(1, 2, 3, 4, 5, 8))

// The Rest Operator
// function sum(discount, ...prices) {
//     const total = prices.reduce((a, b) => a + b)
//     return total * (1 - discount)
// }

// console.log(sum(0.1, 20, 30))

// Default parameters
// function interest(principal, rate=3.5, years) {
    // rate = rate || 3.5
    // years = years || 5

//     return principal * rate / 100 * years
// }
// console.log(interest(10000, undefined , 5))

// Getters and Setters
// const person = {
//     firstName: 'Mosh',
//     lastName: 'Hamedani',
//     // fullName: function() {},
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value) {
//         const parts = value.split(' ')
//         this.firstName = parts[0]
//         this.lastName = parts[1]
//     }
// }

// person.fullName = 'John Smith'
// console.log(person.firstName + ' ' + )

// getters => access properties
// setters => change (mutate) them
// console.log(person)

// Error handling Try and Catch
// const person = {
    // firstName: 'Mosh',
    // lastName: 'Hamedani',
    // set fullName(value) {
        // const e = new Error()
        // throw e
//         if (typeof value !== 'string')
//             throw new Error('Value is not a string.')

//         const parts = value.split(' ')
//         if (parts.length !== 2)
//             throw new Error('Enter a first and last name')
        
//         this.firstName = parts[0]
//         this.lastName = parts[1]
//     }
// }
// try {
//     person.fullName = ''
// }
// catch (e) {
//     console.log(e)
//     alert(e)
// }

// console.log(person)

// Local vs Global Scope
// block scope
// function start() {
//     const message = 'hi'

//     if (true) {
//         const another = 'bye'
//     }

//     for (let i = 0; i < 5; i++) {
//         console.log(i)

//     }
// }
// start()
//const color = 'red' // global scope 
// usually bad practice ie each person should have thier own toothbrush
// especially if each function can have access and change the value of the variable ie lots of potentional bugs

// function start() {
//     const message = 'hi'
//     const color = 'blue' // block scope
//     console.log(color)
// }

// function stop() {
//     const message = 'bye'
//     console.log(color)
// }

// start()
// stop()

// Let vs Var
// function start() {
//     for (var i = 0; i < 5; i++) {
//         if (true) {
//             let color = 'red'
//         }

//     }
//         console.log(color)
// }

// before es6 var only way to define vars and const = > create function-scoped variables
// ES6 (ES2015): let, const => block-scoped variables

// start()

//var color = 'red' // attaches to window object in console in global scope
// let age = 30

// function sayHi() {
//     console.log('hi')
// }

// The this keyword
// This represents the current object that is executing the current function
// if function is part of object -> method -> obj
// if function -> global (window, global)

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag)
//         }, this)
//     }
// }

// video.showTags()

// video .stop = function() {
//     console.log(this)
// }

// function Video(title) {
//     this.title = title
//     console.log(this)
// }

// const v = new Video('a')
// playVideo()
// video.play()

// Changing this keyword
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         const self = this
//         this.tags.forEach(function(tag) {
//             console.log(self.title, tag)
//         })
//     }
// }

// video.showTags()
// function playVideo(a, b) {
//     console.log(this)
// }

// playVideo.call({ name: 'Mosh' }, 1, 2)
// playVideo.apply({ name: 'Mosh '}, [1, 2])
// playVideo.bind( {name: 'Mosh' })()

// playVideo()
// use arrow functions for callbacks
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach((tag) => {
//             console.log(this.title, tag)
//         })
//     }
// }

// video.showTags()

// Exercise 1 Sum of Arguments
// sum([1, 2, 3, 4]) => 10

// console.log(sum(1, 2, 3, 4))

// function sum(...items) {
    //console.log(items)
//     if (items.length === 1 && Array.isArray(items[0]))
//         items = [...items[0]]
//     return items.reduce((a, b) => a +b)
// }

// Exercise 2 Area of Circle
// circle.radius = 2
// circle.area = 20
//console.log(circle.area)

// const circle = {
//     radius: 1,
//     get area() {
//         return Math.PI * this.radius * this.radius
//     }
// }

// console.log(circle.area)

// Exercise 3 Error Handling
// try {
//     const numbers = [1, 2, 3, 4]
//     const count = countOccurrences(null, 1)
//     console.log(count)
// } catch (e) {
//     console.log(e.message)
// }

// function countOccurrences(array, searchElement) {
//     if (!Array.isArray(array))
//         throw new Error('Invalid array.')

//     return array.reduce((accumulator, current) => {
//         const occurrence = (current === searchElement) ? 1: 0
//         return accumulator + occurrence
//     }, 0)
// }