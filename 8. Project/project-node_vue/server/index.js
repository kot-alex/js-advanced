let express = require('express');
let fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('./public'));

app.get('/catalog', (req, res) => {
    fs.readFile('./data/catalog.json', 'utf-8', (err, data) => {
        res.send(data);
    });
});

app.get('/cart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf-8', (err, data) => {
        res.send(data);
    });
});

app.post('/cart/add', (req, res) => {
    fs.readFile('./data/cart.json', 'utf-8', (err, data) => {
        const cart = JSON.parse(data);
        const item = req.body;
        const index = cart.findIndex(good => good.id === item.id);
        if (index !== -1) {
            cart[index].quantity++;
        } else {
            cart.push(item);
        }
        fs.writeFile('./data/cart.json', JSON.stringify(cart, null, 2), (err) => {
            res.send(cart);
        });
    });
});

app.post('/cart/update', (req, res) => {
    fs.readFile('./data/cart.json', 'utf-8', (err, data) => {
        const cart = JSON.parse(data);
        const item = req.body;
        const index = cart.findIndex(good => good.id === item.id);
        cart[index].quantity = item.quantity;
        if (cart[index].quantity === 0) {
            cart.splice(index, 1);
        }
        fs.writeFile('./data/cart.json', JSON.stringify(cart, null, 2), (err) => {
            res.send(cart);
        });
    });
});

app.delete('/cart/delete', (req, res) => {
    fs.readFile('./data/cart.json', 'utf-8', (err, data) => {
        const cart = JSON.parse(data);
        const id = req.body;
        const index = cart.findIndex(item => item.id === id.id);
        cart.splice(index, 1);
        fs.writeFile('./data/cart.json', JSON.stringify(cart, null, 2), (err) => {
            res.send(cart);
        });
    });
});

app.get('/cart/clear_cart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf-8', (err, data) => {
        const cart = JSON.parse(data);
        cart.length = 0;
        fs.writeFile('./data/cart.json', JSON.stringify(cart, null, 2), (err) => {
            res.send('ok');
        });
    });
});

app.listen(3000, () => {
    console.log('server is running on port 3000!');
});