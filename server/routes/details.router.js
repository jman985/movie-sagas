const express = require('express');
const pool = require('../modules/pool');
const { default: Axios } = require('axios');
const { query } = require('../modules/pool');
const router = express.Router();



router.get('/', (req, res) => {
    console.log('this is the req.query.body',req.query);
    
    pool.query(`SELECT genres.name, movie_id
    FROM movie_genres
    JOIN "movies" on "movie_genres"."movie_id" = "movies"."id"
    JOIN "genres" on "movie_genres"."genre_id" = "genres"."id" ORDER BY movie_id;`)
    
    .then((result) => {
        res.send(result.rows);

    }).catch((error) => {
        console.log('Error GET /details', error)
        res.sendStatus(500);
    });
})



// WHERE "movie_id"= $1
// [req.params.id]







module.exports = router;
