const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const PORT = 8080;

const app = express();


app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.engine('.hbs', hbs());
app.set("views", __dirname + "/public/views")
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about', { layout: `dark` });
});

app.get('/contact', (req, res) => {
    res.render('contact', { layout: `dark` });
});

app.get('/user/settings', (req, res) => {
    res.render('logIn');
});

app.get('/user/panel', (req, res) => {
    res.render('logIn');
});

app.get('/hello/:name', (req, res) => {
    res.render('hello', { name: req.params.name });
});

app.post('/contact/send-message', (req, res) => {

    const { author, sender, title, message, image } = req.body;

    if (author && sender && title && message && image) {
        res.render('contact', { fileName: image, isSent: true, layout: `dark` });
    }
    else {
        res.render('contact', { isError: true, layout: `dark` });
    }

});

app.use((req, res) => {
    res.render('pageNotFound');
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});