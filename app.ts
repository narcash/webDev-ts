// ****** Basic Types
// **** Boolean Type
let isCompleted: boolean = false;

// **  isCompleted = 11  // Type 'number' is not assignable to type 'boolean'.

// **** Number Type
const decimal: number = 2;
const integer: number = 2.5;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const actal: number = 0o744;

// **** String Type for simple string
const userName: string = 'Nar';

//  String Type for template string
const sentence: string = `Hello, my name is ${userName}!`;

// **** Null & Undefined
const u: undefined = undefined;
const n: null = null;

// Void Type ничего не возвращает (нет ключего слова return)
// for Function result: 
const greetUser = (): void => {
    alert('Hello, nice to see you!')
};

// **** Array Type
let list: number[] = [1, 3, 4,];
let list2: Array<number> = [1, 2, 3];  // Generic type

// **** Tuple Type
// Multiple lines
let x: [string, number];
x = ['hello', 11];

// One line
let y: [string, number] = ['hello', 1];

// **** Any Type
// Any type for array
let y2: [any, any] = ['hello', 42];
let y3: Array<any> = [10, 'hello'];

// Any type for string
let notSure: any = false;

// Issue case (no error)
notSure = true; // boolean
notSure = 42;   // number
notSure = 'hello' // string

// **** Enums Type (Перечисления)
enum Directions {
    Up,
    Down,
    Left,
    Right
}
Directions.Up;      // 0
Directions.Down;    // 1
Directions.Left;    // 2
Directions.Right;   // 3

// Custom index for enum elements
enum Directions2 {
    Up2 = 2,
    Down2 = 4,
    Left2 = 6,
    Right2
}
Directions2.Up2;        // 2
Directions2.Down2;      // 4
Directions2.Left2;      // 6
Directions2.Right2;     // 7

enum links {
    youtube = 'https://youtube.com/',
    instagram = 'https://instagram.com',
    facebook = 'httos://facebook.com'
}
// using
links.youtube;
links.instagram;
links.facebook;
// **** Never Type использоваться в 2-х случаях
// Function return Error функция возвращает ошибку и не заканчивает свое выполнение
const msg = 'hello';
const error = (msg: string): never => {
    throw new Error(msg)
};

// Function infinite loop
const infiniteLoop = (): never => {
    while (true) {
    }
};


// **** Object Type
const create = (o: object | null): void => { };
create({ obj: 1 });

// multiple type for one value
let id: number | string;
id = 10;
id = '42'

// **** Type
type Name = string; // Custom type creation
let id2: Name;      // Apply custom type

id = '42';          // No error, because type of '42' is a string

// Functions

// *** Object

// Simple object example
let user = {
    name: 'Nar',
    age: 32,
};
// Object type using any
let user2: any = {
    name: 'Nar',
    age: 32,
};
user2 = 'test';

// Define object type
let user3: { name: string, age: number } = {
    name: 'nar',
    age: 32
};
// Class

class User {

    constructor(
        public name: string,
        public age: number,
        public nickName: string
    ) { }
}
const nar = new User('Nar', 32, 'narcash');
console.log(nar);

// Class types modificators
class UserMod {
    public name!: string;
    private nickName!: string;
    protected age!: number;
    readonly pass!: number;

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}
const narMod = new UserMod('NarMode', 32, 'narcash', 777)
narMod.name;
narMod.pass;

class UserM2 {

    private nickName: string = 'nar'
    static secret = 12345;
    constructor(public name: string, public age: number) { }


    getPass(): string {
        return `${this.name}${UserM2.secret}`
    }
}
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

