// -- domain
import { DomainModel } from "../domain/root";
// -- useCases
import { AuthUseCase } from "./auth.useCase";

export class Application {
	async initDomainModel() {
		this.domainModel = DomainModel;
		this.domainModel.initServices();
	}

	async initInfraServices() {
		// this.analytics = new Analytics()
	}

	async initUseCases() {
		this.authUseCase = new AuthUseCase();
	}

	async run() {
		await this.initDomainModel();
		await this.initUseCases();
	}

	authUser() {
		this.authUseCase.reset();
		this.authUseCase.authSuccess();
	}
}
