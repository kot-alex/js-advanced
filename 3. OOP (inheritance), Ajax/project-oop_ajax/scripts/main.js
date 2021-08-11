import API from "./API.js";
import Card from "./draw/card.js";
import Cart from "./model/cart.js"
import ItemInCart from "./model/item_in_cart.js";
import ItemList from "./model/item_list.js";

function addToCart(id) {
    const item = itemList.getById(id);
    cart.add(new ItemInCart(item));
    cart.render($cartIcon);
    console.log(cart);
}

const itemList = new ItemList(API.fetch());
const cart = new Cart([]);

const $product = document.querySelector('.products-items');

const products = itemList.get().map(item => new Card(item));

const $cartIcon = document.querySelector('.header-link-cart');

products.forEach(card => {
    card.setAddHandler(addToCart);
    card.render($product);
});