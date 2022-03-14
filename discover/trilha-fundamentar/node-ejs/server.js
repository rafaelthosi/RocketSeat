const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  const items = [
    {
      title: "D",
      message: "esenvolver aplicações/serviços de forma fácil"
    },
    {
      title: "E",
      message: "JS usa JS para renderizar HTML"
    },
    {
      title: "M",
      message: "uita fácil de usar"
    },
    {
      title: "A",
      message: "morzinho"
    },
    {
      title: "I",
      message: "nstall ejs"
    },
    {
      title: "S",
      message: "intaxe simples"
    },
  ]

  const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JS"
  res.render("pages/index", {
    qualitys: items,
    subtitle
  });
});

app.get("/sobre", function(req, res) {
  res.render("pages/about");
});

app.get("/contato", function(req, res) {
  res.render("pages/contato");
});

app.listen(8080);
console.log("Rodando");