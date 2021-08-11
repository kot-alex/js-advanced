export default class CartIconView {
    constructor(itemsCount) {
        this._data = itemsCount;
    }

    getHtml() {
        return `<svg class="header-cart_count_icon" width="20" height="20">
        <circle cx="10" cy="10" r="10" fill="#F16D7F" />
        <text x="50%" y="50%" text-anchor="middle" fill="#e8e8e8" font-size="13px" dy=".3em">${this._data}</text>
    </svg>`
    }

    render($container, target = 'beforeend') {
        if (this._data > 0) {
            $container.lastChild.remove();
            $container.insertAdjacentHTML(target, this.getHtml());
        }
    }
}