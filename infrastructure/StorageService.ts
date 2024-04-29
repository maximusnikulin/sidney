export class StorageService {
	setString(key: string, value: any) {
		LocalStorage.set(key, value);
	}

	getArray(key: string) {
		return JSON.parse(LocalStorage.get(key, value) || []);
	}

	getObject(key: string) {
		return JSON.parse(LocalStorage.get(key, value) || {});
	}
}
