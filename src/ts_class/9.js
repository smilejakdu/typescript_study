"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
getter 와 setter


*/
class Person {
    constructor() {
        this._name = '';
    }
    get name() {
        console.log('getter called');
        return this._name;
    }
    set name(newName) {
        if (newName.length > 10) {
            throw new Error('최대 길이를 넘었습니다.');
        }
        this._name = newName;
    }
}
let person = new Person();
person.name = 'chilken';
console.log(person.name);
// getter called
// chilken
person.name = 'asdf asdf asdf'; // 여기서 에러가 발생 
