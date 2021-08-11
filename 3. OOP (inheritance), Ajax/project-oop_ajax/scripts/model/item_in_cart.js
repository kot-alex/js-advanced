import Item from "./item.js";

export default class ItemInCart extends Item {
    constructor({ image, title, description, _price, id }, quantity = 1) {
        super({ image, title, description, price: _price });
        this.id = id;
        this.quantity = quantity;
    }

    get price() {
        return this._price * this.quantity;
    }

    add() {
        this.quantity++;
    }
}