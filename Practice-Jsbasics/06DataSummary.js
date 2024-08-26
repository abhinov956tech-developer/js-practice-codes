// Primitive(Call by Value)
// 7 types: String, Number,Boolean, null, undefined, Symbol,BigInt

const id=Symbol('123')
//Non-primitive(Referenced type/Call by reference)
//Array,Objects,Functions
const nums=[1,2,3];//array

let myobj= {//object
    name: "john",
    age: 19,

}
const myfunc1=function(){
    //function
}

//----Memory----
//stack(primitive) & Heap(Non-primitive)
let myname1="abhinov"
let myname2=myname1
console.log(myname1);
myname2="Bhargob"
console.log(myname2);// In stack copy of value is given to the new variable so if we change value of the new variable it will not change the value of original value of the variable

let UserOne={
    emailid:"user1@gmail.com"
}
let UserTwo=UserOne

 UserTwo.emailid="user2@gmail.com"
 console.log(UserOne.emailid);
 console.log(UserTwo.emailid);