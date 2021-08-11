import id_generator from "../utilities/id_generator.js";

export default class Item {
    constructor({ image, title, description, price, discount }) {
        this.id = id_generator();
        this.image = image;
        this.title = title;
        this.description = description;
        this._price = price;
        this._discount = discount;
    }

    getPrice() {
        return this._price - this._discount;
    }
}