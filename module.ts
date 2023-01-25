// Type Interface
interface IUser {
    name: string,
    age?: number
}

const narMir: IUser = {
    name: 'Nari',
}

// Generics
// ES6
const getter = <T>(data: T): T => data;

// ES5
function getter2<T>(data: T): T {
    return data;
}
// Generic class
class UserG<T> {
    constructor(public name: T, public age: T) { }

    public getPass(): string {
        return `${this.name}${this.age}`
    }
}
const nari = new UserG('Nar', '32');
const san = new UserG(32, 32);

// Specify Generic 
class UserGen<T, K extends number>{
    constructor(public name: T, public age: K) { }

    public getPass(): string {
        return `${this.name}${this.age}`
    }

    public getSecret(): number {
        return this.age ** 2;
    }
}
const narim = new UserGen('narin', 32)