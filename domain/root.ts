import { AnketaService } from "./anketa/anketa.service";
import { UserService } from "./user/user.service";

class _DomainModel {
	anketaService: AnketaService;
	userService: UserService;

	initServices() {
		this.anketaService = new AnketaService();
		this.userService = new UserService();
	}
}

export const DomainModel = new _DomainModel();
