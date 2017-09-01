/** thanks jake https://github.com/jakearchibald/idb-keyval */

var keyValStore;

export const DB_NAME = 'workout-timer';
export const STORE_NAME = 'workouts';

type TransactionType = 'readonly' | 'readwrite';

export class KeyValStore {
  get db(): Promise<IDBDatabase> {
    if (this._db == null)
      this._db = new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onerror = () => reject(request.error);
        // TODO: actually handle upgrade
        request.onupgradeneeded = () => {
          request.result.createObjectStore(STORE_NAME);
        }
        request.onsuccess = () => {
          resolve(request.result);
        }
      });
    return this._db;
  }

  transact(type: TransactionType, callback: () => undefined):
      Promise<IDBTransaction> {
    return this.db.then(db => new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, type);
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
      callback(transaction.objectStore(STORE_NAME));
    }))
  }

  get(key: string): Promise<IDBRequest> {
    var req;
    return this.transact('readonly', (store: IDBObjectStore) => {
        req = store.get(key);
      })
      .then(() => req.result);
  }

  set(key: string, value: any): Promise<IDBRequest> {
    return this.transact('readwrite', (store: IDBObjectStore) =>
        store.put(value, key));
  }

  keys(): Promise<Array<string>> {
    const keys = [];
    return this.transact('readonly', (store: IDBObjectStore) => {
        const cursor = (store.openKeyCursor || store.openCursor).call(store);
        cursor.onsuccess = () => {
          if (!cursor.result) return;
          keys.push(cursor.result.key);
          cursor.result.continue();
        };
      })
      .then(() => keys);
  }
}

export default (): KeyValStore => keyValStore == null?
  keyValStore = new KeyValStore() : keyValStore;
