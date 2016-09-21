var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/users/homepage', function (req, res, next) {
    if(req.session.currentUser){
        res.render('users/homepage', {
            title: '记事本',
            currentUser:req.session.currentUser
        });
    }else{
        res.redirect("/users/homepage");
    }

});
module.exports = router;
