import ItemsList from "./items_list.js";
import dataHandler from "../helpers/data_handler.js";
import ItemInCart from "./item_in_cart.js";

export default class Cart extends ItemsList {
    constructor() {
        super();
    }

    load() {
        super.load(dataHandler.getCart.bind(dataHandler), ItemInCart)
    }

    getCount() {
        console.log(this._itemsList);
        return this._itemsList.reduce((acc, item) => acc + item.quantity, 0);
    }

    add(item) {
        const findItem = this._itemsList.find(good => good.id == item.id);
        if (findItem) {
            findItem.add();
        } else {
            super.add(item);
        }
        this._eventEmiter.emit('added', item.id);
    }

    decreaseQuantity(id) {
        const findItem = this._itemsList.find(good => good.id == id);
        if (findItem) {
            if (findItem.quantity > 1) {
                findItem.remove();
            } else {
                super.remove(id);
            }
        }
        this._eventEmiter.emit('removed', id);
    }
}