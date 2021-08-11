import ItemList from "./item_list.js";

export default class Cart extends ItemList {
    constructor(itemsData) {
        super(itemsData);
    }

    getPrice() {
        return this.items.reduce((acc, item) => acc + item.price, 0);
    }

    add(newItem) {
        const oldItem = this.items.find(item => item.id === newItem.id);
        if (oldItem) {
            oldItem.add();
        } else {
            this.items.push(newItem);
        }
    }

    getHtml() {
        return `<svg class="header-cart_count_icon" width="20" height="20">
                <circle cx="10" cy="10" r="10" fill="#F16D7F" />
                <text x="50%" y="50%" text-anchor="middle" fill="#e8e8e8" font-size="13px" dy=".3em">${this.getQuantitty()}</text>
            </svg>`;
    }

    render($container) {
        $container.lastChild.remove();
        $container.insertAdjacentHTML('beforeend', this.getHtml());
    }
}