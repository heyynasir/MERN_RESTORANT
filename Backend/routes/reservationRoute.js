const express = require('express');
const sendReservation = require('../controller/reservation');
const readData = require('../controller/reservation');
const router = express.Router()

router.post('/create' , sendReservation)
router.get('/read' , readData)

module.exports = router;