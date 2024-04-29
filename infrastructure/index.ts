import { StorageService } from "./StorageService";

class _Infrastructure {
	storageService = new StorageService();
}

export const Infrastructure = new _Infrastructure();
