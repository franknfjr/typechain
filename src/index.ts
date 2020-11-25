const sayHi = (name: string, age: number, gender: string):  string => {
    return `Hi ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi("Frank", 26, "Male"));

export {}