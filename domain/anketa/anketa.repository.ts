import { AnketaEntity } from "./anketa.entity";
import { Infrastructure } from "../../infrastructure/index";

export class AnketaLocalStorageRepository implements AnketaRepository {
	storageService = Infrastructure.storageService;
	getAll(id: string) {
		return Infrastructure.storageService.get("anketas");
	}

	replaceAnketa(val: AnketaEntity) {
		// const anketas = this.getAll().map((el) => {
		// 	if (el.id === val.id) {
		// 		return val.encode()
		// 	}
		// 	return el
		// })
		// storageService.set("anketas", JSON.stringify(anketas));
		// return Promise.resolve()
	}
}

export class AnketaDbRepository implements AnketaRepository {
	getAll() {
		throw new Error("method not implemented");
	}

	saveAnketa(val: AnketaEntity) {
		return new Promise((resolve) =>
			setTimeout(() => resolve({ status: true }), 1000)
		);
	}
}
