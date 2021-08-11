import ItemsList from "./items_list.js";
import dataHandler from "../helpers/data_handler.js";
import Item from "./item.js";

export default class Showcase extends ItemsList {
    constructor() {
        super();
    }

    load() {
        super.load(dataHandler.getCatalog.bind(dataHandler), Item)
    }
}