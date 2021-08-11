export default class Item {
    constructor({ id, image, title, description, price }) {
        this._id = id;
        this._image = image;
        this._title = title;
        this._description = description;
        this._price = price;
    }

    get id() { return this._id }
    get image() { return this._image }
    get title() { return this._title }
    get description() { return this._description }
    get price() { return this._price }
}