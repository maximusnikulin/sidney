import { DomainModel } from "../domain/root";

export class AuthUseCase {
	get userService() {
		return DomainModel.userService;
	}

	authSuccess() {
		this.userService.setUser({
			name: "Max",
			id: 1
		});
	}

	reset() {
		// this.userService.user = undefined;
	}
}
