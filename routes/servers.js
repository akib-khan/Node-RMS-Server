var express = require('express');
var router = express.Router();
const cors = require('./cors');

/* GET users listing. */
var data1 = [
    {
      "firstName":"value50",
      "lastName":"value51"
    },
    {
      "firstName":"value60",
      "lastName":"value61"
    }
  ];

var data2 = [
    {
        "firstName":"value100",
        "lastName":"value101"
      },
      {
        "firstName":"value110",
        "lastName":"value111"
      }, 
      {
        "firstName":"value120",
        "lastName":"value121"
      }
];

var data3 = [
    {
        "firstName":"value200",
        "lastName":"value201"
      }

];


router.get('/',cors.cors, function(req, res, next) {
    var servers = [
        {
            "name":"21.33"
        },
        {
            "name":"18.21"
        },
        {
            "name":"23.25"
        }
    ]
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(servers);
})

router.options('/:serverId',cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

router.get('/:serverId',cors.cors, function(req, res, next) {
    console.log("serverId: ",req.params.serverId);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    //var data1;
    if( req.params.serverId === "21.33") {
        res.json(data1);
    }
    else if( req.params.serverId === "20.18" ) {
        res.json(data2);

    }
    else
      res.json(data3);
})

router.post('/:serverId',cors.corsWithOptions, function(req, res, next) {
    console.log("post: serverId: ",req.params.serverId, " req.body: ",req.body );
    if( req.body != null ) {
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        //console.log("parsing data4 ");
        var data4=req.body;
        console.log(" data4 is: ",data4);
        if( req.params.serverId === "21.33") {
            //console.log(" data1 before: ",data1);
            data1 = data4;
            //console.log(" data1 after: ",data1);
        }
        else if( req.params.serverId === "20.18" ) {
            //console.log(" data2 before: ",data2);
            data2 = data4;
            //console.log(" data2 after: ",data2);
        }
        else {
            //console.log(" data3 before: ",data3);
            data3 = data4;
            //console.log(" data3 after: ",data1);
        }
        res.json(data4);
    }
})


router.get('/:serverID/:action',cors.cors, function(req, res, next) {
    var servers;
    console.log(" for server : ",req.params.serverID, " action: ",req.params.action," received");
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