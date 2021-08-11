import Item from "./item.js";

export default class ItemList {
    constructor(items) {
        this.items = items.map(good => new Item(good));
    }

    get() {
        return this.items;
    }

    add(item) {
        this.items.push(item);
    }

    remove(id) {
        const index = this.items.findIndex(item => item.id === id);
        this.items.splice(index, 1);
    }

    totalListPrice() {
        let totalSum = 0;
        for (let item of this.items) {
            totalSum += item.getPrice();
        } return totalSum;
    }
}