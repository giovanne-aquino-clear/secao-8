    var conn = require("./db");
   
   module.exports = {

        render(req, res, error){

            res.render('reservations', {
                title: 'Reservas - Restaurante do balacobaco',
                background: 'images/img_bg_2.jpg',
                h1: 'Reserve uma Mesa',
                body: req.body,
                error
            })

        },

        save(fields){


        }


    }