export default {
    _listeners: {}, // объект, который хранит обработчики событий


    // добвляет обработчик события
    addListener(type, callback) {
        if (this._listeners[type]) {
            this._listeners[type].push(callback);
        } else {
            this._listeners[type] = [callback];
        }
    },

    // вызывает все функции в массиве, который является значением ключа type в объекте _listeners
    emit(type, ...params) {
        this._listeners[type].forEach(callback => {
            callback(...params);
        });
    }
}