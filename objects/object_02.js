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
console.log(obj3);
