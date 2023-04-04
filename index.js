// class 01 learn: What is es6 in js 
// follow the note book.

// class 02 learn: setup your environment
// follow the note book.

// // class 03 learn: what is template string
// let text = `    Hello users,
// Assalamu Alaikum.
// I hope you are well. Because it's your turn of life management.
// So be seriously. Although it's complicated.`
// console.log(text)

// console.log(text.trim())

// let name = 'Kajal Mia'
// let age = 20
// console.log(`My name is ${name} and I am ${age} years old. 
// You are ${age > 19 ? 'not ' : ''}adult now.`)

// console.log(name.padStart(15, '@ '))
// console.log(name.padEnd(15, ' #'))

// let names = 'Kajal Mia, '
// console.log(names.repeat(5))

// // class 04 learn: let vs const vs var
// for(var i = 0; i < 10; i++){

// }
// console.log(i)// output succeed.
// //again test
// // for(let n = 0; n < 20; n++){

// // }
// // console.log(n)// output didn't succeed. that mean, Uncaught reference.

// var value = 20
// value = 29
// console.log(value)

// let container = 90
// container = 280
// console.log(container)

// const num = 10
// num = 100 // type error.
// console.log(num)

// // class 06 learn: new arrow function syntax
// let arrFunc = (pie, radius) => {
//     return pie * radius * radius
// }
// arrFunc()

// let triangle = (l, w) => l * w
// triangle()

// let sqr = s => s * s
// sqr()

// // new arrow function with variable defined
// let form = (name, roll) => name + ', ' + roll

// let studentIdOne = form('Kajal', 56)
// let studentIdTwo = form('Sajal', 57)
// let studentIdThree = form('Emon', 58)

// let dataBase = {}
// dataBase.s1 = studentIdOne
// dataBase.s2 = studentIdTwo
// dataBase.s3 = studentIdThree

// let allDetails = []
// allDetails.push(dataBase)
// console.log(allDetails)

// // class 07 learn: arrow function and this
// let Fn = (shift, dpt) => shift + ', ' + dpt
// let result = Fn('2nd', 'Computer technology')

// let arr = []
// arr.push(result)
// console.log(arr)

// function sample(a, b){
//     return a + ', ' + b
// }
// let result2 = sample(2, 09)
// console.log(result2)

// let obj = {
//     a: 'hi',
//     b: 'hello'
// }
// let obj2 = {
//     c: 'yes',
//     d: 'no'
// }
// console.log(obj, obj2)

// function simple(){
//     console.log(this)
// }
// simple()

// let Fn = () => console.log(this)
// Fn()

// let obj3 = {
//     name: 'Kajal Mia',
//     opt: function(){
//         setTimeout(() => {
//             let self = this
//             console.log(`Name: ${self.name}`)
//         }, 2000)
//         console.log(this)
//     }
// }
// obj3.opt()

// // class 08 learn: what is default parameters
// function sum(a = 3, b = 10){
//     return a * b
// }
// sum()

// let func = (m = 9) => m * m
// func(9)

// // class 09 learn: create custom iterable object
// let iterateObj = {
//     start: 1, end: 10,
//     [Symbol.iterator]: function(){
//         let currValue = this.start
//         let self = this
//         return{
//             next(){
//                 return{
//                     done: currValue > self.end,
//                     value: currValue > self.end ? undefined : currValue++ 
//                 }
//             }
//         }
//     }
// }
// for(let n of iterateObj){
//     console.log(n)
// }

// let iterate = iterateObj[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// class 10 learn: rest and spread operator
// arguments provide by user given
// function something(){
//     let something = 0
//     for(let n = 0; n < arguments.length; n++){
//         something += arguments[n]
//     }
//     return something
// }
// console.log(something(1, 2, 3, 4, 5, 6, 7, 8, 9))

// rest (...) operator use instead of arguments object 
// and  reduce() method with fat arrow function
// function some(...yes){
//     // console.log(yes)
//     return yes.reduce((x, y) => x * y)
// }
// console.log(some(1, 5, 30, 100))

// // spread operator use to single property and single value return
// let temporaryNumber = [1, 5, 30, 100]
// // console.log(temporaryNumber)
// console.log(...temporaryNumber) // single value by array

// let force = {
//     first: 200, second: 400, third: 500
// }
// let force1 = {
//     ...force
// }
// console.log(force1) // single property in object

// // class 11 learn: enhace object in js
// let x = 20, y = 30
// // js version
// let newObject = {
//     x, y, 
//     print: function(){
//         console.log('I am Kajal Mia.')
//     }
// }
// newObject.print()
// // es6 version
// let sampleObject = {
//     x, y,
//     test(){
//         console.log('I am Kajal Mia.')
//     }
// }
// console.log(sampleObject.test())

// // class 12 learn: destructuring in js
// let desObj = {
//     name: 'Kajal Mia',
//     email: 'kajalmia3490@gmail.com',
//     address: {
//         city: 'Dhaka',
//         country: 'Bangladesh'
//     }
// }
// console.log(desObj)

// let {name, email, address: {city, country}} = desObj
// console.log(name, email, city, country)

// let multiData = [2, 3, 5, 7, 11, 13, 17, 19]
// console.log(multiData)
// let [, , , , five, , , eight] = multiData
// console.log(five, eight)

// // class 13 learn: object fromEntries() method 
// let anObject = {
//     name: 'Kajal Mia', condition: 'student'
// }
// console.log(Object.entries(anObject)) // object to array

// let anArray = [
//     ['name', 'Kajal Mia'], ['email', 'kajalmia3490@gmail.com']
// ]
// console.log(Object.fromEntries(anArray)) // array to object

// // class 14 learn: what is symbol in es6
// let uniqueId = Symbol()
// let id = Symbol('test id')
// console.log(uniqueId === id)
// console.log(uniqueId)
// console.log(id)

// let toss = {
//     head: Symbol('Your turn now'),
//     tail: Symbol('His turn now')
// }
// console.log(toss)

// class 15 learn: web pack and babel-7
/**
 * some tools, some package and babel - 7, some interface install for es6 in js.
 * that will be step by step: follow the note book.
 * */

// // class 16 learn: what is iterator 
// // ES5 js iterator means old normal js iterator
// let arrs = [5, 7]
// function oldIterator(collects){
//     let n = 0
//     return{
//         next(){
//             return{
//                 done: n >= collects.length,
//                 value: collects[n++]
//             }
//         }
//     }
// }
// let iterates = oldIterator(arrs)
// console.log(iterates.next())
// console.log(iterates.next())
// console.log(iterates.next())

// class 17 learn: es6 iterator: how to use
// let arr = [1, 2, 3]
// // function arrIterator(count){
// //     let i = 0
// //     return{
// //         next(){
// //             return{
// //                 done: i > count.length,
// //                 value: count[i++]
// //             }
// //         }
// //     }
// // }
// // let iterate = arrIterator(arr)
// // console.log(iterate.next())

// let iterate = arr[Symbol.iterator]()
// console.log(iterate.next())

// // string iterator 
// let str = 'Kajal'
// let iterates = str[Symbol.iterator]()
// console.log(iterates.next())
// console.log(iterates.next())
// console.log(iterates.next())
// console.log(iterates.next())
// console.log(iterates.next())
// console.log(iterates.next())

// // class 18 learn: how does for of loop works
// let arrs = [1, 2, 3]
// for(let v of arrs){
//     console.log(v)
// }

// for(let s of 'Kajal'){
//     console.log(s)
// }

// // class 19 learn: what is generator function
// let arrData = [5, 4]
// function* at(collect){
//     for(let n = 0; n < collect.length; n++){
//         yield collect[n]
//     }
// }
// let gen = at(arrData)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// // simple generator create
// function* it(){
//     yield 1
//     yield 2
//     yield 3
// }
// let that = it(arrData)
// console.log(that.next())
// console.log(that.next())
// console.log(that.next())
// console.log(that.next())

// let objs = {
//     start: 1, end: 4,

//     [Symbol.iterator]: function* (){
//         let currValue = this.start
//         while(currValue < this.end){
//             yield currValue++
//         }
//     }
// }
// let these = objs[Symbol.iterator]()
// console.log(these.next())
// console.log(these.next())
// console.log(these.next())
// console.log(these.next())

// // class 20 learn: understand sets in es6
// let sets = new Set(['kajal', 'sajal', 'emon', 'arman'])

// methods of sets
// sets.clear()
// sets.has(4)
// sets.delete(3)

// console.log(sets)

// // class 21 learn: map in js
// let map = new Map([
//     ['Kajal', 3.50], 
//     ['Sajal', 3.60],
//     ['Emon', 3.70]
// ])
// map.set('Juma', 3.90)
// map.set({name: 'Ashmoni'}, 3.95)
// // map.delete('Kajal')
// console.log(map)

// for(let [k, v] of map){
//     console.log(v, k)
// }

// map.forEach((v, k) => {
//     console.log(k, v)
// })

// // class 22 learn: weakSet in js 
// let sample = {
//     a: 10, b: 20
// }
// let temple = {
//     c: 30, e: 50
// }
// let weakSet = new WeakSet([sample, temple])
// temple.d = 40
// weakSet.add(temple)
// sample.a = null
// console.log(weakSet)

// // class 23 learn: weakMap in js 
// let objOne = {
//     p: 99
// }
// let objTwo = {
//     q: 100
// }
// let weakMap = new WeakMap([objOne, objTwo])
// objOne = null
// console.log(weakMap)

// // class 24 learn: new class syntax in js
// class Circle{
//     constructor(pie, r){
//         this.pie = pie
//         this.r = r
//     }
//     multi(){
//         console.log(this.pie * this.r * this.r)
//     }
// }
// let sum = new Circle(3.1416, 5)
// sum.multi()
// console.log(sum)

// let sum2 = new Circle(3.1416, 10)
// sum2.multi()
// console.log(sum2)

// // class 25 learn: es6 class properties
// class info{
//     constructor(name, age){
//         this.n = name
//         this.a = age
//     }
//     ad = 'Bhairab'
//     msg(){
//         console.log(`My name is ${this.n} \nand age ${this.a}.`)
//     }
// }
// let sms = new info('Kajal', 20)
// sms.msg()
// console.log(sms)

// // class 26 learn: es6 static method
// class stID{
//     constructor(name, roll){
//         this.name = name 
//         this.roll = roll
//     }
//     static stDetail(detail){
//         let stDetail = JSON.parse(detail)
//         return new stID(stDetail.name, stDetail.roll)
//     }
// }
// let detail = '{"name": "Kajal", "roll": "478056"}'
// let stOne = stID.stDetail(detail)
// console.log(stOne)

// // Bank Id collected from user
// class BankId {
//     constructor (name, sNumber) {
//         this.name = name
//         this.security = sNumber
//     }
//     static account (info) {
//         let accountInfo = JSON.parse(info)
//         return new BankId (accountInfo.name, accountInfo.security)
//     }
// }
// let info = '{"name": "Kajal", "security": 5031}'
// let bankIdDetails = BankId.account (info)
// console.log(bankIdDetails)

// class 27 learn: 'this' property in es6
// 'use strict'
//  function Fire () {
//     this.speed = function () {
//         console.log(this)
//     }
//  }
//  let experiment = new Fire ()
//  let newExperiment = experiment.speed
//  newExperiment()

// class Yes {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }
//     msg() {
//         console.log(this.name, this.email)
//     }
//     test() {
//         console.log(this)
//     }
//     static anotherTest() {
//         console.log('I am a static method')
//     }
// }
// let tested = new Yes('K', 'km3490')
// let runed = tested.test
// console.log(runed())

// // class 28 learn: hide private data using symbol
// const _one = Symbol()
// const _two = Symbol()
// const _msg = Symbol()
// class Angle {
//     constructor(partOne, partTwo) {
//         this [_one] = partOne
//         this [_two] = partTwo
//     }
//     mixPart() {
//         console.log('there are mixing now...')
//     }
//     [_msg]() {
//         console.log('I am sending the msg...')
//     }
// }
// let angleTest = new Angle('yes', 'no')
// console.log(angleTest)

// // class 29 learn: hide private data with weakMap
// const _part1 = new WeakMap()
// const _part2 = new WeakMap()
// const _draw0 = new WeakMap()
// class Box {
//     constructor(part1, part2) {
//         _part1.set(this, part1)
//         _part2.set(this, part2)
//         _draw0.set(this, () => {
//             console.log('google chrome')
//         })
//     }
    
//     draw() {
//         console.log(_part1.get(this), _part2.get(this))
//         _draw0.get(this)()
//     }
// }
// let testing = new Box(2, 5)
// testing.draw()
// console.log(testing)

// // class 30 learn: getter and setter es6
// const _name = new WeakMap()
// const _email = new WeakMap()
// class Base {
//     constructor(name, email) {
//         _name.set(this, name)
//         _email.set(this, email)
//     }
//     get name() {
//         return _name.get(this)
//     }
//     set email(e) {
//         _email.set(this, e)
//     }
//     draw() {
//         console.log('I am drawer.')
//     }
// }
// let testFul = new Base('Kajal', 'kajalmia3490')
// testFul.draw()
// console.log(testFul.name)
// console.log(testFul.email)

// // class 31 learn: inheritance in es6
// class Msg {
//     constructor() {

//     }
//     sms() {
//         return 'I am alert msg.'
//     }
// }
// class Add extends Msg {
//     constructor(a, b) {
//         super()
//         this.a = a
//         this.b = b
//     }
//     sum() {
//         return this.a + this.b 
//     }
// }
// let result = new Add(13, 27)
// console.log(result.sms())
// console.log(result.sum())

// // class 32 learn: method overriding
// class Shape {
//     hi(){
//         console.log('I am not heavy')
//     }
// }
// class Sum extends Shape {
//     constructor(a, b) {
//         super() //// can be passed the parameter of parent class
//         this.a = a
//         this.b = b
//     }
//     multi() {
//         return this.a * this.b
//     }
//     hi() {
//         console.log('I am a lightman')
//     }
// }
// let result = new Sum(5, 4)
// result.hi()

// class 33 learn: es6 module system
