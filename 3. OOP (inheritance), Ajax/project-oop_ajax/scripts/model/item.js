import id_generator from "../utilities/id_generator.js";

export default class Item {
    constructor({ image, title, description, price }) {
        this.id = id_generator();
        this.image = image;
        this.title = title;
        this.description = description;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}