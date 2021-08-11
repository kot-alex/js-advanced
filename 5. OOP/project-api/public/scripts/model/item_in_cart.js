import Item from "./item.js";

export default class ItemInCart extends Item {
    constructor(itemData, quantity = 1) {
        super(itemData);

        this._quantity = quantity;
    }

    get price() { return this._price * this._quantity }
    get quantity() { return this._quantity }

    add() {
        this._quantity++;
    }

    remove() {
        this._quantity--;
        if (this._quantity == 0) {
            this._eventEmiter.emit('removeAll', this._id)
        }
    }
}