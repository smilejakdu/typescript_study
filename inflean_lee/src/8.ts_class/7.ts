export { };

/*
	readonly 읽기 전용 변수로 만들수있는데
	읽기 전용 변수로 만들게 되면 , 수정할 수가 없다.
	readonly 는 접근제한자와 같이 사용할수가 있다.
*/

class Person {
	readonly name: string;
	private readonly age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

const person = new Person('chilken', 23);
person.name = 'chilken2';
