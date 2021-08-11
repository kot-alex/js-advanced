import eventEmiter from "./helpers/event_emiter.js";
import Cart from "./model/cart.js"
import Showcase from "./model/showcase.js";
import ItemInCart from "./model/item_in_cart.js";
import CardView from "./view/card_view.js"
import CartIconView from "./view/cart_icon_view.js"


export default {
    _eventEmiter: eventEmiter,
    _showcaseModel: new Showcase(),
    _cartModel: new Cart(),

    init() {
        this._eventEmiter.addListener('added', this._renderCart.bind(this));
        this._eventEmiter.addListener('removed', this._renderCart.bind(this));
        this._eventEmiter.addListener('loaded', this._renderCart.bind(this));
        this._eventEmiter.addListener('loaded', this._renderShowcase.bind(this));
        this._cartModel.load();
        this._showcaseModel.load();
    },

    _addToCart(id) {
        const item = new ItemInCart(this._showcaseModel.get(id));
        this._cartModel.add(item);
    },

    _removeFromCart(id) {
        this._cartModel.remove(id)
    },

    _renderCart() {
        const $cartIcon = document.querySelector('.header-link-cart');
        new CartIconView(this._cartModel.getCount()).render($cartIcon, 'beforeend');
    },

    _renderShowcase() {
        const $product = document.querySelector('.products-items');
        $product.textContent = '';

        this._showcaseModel.getAll().forEach(
            item => {
                const card = new CardView(item);
                card.render($product, 'beforeend');
                card.setAddHandler(this._addToCart.bind(this));
            }
        )
    }
}