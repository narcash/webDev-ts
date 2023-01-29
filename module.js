"use strict";
const narMir = {
    name: 'Nari',
};
// Generics
// ES6
const getter = (data) => data;
// ES5
function getter2(data) {
    return data;
}
// Generic class
class UserG {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
}
const nari = new UserG('Nar', '32');
const san = new UserG(32, 32);
// Specify Generic 
class UserGen {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
    getSecret() {
        return this.age ** 2;
    }
}
const narim = new UserGen('narin', 32);
