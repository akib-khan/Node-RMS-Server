var express = require('express');
var router = express.Router();
const cors = require('./cors');

/* GET users listing. */
router.get('/',cors.cors, function(req, res, next) {
    var servers;
    console.log(" req: ",req);
    //if( req.query.username === "akib@abc" && req.query.password === "aquib12345") {
    //console.log(" login true: ",req.query.username," ",req.query.password);
    servers = {
        "login":true
    }
    /*}
    else {
        console.log(" login false: ",req.query.username," ",req.query.password);
        servers = {
        "login":false
    }
    }*/
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(servers);
})

module.exports = router;