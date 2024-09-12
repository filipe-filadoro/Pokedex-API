"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, "/views"));
app.get('/', function (request, response) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        response.render("index", data);
    });
});
app.get('/detalhar/:id', function (req, res) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + req.params.id)
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        res.render("detalhar", data);
    });
});
app.listen(3000, function () {
    console.log("Server is running");
});
