// ---Comparisons--
//> >= < == <= !=
// === strict equality check

console.log("2">1);
console.log(null> 0); // this type of camparison should be avoid(L5-L8)
console.log(null==0);
console.log(null>=0);

//The reason is that an equality check == and comparisons > < >= <= work differently
//Comparisons convert null to a number, treating it as 0.
//That's why (L2) null>0 is false and (L4) null>=0 is true.