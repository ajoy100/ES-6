class Parent{
    constructor(){
        this.fatherName="Schwerznegger";
    }
}
class Child extends Parent{    // connection (entends)
    constructor(name){
        super();            // Parent Class er constructor Call
        this.name=name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby=new Child("Arnold");
const baby2=new Child("Tom");
//console.log(baby,baby2);
console.log(baby.getFullName() ,"\n", baby2.getFullName());