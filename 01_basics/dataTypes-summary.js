// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //false

 //const bigNumber = 345799200198234n
 

// Reference (Non primitive)

// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Sushma",
    age: 22, 

}

const myFunction = function (){
    console.log("Hello World");
}

console.log(typeof bigNumber);

// * Premitive Datatypes

//Type                                   typeof

//i)             Number                               number
//ii)            String                                   string
//iii)           Boolean                               boolean
//iv)           Bigint                                   bigint
//v)            Symbol                                symbol
//vi)           Null                                      object
//vii)          Undefined                           undefined


//Non-Premitive OR Referance OR Object datatype

//                  Type                                   typeof

//i)               Object                                object
//ii)              Array                                  object
//iii)             Function                            function(object)
