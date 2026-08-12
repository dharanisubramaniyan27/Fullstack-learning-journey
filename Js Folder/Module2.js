//? DEFAULT EXPORT
//!FUNCTION
// function Raja(){
//     console.log("I am Raja");
// }
// export default Raja


//! ARRAY
// let arr=["sai","jaya","raj","hari"]
// export default arr

//! OBJECT
let obj={
    name:"Raja",
    age:25,
    city:"Chennai",
    country:"India"
}
export default obj

//?NAMED EXPORT
//!FUCNTION
function Rajesh(){
    console.log("I am Raji Rajesh");
}
export{Rajesh as RAJI}

//!OBJECT
let person={
    name:"Prasanna",
    age:45,
    city:"Ap",
    country:"England"
}
export {person as Arepalli}

//!ARRAY
let num=[12,23,45,67,89]
export {num as Number}
