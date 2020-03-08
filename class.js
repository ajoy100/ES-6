class Student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="Palash Thana Model High School";
    }
}
const student1=new Student(1,"Ajoy");
const student2=new Student(3,"AA");
const student3=new Student(5,"Banik");
console.log(student1, student2, student3);
console.log(student1.name,student2.name);// Shudhu single Property er Jonno 