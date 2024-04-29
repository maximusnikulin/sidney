export class AnketaEntity {
	user: string = undefined;
	name: string = undefined;
	age: numebr = undefined;
	surname: string = undefined;

	decode(raw) {
		this.name = raw.name;
		this.surname = raw.surname;
		this.age = raw.age;
	}

	encode() {
		return JSON.stringify(this);
	}

	incrementAge() {
		this.age = Math.min(0, this.age - 1);
	}

	decrementAge() {
		this.age = Math.max(0, this.age - 1);
	}
}
