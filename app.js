const express = require('express');
const app = express();
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path');
const productRouter = express.Router();

const PORT = process.env.PORT || 3000;  // Provide a default port if PORT is not set

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/'))); // Serve static files from the "public" directory

app.set('views', './src/views'); // Set the views directory
app.set('view engine', 'ejs'); // Set EJS as the templating engine

// Define routes for the product router
productRouter.route('/').get((req, res) => {
    res.render('products', {
        products: [
            { productsTitle: 'น้ำยาล้างจาน', Descripttion: 'น้ำยาล้างจานสูตร 1', price: '100' },
            { productsTitle: 'น้ำยาล้างจาน2', Descripttion: 'น้ำยาล้างจานสูตร 2', price: '120' },
            { productsTitle: 'น้ำยาล้างจาน3', Descripttion: 'น้ำยาล้างจานสูตร 3', price: '90' },
            { productsTitle: 'น้ำยาล้างจาน4', Descripttion: 'น้ำยาล้างจานสูตร 4', price: '150' },
        ]
    });
});

productRouter.route('/1').get((req, res) => {
    res.send('hello world !! I\'m Product 1');
});

// Use the product router for routes starting with "/product"
app.use('/product', productRouter);

// Define the root route
app.get('/', (req, res) => {
    res.render('index', { username: 'Wavezzz', customers: ['Kitty', 'Kittykorn', 'Kitty'] });
});

// Start the server
app.listen(PORT, () => {
    debug('Listening on port %d', PORT);
    console.log(`Server is running on http://localhost:${PORT}`);
});
