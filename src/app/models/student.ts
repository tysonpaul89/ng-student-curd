export class Student {
    id: string;
    name: string;
    age: string;
    dob: string;
    created: string;
    updated: string;

    constructor(studentObj: { id: string, name: string, age: string, dob: string, created: string, updated: string}) {
        this.id = studentObj.id;
        this.name = studentObj.name;
        this.age = studentObj.age;
        this.dob = studentObj.dob;
        this.created = studentObj.created;
        this.updated = studentObj.updated;
    }
}
