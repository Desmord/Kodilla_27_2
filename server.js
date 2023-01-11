const express = require('express');
const path = require('path');

const PORT = 8080;

const app = express();


app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname, `/public/${name}`));
    };
    next();
});

app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) => {
    res.show('views/index.html');
});

app.get('/home', (req, res) => {
    res.show('views/index.html');
});

app.get('/about', (req, res) => {
    res.show('views/about.html');
});

app.get('/user/settings', (req, res) => {
    res.show('views/logIn.html');
});

app.get('/user/panel', (req, res) => {
    res.show('views/logIn.html');
});

app.use((req, res) => {
    res.show('views/pageNotFound.html');
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});