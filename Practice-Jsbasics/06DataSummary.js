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