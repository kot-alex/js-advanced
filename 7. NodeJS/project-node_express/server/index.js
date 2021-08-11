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
        if (cart.find(good => good.id === item.id)) {
            cart.find(good => good.id === item.id).quantity++;
        } else {
            cart.push(item);
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
        const item = cart.findIndex(item => item.id === id.id);
        cart.splice(item, 1);
        fs.writeFile('./data/cart.json', JSON.stringify(cart, null, 2), (err) => {
            res.send(cart);
        })
    })
})

app.get('/cart/clear_cart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf-8', (err, data) => {
        let cart = JSON.parse(data);
        cart = [];
        fs.writeFile('./data/cart.json', JSON.stringify(cart, null, 2), (err) => {
            res.send('ok');
        });
    });
});

app.listen(3000, () => {
    console.log('server is running on port 3000!');
});