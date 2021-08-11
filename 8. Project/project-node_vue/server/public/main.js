Vue.component('site-header', {
    template: `<header class="header">
    <div class="container header-container">
        <div class="header-left">

            <a @click="logoClickHandler" class="header-link header-logo_icon">

                <img src="images/icons/logo.png" alt="logo">
            </a>
            <a href="#" class="header-link header-search_icon">
                <img src="images/icons/search.svg" alt="search">
            </a>
        </div>
        <div class="header-right">
            <input type="checkbox" id="menuToggle">
            <label class="header-link header-menu_icon" for="menuToggle"><img src="images/icons/menu.svg"
                    alt="menu"></label>
            <nav class="header-menu">
                <div class="header-menu-overlay">
                    <label class="header-menu-close" for="menuToggle"><svg width="12" height="12"
                            viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" />
                        </svg></label>
                    <h2 class="header-menu-title">MENU</h2>
                    <h3 class="header-menu-section">MAN</h3>
                    <ul class="header-menu-list">
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Bags</a></li>
                        <li><a href="#">Denim</a></li>
                        <li><a href="#">T-Shirts</a></li>
                    </ul>
                    <h3 class="header-menu-section">WOMAN</h3>
                    <ul class="header-menu-list">
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Jackets & Coats</a></li>
                        <li><a href="#">Polos</a></li>
                        <li><a href="#">T-Shirts</a></li>
                        <li><a href="#">Shirts</a></li>
                    </ul>
                    <h3 class="header-menu-section">KIDS</h3>
                    <ul class="header-menu-list">
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Jackets & Coats</a></li>
                        <li><a href="#">Polos</a></li>
                        <li><a href="#">T-Shirts</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">Bags</a></li>
                    </ul>
                    <a href="registration.html" class="header-link">
                        <svg class="header-menu-account_icon" width="29" height="29" viewBox="0 0 29 29"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z" />
                        </svg>
                    </a>

                    <a @click="cartBtnHandler" class="header-link header-menu-cart">
                    
                        <svg class="header-menu-cart_icon" width="32" height="29" viewBox="0 0 32 29"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M26.2 29C25.5522 28.9738 24.9405 28.6948 24.4962 28.2227C24.0519 27.7506 23.8104 27.1232 23.8235 26.475C23.8366 25.8269 24.1033 25.2097 24.5663 24.7559C25.0293 24.3022 25.6518 24.048 26.3 24.048C26.9483 24.048 27.5707 24.3022 28.0337 24.7559C28.4967 25.2097 28.7634 25.8269 28.7765 26.475C28.7896 27.1232 28.5481 27.7506 28.1038 28.2227C27.6594 28.6948 27.0478 28.9738 26.4 29H26.2ZM6.75195 26.32C6.75195 25.79 6.90913 25.2718 7.20361 24.8311C7.4981 24.3904 7.91667 24.0469 8.40637 23.844C8.89608 23.6412 9.43497 23.5881 9.95483 23.6915C10.4747 23.7949 10.9522 24.0502 11.327 24.425C11.7018 24.7998 11.9571 25.2773 12.0605 25.7972C12.164 26.317 12.1108 26.8559 11.908 27.3456C11.7051 27.8353 11.3616 28.2539 10.9209 28.5483C10.4802 28.8428 9.96206 29 9.43201 29C9.0799 29.0003 8.73114 28.9311 8.40576 28.7966C8.08038 28.662 7.78472 28.4646 7.53564 28.2158C7.28657 27.9669 7.08903 27.6713 6.95422 27.3461C6.81942 27.0208 6.75 26.6721 6.75 26.32H6.75195ZM10.552 20.686C10.2926 20.6868 10.04 20.6024 9.83313 20.4457C9.62629 20.2891 9.47661 20.0689 9.40698 19.819L4.57397 2.36401H1.18103C0.867544 2.36401 0.566883 2.23947 0.345215 2.01781C0.123547 1.79614 -0.000976562 1.49549 -0.000976562 1.18201C-0.000976562 0.868519 0.123547 0.567873 0.345215 0.346205C0.566883 0.124537 0.867544 5.81268e-06 1.18103 5.81268e-06H5.46204C5.72153 -0.00080736 5.97406 0.0837201 6.18079 0.240568C6.38751 0.397416 6.53686 0.617884 6.60596 0.868006L11.439 18.323H24.6169L29 8.27501H14.4C14.2418 8.27961 14.0844 8.25242 13.9369 8.19507C13.7894 8.13771 13.6549 8.05134 13.5414 7.94108C13.4279 7.83082 13.3376 7.69891 13.276 7.55315C13.2144 7.40739 13.1826 7.25075 13.1826 7.0925C13.1826 6.93426 13.2144 6.77762 13.276 6.63186C13.3376 6.4861 13.4279 6.35419 13.5414 6.24393C13.6549 6.13367 13.7894 6.0473 13.9369 5.98994C14.0844 5.93259 14.2418 5.90541 14.4 5.91001H30.813C31.0087 5.90996 31.2013 5.95866 31.3734 6.05172C31.5456 6.14478 31.6918 6.27926 31.799 6.44301C31.9068 6.60729 31.9724 6.79569 31.9899 6.99145C32.0073 7.18721 31.9762 7.38424 31.899 7.565L26.494 19.977C26.4016 20.1876 26.25 20.3668 26.0575 20.4927C25.865 20.6186 25.64 20.6858 25.41 20.686H10.552Z" />
                        </svg>

                        <count-icon v-if="itemsQuantity>0" v-bind:items-quantity="itemsQuantity"></count-icon>

                    </a>
                </div>
            </nav>
            <a href="registration.html" class="header-link">
                <svg class="header-account_icon" width="29" height="29" viewBox="0 0 29 29"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z" />
                </svg>
            </a>
            <a @click="cartBtnHandler" class="header-link header-cart">
                <svg class="header-cart_icon" width="32" height="29" viewBox="0 0 32 29"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.2 29C25.5522 28.9738 24.9405 28.6948 24.4962 28.2227C24.0519 27.7506 23.8104 27.1232 23.8235 26.475C23.8366 25.8269 24.1033 25.2097 24.5663 24.7559C25.0293 24.3022 25.6518 24.048 26.3 24.048C26.9483 24.048 27.5707 24.3022 28.0337 24.7559C28.4967 25.2097 28.7634 25.8269 28.7765 26.475C28.7896 27.1232 28.5481 27.7506 28.1038 28.2227C27.6594 28.6948 27.0478 28.9738 26.4 29H26.2ZM6.75195 26.32C6.75195 25.79 6.90913 25.2718 7.20361 24.8311C7.4981 24.3904 7.91667 24.0469 8.40637 23.844C8.89608 23.6412 9.43497 23.5881 9.95483 23.6915C10.4747 23.7949 10.9522 24.0502 11.327 24.425C11.7018 24.7998 11.9571 25.2773 12.0605 25.7972C12.164 26.317 12.1108 26.8559 11.908 27.3456C11.7051 27.8353 11.3616 28.2539 10.9209 28.5483C10.4802 28.8428 9.96206 29 9.43201 29C9.0799 29.0003 8.73114 28.9311 8.40576 28.7966C8.08038 28.662 7.78472 28.4646 7.53564 28.2158C7.28657 27.9669 7.08903 27.6713 6.95422 27.3461C6.81942 27.0208 6.75 26.6721 6.75 26.32H6.75195ZM10.552 20.686C10.2926 20.6868 10.04 20.6024 9.83313 20.4457C9.62629 20.2891 9.47661 20.0689 9.40698 19.819L4.57397 2.36401H1.18103C0.867544 2.36401 0.566883 2.23947 0.345215 2.01781C0.123547 1.79614 -0.000976562 1.49549 -0.000976562 1.18201C-0.000976562 0.868519 0.123547 0.567873 0.345215 0.346205C0.566883 0.124537 0.867544 5.81268e-06 1.18103 5.81268e-06H5.46204C5.72153 -0.00080736 5.97406 0.0837201 6.18079 0.240568C6.38751 0.397416 6.53686 0.617884 6.60596 0.868006L11.439 18.323H24.6169L29 8.27501H14.4C14.2418 8.27961 14.0844 8.25242 13.9369 8.19507C13.7894 8.13771 13.6549 8.05134 13.5414 7.94108C13.4279 7.83082 13.3376 7.69891 13.276 7.55315C13.2144 7.40739 13.1826 7.25075 13.1826 7.0925C13.1826 6.93426 13.2144 6.77762 13.276 6.63186C13.3376 6.4861 13.4279 6.35419 13.5414 6.24393C13.6549 6.13367 13.7894 6.0473 13.9369 5.98994C14.0844 5.93259 14.2418 5.90541 14.4 5.91001H30.813C31.0087 5.90996 31.2013 5.95866 31.3734 6.05172C31.5456 6.14478 31.6918 6.27926 31.799 6.44301C31.9068 6.60729 31.9724 6.79569 31.9899 6.99145C32.0073 7.18721 31.9762 7.38424 31.899 7.565L26.494 19.977C26.4016 20.1876 26.25 20.3668 26.0575 20.4927C25.865 20.6186 25.64 20.6858 25.41 20.686H10.552Z" />
                </svg>

                <count-icon v-if="itemsQuantity>0" v-bind:items-quantity="itemsQuantity"></count-icon>

            </a>
        </div>
    </div>
</header>`,
    methods: {
        cartBtnHandler() {
            this.$emit('go-to', 'cart')
        },
        logoClickHandler() {
            this.$emit('go-to', 'index')
        }
    },
    props: ['items-quantity']
})

Vue.component('count-icon', {
    template: `<svg class="header-cart_count_icon" width="20" height="20">
    <circle cx="10" cy="10" r="10" fill="#F16D7F" />
    <text x="50%" y="50%" text-anchor="middle" fill="#e8e8e8" font-size="13px" dy=".3em">{{ itemsQuantity }}</text>
</svg>`,
    props: ['items-quantity']
})

Vue.component('breadcrumb', {
    template: `<section class="breadcrumb">
    <div class="container breadcrumb-container">
        <h1 class="breadcrumb-heading">SHOPPING CART</h1>
    </div>
</section>`
})

Vue.component('promo', {
    template: `<section class="promo">
    <div class="container promo-container">
        <h1 class="promo-heading">
            <span class="promo-heading-brand">THE BRAND</span><br>
            <span class="promo-heading-lux">OF LUXURIOUS</span>
            <span class="promo-heading-fashion">FASHION</span>
        </h1>
    </div>
</section>`
})

Vue.component('categories', {
    template: `<section class="categories container">
    <h2 class="hidden">categories of products</h2>
    <div class="categories-card categories-women">
        <span class="categories-text">30% OFF</span>
        <span class="categories-big_text">FOR WOMEN</span>
    </div>
    <div class="categories-card categories-men">
        <span class="categories-text">HOT DEAL</span>
        <span class="categories-big_text">FOR MEN</span>
    </div>
    <div class="categories-card categories-kids">
        <span class="categories-text">NEW ARRIVALS</span>
        <span class="categories-big_text">FOR KIDS</span>
    </div>
    <div class="categories-card categories-accs">
        <span class="categories-text">LUXURIOUS & TRENDY</span>
        <span class="categories-big_text">ACCESORIES</span>
    </div>
</section>`
})

Vue.component('items-list', {
    template: `<section class="products container">
    <h2 class="products-heading">Featured Items</h2>
    <p class="products-text">Shop for items based on what we featured during this week</p>
    <section class="products-items">

    <card v-for="item of catalog" :key="item.id" v-bind:item="item" @add-to-cart="addToCartHandler"></card>

    </section>
    <a class="products-all" href="catalog.html">Browse All Products</a>
</section>`,
    methods: {
        addToCartHandler(id) {
            this.$emit('add-to-cart', id)
        }
    },
    props: ['catalog']
})

Vue.component('card', {
    template: `<figure class="products-card" :id="'card-' + item.id">
    <div class="products-card-image">
        <img class="products-card-img" :src="'images/products/' + item.image + '.jpg'" alt="product">
        <div class="products-card-overlay">

            <button @click="addToCartHandler" class="products-card-overlay-button" type="button">
            
            <svg
                class="products-card-overlay-icon" width="26" height="24" viewBox="0 0 32 29"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M26.2 29C25.5522 28.9738 24.9405 28.6948 24.4962 28.2227C24.0519 27.7506 23.8104 27.1232 23.8235 26.475C23.8366 25.8269 24.1033 25.2097 24.5663 24.7559C25.0293 24.3022 25.6518 24.048 26.3 24.048C26.9483 24.048 27.5707 24.3022 28.0337 24.7559C28.4967 25.2097 28.7634 25.8269 28.7765 26.475C28.7896 27.1232 28.5481 27.7506 28.1038 28.2227C27.6594 28.6948 27.0478 28.9738 26.4 29H26.2ZM6.75195 26.32C6.75195 25.79 6.90913 25.2718 7.20361 24.8311C7.4981 24.3904 7.91667 24.0469 8.40637 23.844C8.89608 23.6412 9.43497 23.5881 9.95483 23.6915C10.4747 23.7949 10.9522 24.0502 11.327 24.425C11.7018 24.7998 11.9571 25.2773 12.0605 25.7972C12.164 26.317 12.1108 26.8559 11.908 27.3456C11.7051 27.8353 11.3616 28.2539 10.9209 28.5483C10.4802 28.8428 9.96206 29 9.43201 29C9.0799 29.0003 8.73114 28.9311 8.40576 28.7966C8.08038 28.662 7.78472 28.4646 7.53564 28.2158C7.28657 27.9669 7.08903 27.6713 6.95422 27.3461C6.81942 27.0208 6.75 26.6721 6.75 26.32H6.75195ZM10.552 20.686C10.2926 20.6868 10.04 20.6024 9.83313 20.4457C9.62629 20.2891 9.47661 20.0689 9.40698 19.819L4.57397 2.36401H1.18103C0.867544 2.36401 0.566883 2.23947 0.345215 2.01781C0.123547 1.79614 -0.000976562 1.49549 -0.000976562 1.18201C-0.000976562 0.868519 0.123547 0.567873 0.345215 0.346205C0.566883 0.124537 0.867544 5.81268e-06 1.18103 5.81268e-06H5.46204C5.72153 -0.00080736 5.97406 0.0837201 6.18079 0.240568C6.38751 0.397416 6.53686 0.617884 6.60596 0.868006L11.439 18.323H24.6169L29 8.27501H14.4C14.2418 8.27961 14.0844 8.25242 13.9369 8.19507C13.7894 8.13771 13.6549 8.05134 13.5414 7.94108C13.4279 7.83082 13.3376 7.69891 13.276 7.55315C13.2144 7.40739 13.1826 7.25075 13.1826 7.0925C13.1826 6.93426 13.2144 6.77762 13.276 6.63186C13.3376 6.4861 13.4279 6.35419 13.5414 6.24393C13.6549 6.13367 13.7894 6.0473 13.9369 5.98994C14.0844 5.93259 14.2418 5.90541 14.4 5.91001H30.813C31.0087 5.90996 31.2013 5.95866 31.3734 6.05172C31.5456 6.14478 31.6918 6.27926 31.799 6.44301C31.9068 6.60729 31.9724 6.79569 31.9899 6.99145C32.0073 7.18721 31.9762 7.38424 31.899 7.565L26.494 19.977C26.4016 20.1876 26.25 20.3668 26.0575 20.4927C25.865 20.6186 25.64 20.6858 25.41 20.686H10.552Z" />
            </svg>Add to Cart</button>
        </div>
    </div>
    <figcaption class="products-card-info">
        <a class="products-card-link" href="product.html">
            <h3 class="products-card-link-heading">{{ item.title }}</h3>
            <p class="products-card-link-text">{{ item.description }}</p>
        </a>
        <p class="products-card-pricetag">$ {{ item.price }}</p>
    </figcaption>
</figure>`,
    methods: {
        addToCartHandler() {
            this.$emit('add-to-cart', this.item.id)
        }
    },
    props: ['item']
})

Vue.component('benefits', {
    template: `<section class="benefits">
    <h2 class="hidden">company's advantages</h2>
    <div class="container benefits-container">
        <div class="benefits-item">
            <img src="images/icons/van.svg" alt="delivery">
            <h3 class="benefits-heading">Free Delivery</h3>
            <p class="benefits-text">Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.</p>
        </div>
        <div class="benefits-item">
            <img src="images/icons/percentage.svg" alt="discounts">
            <h3 class="benefits-heading">Sales & discounts</h3>
            <p class="benefits-text">Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.</p>
        </div>
        <div class="benefits-item">
            <img src="images/icons/crown.svg" alt="assurance">
            <h3 class="benefits-heading">Quality assurance</h3>
            <p class="benefits-text">Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.</p>
        </div>
    </div>
</section>`
})

Vue.component('feedback', {
    template: `<aside class="feedback">
    <div class="container feedback-container">
        <section class="feedback-reviews">
            <h2 class="hidden">user review</h2>
            <img class="feedback-userpic" src="images/feedback-userpic.png" alt="avatar">
            <p class="feedback-reviews-text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span
                    class="feedback-reviews-text-italic">a pulvinar
                    purus
                    condimentum“</span></p>
        </section>
        <section class="feedback-subscribe">
            <h2 class="feedback-subscribe-heading">SUBSCRIBE</h2>
            <span class="feedback-subscribe-text">FOR OUR NEWSLETTER AND
                PROMOTION</span>
            <form class="feedback-subscribe-form" action="#">
                <input class="feedback-subscribe-email" type="email" placeholder="Enter Your Email"
                    minlength="6" maxlength="20" required>
                <input class="feedback-subscribe-button" type="submit" value="Subscribe">
            </form>
        </section>
    </div>
</aside>`
})

Vue.component('site-footer', {
    template: `<footer class="footer">
    <div class="container footer-container">
        <section class="copyright">
            <h2 class="hidden">copyright</h2>
            <p class="footer-copy">&copy;&nbsp;2021&nbsp;Brand. All Rights Reserved.</p>
        </section>
        <section class="footer-social">
            <h2 class="hidden">our social networks</h2>
            <a href="#" class="footer-social-link">
                <svg class="social-icon" width="9" height="15" viewBox="0 0 9 15"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.08836 8.28L8.50686 5.61602H5.89022V3.88729C5.89022 3.15847 6.25574 2.44806 7.42765 2.44806H8.61722V0.179975C8.61722 0.179975 7.53772 0 6.50561 0C4.35073 0 2.9422 1.27593 2.9422 3.5857V5.61602H0.546875V8.28H2.9422V14.72H5.89022V8.28H8.08836Z" />
                </svg>
            </a>
            <a href="#" class="footer-social-link">
                <svg class="social-icon" width="16" height="15" viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.13897 3.68159C6.02383 3.68159 4.31774 5.38491 4.31774 7.49663C4.31774 9.60835 6.02383 11.3117 8.13897 11.3117C10.2541 11.3117 11.9602 9.60835 11.9602 7.49663C11.9602 5.38491 10.2541 3.68159 8.13897 3.68159ZM8.13897 9.9769C6.77211 9.9769 5.65467 8.8646 5.65467 7.49663C5.65467 6.12866 6.76878 5.01636 8.13897 5.01636C9.50915 5.01636 10.6233 6.12866 10.6233 7.49663C10.6233 8.8646 9.50583 9.9769 8.13897 9.9769ZM13.0078 3.52554C13.0078 4.02026 12.6087 4.41538 12.1165 4.41538C11.621 4.41538 11.2252 4.01694 11.2252 3.52554C11.2252 3.03413 11.6243 2.63569 12.1165 2.63569C12.6087 2.63569 13.0078 3.03413 13.0078 3.52554ZM15.5386 4.42866C15.4821 3.23667 15.2094 2.18081 14.3347 1.31089C13.4634 0.440967 12.4058 0.168701 11.2119 0.108936C9.9814 0.039209 6.29321 0.039209 5.0627 0.108936C3.8721 0.165381 2.81453 0.437646 1.93987 1.30757C1.06522 2.17749 0.795836 3.23335 0.735973 4.42534C0.666134 5.65386 0.666134 9.33608 0.735973 10.5646C0.79251 11.7566 1.06522 12.8124 1.93987 13.6824C2.81453 14.5523 3.86878 14.8246 5.0627 14.8843C6.29321 14.9541 9.9814 14.9541 11.2119 14.8843C12.4058 14.8279 13.4634 14.5556 14.3347 13.6824C15.2061 12.8124 15.4788 11.7566 15.5386 10.5646C15.6085 9.33608 15.6085 5.65718 15.5386 4.42866ZM13.949 11.8828C13.6895 12.5335 13.1874 13.0349 12.5322 13.2972C11.5511 13.6857 9.22314 13.596 8.13897 13.596C7.05479 13.596 4.72348 13.6824 3.74573 13.2972C3.09389 13.0382 2.59171 12.5369 2.32898 11.8828C1.93987 10.9033 2.02967 8.57905 2.02967 7.49663C2.02967 6.41421 1.9432 4.08667 2.32898 3.1105C2.58838 2.45972 3.09056 1.95835 3.74573 1.69604C4.7268 1.30757 7.05479 1.39722 8.13897 1.39722C9.22314 1.39722 11.5545 1.31089 12.5322 1.69604C13.184 1.95503 13.6862 2.4564 13.949 3.1105C14.3381 4.08999 14.2483 6.41421 14.2483 7.49663C14.2483 8.57905 14.3381 10.9066 13.949 11.8828Z" />
                </svg>
            </a>
            <a href="#" class="footer-social-link">
                <svg class="social-icon" width="13" height="16" viewBox="0 0 13 16"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.74032 0.203125C3.55564 0.203125 0.408203 2.34063 0.408203 5.8C0.408203 8 1.63738 9.25 2.38233 9.25C2.68963 9.25 2.86655 8.3875 2.86655 8.14375C2.86655 7.85313 2.13091 7.23438 2.13091 6.025C2.13091 3.5125 4.03055 1.73125 6.4889 1.73125C8.60271 1.73125 10.1671 2.94062 10.1671 5.1625C10.1671 6.82187 9.50597 9.93437 7.36422 9.93437C6.59133 9.93437 5.93018 9.37187 5.93018 8.56563C5.93018 7.38438 6.74963 6.24062 6.74963 5.02187C6.74963 2.95312 3.835 3.32812 3.835 5.82812C3.835 6.35313 3.90018 6.93437 4.13298 7.4125C3.70463 9.26875 2.82931 12.0344 2.82931 13.9469C2.82931 14.5375 2.91311 15.1188 2.96899 15.7094C3.07452 15.8281 3.02175 15.8156 3.18316 15.7563C4.74757 13.6 4.69169 13.1781 5.3994 10.3562C5.78119 11.0875 6.76826 11.4812 7.55046 11.4812C10.8469 11.4812 12.3275 8.24688 12.3275 5.33125C12.3275 2.22813 9.66427 0.203125 6.74032 0.203125Z" />
                </svg>
            </a>
            <a href="#" class="footer-social-link">
                <svg class="social-icon" width="17" height="14" viewBox="0 0 17 14"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.417 3.74052C14.427 3.88264 14.427 4.0248 14.427 4.16692C14.427 8.50192 11.1498 13.4969 5.15986 13.4969C3.31448 13.4969 1.60022 12.9588 0.158203 12.0248C0.420396 12.0552 0.67247 12.0654 0.944752 12.0654C2.46741 12.0654 3.8691 11.5476 4.98843 10.6644C3.5565 10.6339 2.3565 9.68977 1.94305 8.39027C2.14475 8.4207 2.34642 8.44102 2.5582 8.44102C2.85063 8.44102 3.14308 8.40039 3.41533 8.32936C1.92291 8.02477 0.803551 6.70498 0.803551 5.11108V5.07048C1.23715 5.31414 1.74139 5.46642 2.2758 5.4867C1.39849 4.89786 0.823727 3.8928 0.823727 2.75573C0.823727 2.14661 0.985041 1.58823 1.26741 1.10092C2.87077 3.09077 5.28086 4.39023 7.98334 4.53239C7.93293 4.28873 7.90266 4.03495 7.90266 3.78114C7.90266 1.97402 9.35477 0.501953 11.1598 0.501953C12.0976 0.501953 12.9446 0.897891 13.5396 1.53748C14.2757 1.39536 14.9816 1.12123 15.6068 0.745609C15.3648 1.50705 14.8505 2.14664 14.1749 2.5527C14.8304 2.48167 15.4657 2.29889 16.0505 2.04511C15.6069 2.69483 15.0522 3.27348 14.417 3.74052Z" />
                </svg>
            </a>
        </section>
    </div>
</footer>`
})

Vue.component('cart-item', {
    template: `<div class="cart-item">
    <img class="cart-item-image" :src="'images/products/' + item.image + '.jpg'" :alt="'product' +item.id">
    <div class="cart-item-description">
        <div class="cart-item-description-top">
            <h3 class="cart-item-title">{{ item.title }}</h3>

            <button @click="removeFromCartHandler" class="cart-item-delete" type="button"><svg width="18" height="18"
                    viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">

                    <path
                        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" />
                </svg></button>
        </div>
        <ul class="cart-item-text">
            <li>Price: <span class="cart-item-price">$ {{ item.price * item.quantity }}</span></li>
            <li>Color: {{ item.color }}</li>
            <li>Size: {{ item.size }}</li>

            <li>Quantity:<input class="cart-item-quantity" v-on:change="updateCartHandler" v-model.number="item.quantity" type="number" min="0" max="20"></li>

        </ul>
    </div>
</div>`,
    methods: {
        removeFromCartHandler() {
            this.$emit('remove-from-cart', this.item.id);
        },
        updateCartHandler() {
            this.$emit('update-cart', this.item.id)
        }
    },
    props: ['item']
})

Vue.component('items-in-cart', {
    template: ` <section class="cart container">
    <h2 class="hidden">cart</h2>
    <section class="cart-items">
        <h2 class="hidden">products in cart</h2>
        
        <cart-item v-for="item of cart" :key="item.id" v-bind:item="item" @update-cart="updateCartHandler" @remove-from-cart="removeFromCartHandler"></cart-item>
       
        <section class="cart-actions">
            <h2 class="hidden">further actions</h2>

            <button @click="clearCartHandler" class="cart-actions-clear" type="button">Clear shopping cart</button>

            <a class="cart-actions-continue" href="catalog.html">Continue shopping</a>
        </section>
    </section>
    <section class="cart-checkout">
        <form class="cart-form">
            <h2 class="cart-form-heading">SHIPPING ADRESS</h2>
            <input class="cart-form-info" type="text" placeholder="Country" required>
            <input class="cart-form-info" type="text" placeholder="State">
            <input class="cart-form-info" type="text" placeholder="Postcode / Zip" pattern="[0-9]{6}"
                required>
            <input class="cart-form-submit" type="submit" value="Get a quote">
        </form>
        <div class="cart-box">
            <div class="cart-sum">
                <h2 class="hidden">sum total</h2>
                <p class="cart-sum-text">SUB TOTAL<span class="cart-sum-price">{{ cartTotalPrice }}</span></p>
                <p class="cart-sum-bigtext">GRAND TOTAL<span class="cart-sum-bigprice">{{ cartTotalPrice }}</span></p>
                <hr class="cart-sum-line">
                <a class="cart-sum-proceed" href="#">PROCEED TO CHECKOUT</a>
            </div>
        </div>
    </section>
</section>`,
    methods: {
        removeFromCartHandler(id) {
            this.$emit('remove-from-cart', id);
        },
        clearCartHandler() {
            this.$emit('clear-cart')
        },
        updateCartHandler(id) {
            this.$emit('update-cart', id)
        }
    },
    props: ['cart', 'cart-total-price']
})

Vue.component('index-page', {
    template: `<div class="wrapper">
    <site-header @go-to="goToHandler" v-bind:items-quantity="itemsQuantity"></site-header>
    <main>
        <promo></promo>
        <categories></categories>

        <items-list v-bind:catalog="catalog" @add-to-cart="addToCartHandler"></items-list>

    </main>
    <benefits></benefits>
    <feedback></feedback>
    <site-footer></site-footer>
    </div>`,
    methods: {
        goToHandler(target) {
            this.$emit('go-to', target)
        },
        addToCartHandler(id) {
            this.$emit('add-to-cart', id)
        }
    },
    props: ['catalog', 'items-quantity']
})

Vue.component('cart-page', {
    template: `<div class="wrapper">
    <site-header @go-to="goToHandler" v-bind:items-quantity="itemsQuantity"></site-header>
    <main>
        <breadcrumb></breadcrumb>

        <items-in-cart v-if="cart.length>0" v-bind:cart="cart" @update-cart="updateCartHandler" @remove-from-cart="removeFromCartHandler" @clear-cart="clearCartHandler" v-bind:cart-total-price="cartTotalPrice"></items-in-cart>

        <div v-else class=empty_cart><img src="images/icons/empty-box.png"><p style="margin:20px 0px 50px;">Your Cart is empty.</p><a class="cart-actions-continue" href="catalog.html">Continue shopping</a></div>
        
    </main>
    <feedback></feedback>
    <site-footer></site-footer>
    </div>`,
    methods: {
        goToHandler(target) {
            this.$emit('go-to', target)
        },
        removeFromCartHandler(id) {
            this.$emit('remove-from-cart', id);
        },
        clearCartHandler() {
            this.$emit('clear-cart')
        },
        updateCartHandler(id) {
            this.$emit('update-cart', id)
        }
    },
    props: ['cart', 'items-quantity', 'cart-total-price']
})

const app = new Vue({
    el: '#app',
    data: {
        currentPage: 'index',
        catalog: [],
        cart: [],
    },
    methods: {
        goToHandler(target) {
            this.currentPage = target;
        },
        addToCartHandler(id) {
            const item = this.catalog.find(item => item.id === id);
            fetch('/cart/add', {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => this.cart = data)
        },
        updateCartHandler(id) {
            const item = this.cart.find(item => item.id === id);
            fetch('/cart/update', {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => this.cart = data)
        },
        removeFromCartHandler(id) {
            fetch('/cart/delete', {
                method: 'DELETE',
                body: JSON.stringify({ id }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => this.cart = data)
        },
        clearCartHandler() {
            this.cart = [];
            fetch('/cart/clear_cart')
        }
    },
    computed: {
        itemsQuantity: function () {
            return this.cart.reduce((acc, item) => acc + item.quantity, 0)
        },
        cartTotalPrice: function () {
            return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        }
    },
    mounted() {
        fetch('/catalog')
            .then(res => res.json())
            .then(data => this.catalog = data)
        fetch('/cart')
            .then(res => res.json())
            .then(data => this.cart = data)
    }
})
