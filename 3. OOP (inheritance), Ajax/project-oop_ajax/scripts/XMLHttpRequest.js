function makeGETRequest(url) {
    return new Promise(function (resolve, reject) {

        var xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.responseType = 'json'

        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject('');
            }
        }

        xhr.open('GET', url, true);
        xhr.send();
    });
}


const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

console.log(makeGETRequest(`${API_URL}/catalogData.json`));