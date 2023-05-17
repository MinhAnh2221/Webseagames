{
  var express = require('express');
  var router = express.Router();

  router.get('/', (req, res) => {
    ren.render("index")
  });

  router.get('/could', (req, res) => {
    res.render("could")
  });
  router.get('/seagame', (req, res) => {
    res.render("seagames")
  });
  module.export = router;
}