class Teacher{
    constructor(name,subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(subjectName){
        console.log(`Sir is teaching ${subjectName}`)
    }
}

let Sabbir = new Teacher('Sabbir','Math');
console.log(Sabbir);
Sabbir.lecture('Math')
