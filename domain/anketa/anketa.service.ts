import {
	AnketaLocalStorageRepository,
	AnketaDbRepository
} from "./anketa.repository";

export class AnketaService {
	constructor() {
		this.persistStorage = new AnketaLocalStorageRepository();
		this.dbStorage = new AnketaDbRepository();
	}

	getLocal() {
		return this.persistStorage.getAll();
	}

	getAnketasWithUser() {}
}
