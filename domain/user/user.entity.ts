import {DomainSercices} "../root";
class UserEntity {
	id: string;
	name: string;
	constructor() {
		this.anketasService = window.Main.application.domainServices.anketaService;
	}

	get anketasService() {
		return DomainServices.anketasService;
	}

	decode(raw) {
		this.id = raw.id;
		this.name = raw.name;
	}
}
