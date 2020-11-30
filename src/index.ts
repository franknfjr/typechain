// interface Human {
//     name: string,
//     age: number,
//     gender: string
// }

// const person = {
//     name: "Frank",
//     age: 26,
//     gender: "male"
// }

class Human {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const frank = new Human("Frank", 26, "male")

const sayHi = (person: Human): string => {
    return `Hi ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(frank));

export { }