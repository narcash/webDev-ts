"use strict";
// ****** Basic Types
// **** Boolean Type
let isCompleted = false;
// **  isCompleted = 11  // Type 'number' is not assignable to type 'boolean'.
// **** Number Type
const decimal = 2;
const integer = 2.5;
const hex = 0xf00d;
const binary = 0b1010;
const actal = 0o744;
// **** String Type for simple string
const userName = 'Nar';
//  String Type for template string
const sentence = `Hello, my name is ${userName}!`;
// **** Null & Undefined
const u = undefined;
const n = null;
// Void Type ничего не возвращает (нет ключего слова return)
// for Function result: 
const greetUser = () => {
    alert('Hello, nice to see you!');
};
// **** Array Type
let list = [1, 3, 4,];
let list2 = [1, 2, 3]; // Generic type
// **** Tuple Type
// Multiple lines
let x;
x = ['hello', 11];
// One line
let y = ['hello', 1];
// **** Any Type
// Any type for array
let y2 = ['hello', 42];
let y3 = [10, 'hello'];
// Any type for string
let notSure = false;
// Issue case (no error)
notSure = true; // boolean
notSure = 42; // number
notSure = 'hello'; // string
// **** Enums Type (Перечисления)
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3
// Custom index for enum elements
var Directions2;
(function (Directions2) {
    Directions2[Directions2["Up2"] = 2] = "Up2";
    Directions2[Directions2["Down2"] = 4] = "Down2";
    Directions2[Directions2["Left2"] = 6] = "Left2";
    Directions2[Directions2["Right2"] = 7] = "Right2";
})(Directions2 || (Directions2 = {}));
Directions2.Up2; // 2
Directions2.Down2; // 4
Directions2.Left2; // 6
Directions2.Right2; // 7
var links;
(function (links) {
    links["youtube"] = "https://youtube.com/";
    links["instagram"] = "https://instagram.com";
    links["facebook"] = "httos://facebook.com";
})(links || (links = {}));
// using
links.youtube;
links.instagram;
links.facebook;
// **** Never Type использоваться в 2-х случаях
// Function return Error функция возвращает ошибку и не заканчивает свое выполнение
const msg = 'hello';
const error = (msg) => {
    throw new Error(msg);
};
// Function infinite loop
const infiniteLoop = () => {
    while (true) {
    }
};
// **** Object Type
const create = (o) => { };
create({ obj: 1 });
// multiple type for one value
let id;
id = 10;
id = '42';
let id2; // Apply custom type
id = '42'; // No error, because type of '42' is a string
// Functions
// *** Object
// Simple object example
let user = {
    name: 'Nar',
    age: 32,
};
// Object type using any
let user2 = {
    name: 'Nar',
    age: 32,
};
user2 = 'test';
// Define object type
let user3 = {
    name: 'nar',
    age: 32
};
// Class
class User {
    constructor(name, age, nickName) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}
const nar = new User('Nar', 32, 'narcash');
console.log(nar);
// Class types modificators
class UserMod {
    constructor(name, age, nickName, pass) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}
const narMod = new UserMod('NarMode', 32, 'narcash', 777);
narMod.name;
narMod.pass;
class UserM2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.nickName = 'nar';
    }
    getPass() {
        return `${this.name}${UserM2.secret}`;
    }
}
UserM2.secret = 12345;
// ********** Abstact class
// abstract class UserAbstract {
//     constructor(public name: string, public age: number) { }
//     greet(): void {
//         console.log((this.name));
//     }
//     abstract getPass(): string;
// }
// class Mx extends UserAbstract {
//     name: string = 'Max';
//     constructor(age: number) {
//         super(name, age);
//     }
//     getPass(): string {
//         return `${this.age}${this.name}`
//     }
// }
