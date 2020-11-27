const express = require('express');
const router = express.Router();
const restbylocationcontroller = require('../controllers/restbylocation');




router.get('/restbylocation/:city', restbylocationcontroller.getrestbylocation);
router.get('/locations', restbylocationcontroller.getlocations);



// router.get('/locations', );

module.exports= router;