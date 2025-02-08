// const instuser=new Object()   //  this is single turn object 
const instauser={}               // this is non single turn objecet

// adding values in object
instauser.id="123abc"
instauser.name="hitesh"
instauser.islogedin=false

// console.log(instauser)



const regularuser={
    email :"mrhitesh@gmail.com",
    fullname : {
        username:{
                firstname:"hitesh",
                lastname:"ambaliya"
        }
    }
 }


 // assiccing values in nested objcts
//  console.log(regularuser.fullname.username.firstname);

// combinoing two objects 
const obj1 ={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3=Object.assign({},obj1,obj2)

//  using spred oprator
const obj3={...obj1,...obj2}
// console.log(obj3);


const users =[
    {
        id: 1,
        email:"hitesh @gmail.com",
    },
    {
        id: 1,
        email:"hitesh @gmail.com",
    },
    {
        id: 1,
        email:"hitesh @gmail.com",
    },
    {
        id: 1,
        email:"hitesh @gmail.com",
    },
    {
        id: 1,
        email:"hitesh @gmail.com",
    },
]
// users[1].email;
// console.log(instauser);
// console.log(Object.keys(instauser));
// console.log(Object.values(instauser));
// console.log(Object.entries(instauser));

// console.log(instauser.hasOwnProperty("islogedin"));            // use to check the key/vale is in object  or not




//  destructure objects
 const course ={
    coursename:"c++ in gujrati",
    prise:1000,
    courseinstructure:"hitesh ambaliya"
 }

const {courseinstructure} = course
 console.log(courseinstructure);
const {courseinstructure:instructer} = course
 console.log(instructer);
 