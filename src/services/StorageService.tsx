import { Storage } from '@ionic/storage';

class StorageService {
    private storage;
    private static instance: StorageService;

    private constructor() {
        this.storage = new Storage();
        this.storage.create()
    }

    public static getInstance(): StorageService {
        if (!StorageService.instance) {
            StorageService.instance = new StorageService();
        }
        return StorageService.instance;
    }

    async setData(key: string, value: object) {
        const res = await this.storage.set(key, value);
        return res;
    }

    async getData(key: string) {
        const keyVal = await this.storage.get(key);
        return keyVal;
    }
}

export default StorageService;