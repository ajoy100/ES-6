/*function doubleIt(num){
    return num*2;
}*/
// const doubleIt=function myFunc(num){ // myFunc Na Dilew Hobe 
//     return num*3;
// }
const doubleIt= num => num*5; // (num) Dilew hobe , Akadhik Value te () Dite hobe
const add=(x,y) => (x+y);
const withOutParameter=() => 5; // Only 5 Return Korbe


// Onek Kaj er jonno
const DoMAth=(x,y) => {
    const add=x+y;
    const diff=x-y;
    const result=add*diff;
    return result;
}

const result=doubleIt(5);
const result1=add(1,3);
const result3=withOutParameter();
const result4=DoMAth(7,5);

console.log(result);
console.log(result1);
console.log(result3);
console.log(result4);
