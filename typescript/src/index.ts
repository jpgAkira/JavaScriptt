// string, boolean, number, ...

let x:number = 10;

x = 25;

console.log(x);

// inferencia x annotation

let y = 12; // inferencia

// y = "teste";

let z:number = 12; // annotation

// tipos básicos

let firstName: string = "Matheus";
let age:number = 30
const isAdmin: boolean = true

// String != string

console.log(typeof firstName);

firstName = "João";

console.log(firstName);

// object

const myNumbers: number[] = [1, 2, 3]

console.log(myNumbers)
console.log(myNumbers.length)
// console.log(myNumbers.toUppercase()) ele ajuda na hora de programar
console.log(firstName.toUpperCase())
myNumbers.push(5);

// tuplas -> tuple

let myTuple: [number, string, string[]]

myTuple = [5, "Teste", ['a', 'b']]
// myTuple = [true, false, true];

// object literals -> {props: value}
const user: {name: string, age: number} = {
    name: "Pedro",
    age: 18
};

console.log(user);
console.log(user.name);
// user.job = "Programador"

// any

let a:any = 0

a = "teste"
a = true
a = []