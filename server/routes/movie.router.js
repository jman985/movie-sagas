const express = require('express');
const pool = require('../modules/pool');
const { default: Axios } = require('axios');
const { query } = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    pool.query('SELECT * from "movies" ORDER BY id;').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /movies', error)
        res.sendStatus(500);
    });
})






module.exports = router;
