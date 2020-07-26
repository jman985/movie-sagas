const express = require('express');
const pool = require('../modules/pool');
const { default: Axios } = require('axios');
const { query } = require('../modules/pool');
const router = express.Router();



router.get('/details', (req, res) => {
    pool.query('SELECT * FROM movie_genres JOIN movies on movie_genres.movie_id = movies.id JOIN genres on movie_genres.genre_id = genres.id WHERE movie_id=$1',[req.params.body])
    
    .then((result) => {
        res.send(result.rows);

    }).catch((error) => {
        console.log('Error GET /movies', error)
        res.sendStatus(500);
    });
})












module.exports = router;
