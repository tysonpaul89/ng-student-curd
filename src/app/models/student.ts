export class Student {
    id: number;
    name: string;
    age: number;
    dob: string;
    image: string;
    created: string;
    updated: string;

    constructor(studentObj: { id: number, name: string, age: number, dob: string, image?: string, created?: string, updated?: string}) {
        this.id = studentObj.id;
        this.name = studentObj.name;
        this.age = studentObj.age;
        this.dob = studentObj.dob;
        this.image = studentObj.image;
        this.created = typeof studentObj.created !== undefined ? studentObj.created : '';
        this.updated = typeof studentObj.updated !== undefined ? studentObj.updated : '';
    }
}
