import API from "./API.js";
import Card from "./draw/card.js";
import ItemList from "./model/item_list.js";

const itemList = new ItemList(API.fetch());

const $product = document.querySelector('.products-items');

const products = itemList.get().map(item => new Card(item));

products.forEach($card => {
    $card.render($product);
});