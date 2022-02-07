const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');


const server = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0.z4nav.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);