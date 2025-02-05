// object declare literal
const mySym= Symbol("key1")                              //defining the symbol
const userdt={
    name: "Hitesh",
    "full name": "Hitesh ambaliya",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    // lastLoginDays: ["Monday", "Saturday"]
}
// console.log(userdt)


// console.log(userdt.email)                                      // generly we can use dot(.) method to access vale form object 
// console.log(userdt['full name'])                               // access unick strings like in this example key have bitween space 
// console.log(userdt[mySym])                                     //access symbol some time ask in interviews


// changing values of object
userdt.email="hahir@google.com"
// you can aso lock the values using freeze method . your object is freeze.
// Object.freeze(userdt) 




// adding function to the object
userdt.gretting =function(){
    console.log("hello userdt ")
}
console.log(userdt.gretting())                       // access function from object


userdt.gretting1=function (){
    console.log(`hello user ,${this.name}`)          // in this function we take value form object usinh this keyword
}
console.log(userdt.gretting1())