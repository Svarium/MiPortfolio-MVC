const path = require('path');

let mainControllers = {
    home : function(req,res){
       /*  res.send('a que hora me vas a enviar el html??????') */
        res.sendFile(path.join(__dirname, '..', 'views', 'home.html'))
      
    },
    about : function(req,res){
        res.sendFile(path.join(__dirname, '..', 'views', 'about.html'))
    }
}

module.exports = mainControllers;