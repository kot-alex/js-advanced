import eventEmiter from "../helpers/event_emiter.js";

export default class ItemsList {
    constructor() {
        this._itemsList = [];
        this._eventEmiter = eventEmiter;
    }

    load(callback, itemClass) {
        callback().then(data => {
            this._itemsList = data.map(good => new itemClass(good));
            this._eventEmiter.emit('loaded');
        })
    }

    add(item) {
        this._itemsList.push(item);
    }

    get(id) {
        return this._itemsList.find(item => item.id == id)
    }

    getAll() {
        return this._itemsList;
    }

    remove(id) {
        this._itemsList = this._itemsList.filter(item => item.id !== id);
    }
}