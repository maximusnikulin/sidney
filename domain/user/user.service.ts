import { DomainModel } from "../root";
import { UserEntity } from "./user.entity";

export class UserService {
	user: UserEntity;

	get anketasService() {
		return DomainModel.anketasService;
	}

	get anketasCount() {
		return (
			this.anketasService.getAll().find((el) => el.userId === this.user.id) ??
			[]
		).length;
	}

	persistUser() {
		this.user = new UserEntity().decode(
			Infrastructure.StorageService.get("user")
		);
	}

	setUser(raw) {
		this.user = new UserEntity().decode(raw);
	}
}
