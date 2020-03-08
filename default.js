function add(num1,num2){
    /*if(num2==undefined){
        num2=0;
    }*/
    num2=num2 ||30;
    return num1+num2;
}
//const total=add(15,17);
const total=add(15);
console.log(total);

// ES6 Gives US:
function aadd(num1,num2=60){

    return num1+num2;
}
const ttotal=aadd(15,10); // value na dile 60 nibe , Dile Nibe na
console.log(ttotal);