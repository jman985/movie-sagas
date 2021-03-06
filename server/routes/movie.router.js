const express = require('express');
const pool = require('../modules/pool');
const { default: Axios } = require('axios');
const { query } = require('../modules/pool');
const router = express.Router();

//get movies list from the database
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "movies" ORDER BY id;').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /movies', error)
        res.sendStatus(500);
    });
})






module.exports = router;
