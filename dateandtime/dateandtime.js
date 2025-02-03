// dates
let mydate=new Date()
// console.log(mydate.toString());              //mon feb 03 2025 16:15:05 GMT+0000 (coordinated Universal Time)
// console.log(mydate.toISOString());           //2025-02-03T16:05.847Z
// console.log(mydate.toDateString());          //mon feb 03 2025
// console.log(mydate.toJSON());                // 2025-02-03t16:15:05.847Z
// console.log(mydate.toLocaleDateString());    //2/3/2025
// console.log(mydate.toLocaleString());        //2/3/2025,4:15:05 PM
// console.log(mydate.toLocaleTimeString());    //4:15:05 PM
let createdDate=new Date("01-14-2025")
// console.log(createdDate.toLocaleString());
let myTimeStemp=Date.now()
// console.log(myTimeStemp);                 // this console give milliseconds
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));  // this console give seconds
let newDate= new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth()+1);
newDate.toLocaleString('default',{
    weekday:"long",
})