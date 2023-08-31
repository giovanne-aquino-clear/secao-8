var conn = require('./../inc/db');
var express = require('express');
var menus = require('./../inc/menus')
var reservations = require('./../inc/reservations')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  menus.getMenus().then(results=>{

    res.render('index', {
      title: 'Restaurante do balacobaco',
      menus: results,
      isHome: true
    });
  });

  })

  
  router.get('/contacts', function(req, res, next){
    res.render('contacts', {
      title: 'Contato - Restaurante do balacobaco',
      background: 'images/img_bg_3.jpg',
      h1: 'Fala truta'
    });
  });

  router.get('/menus', function(req, res, next){
    
    menus.getMenus().then(results=>{
    
    res.render('menus',{
      title: 'Menus - Restaurante do balacobaco',
      background: 'images/img_bg_1.jpg',
      h1: ' coma imediatamente ',
      menus: results

    });
  });
});

  router.get('/reservations', function(req, res, next){

    reservations.render(req, res);

  });

  router.post('/reservations', function(req, res, next){

    if(!req.body.name){
      reservations.render(req, res, "digite o nome");
    } else if(!req.body.email){
      reservations.render(req, res, "digite o e-mail");
    } else if(!req.body.people){
      reservations.render(req, res, "Selecione o numero de pessoas");
    } else if(!req.body.date){
      reservations.render(req, res, "Selecione a data ");
    } else if(!req.body.time){
      reservations.render(req, res, "Selecione a hora");
    } else{

    }

    });



  router.get('/services', function(req, res, next){
    res.render('services',{
      title: 'Serviços - Restaurante do balacobaco',
      background: 'images/img_bg_1.jpg',
      h1: 'amo trabalhar'

    });
  });


module.exports = router;
