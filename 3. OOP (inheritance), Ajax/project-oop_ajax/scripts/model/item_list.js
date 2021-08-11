import Item from "./item.js";

export default class ItemList {
    constructor(items) {
        this.items = items.map(good => new Item(good));
    }

    get() {
        return this.items;
    }

    getById(id) {
        return this.items.find(item => item.id === id);
    }

    getQuantitty() {
        return this.items.reduce((acc, item) => acc + item.quantity, 0);
    }

    add(item) {
        this.items.push(item);
    }

    remove(id) {
        const index = this.items.findIndex(item => item.id === id);
        this.items.splice(index, 1);
    }
}