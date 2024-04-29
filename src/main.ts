import { Application } from "../application";

class _Main {
	async bootstrap() {
		this.application = new Application();
		await this.application.run();
		// this.coordinator()
		// initother()
		return this;
	}
}

export const Main = new _Main();

window.Main = Main;
