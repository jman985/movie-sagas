const express = require('express');
const pool = require('../modules/pool');
const { default: Axios } = require('axios');
// const { query } = require('../modules/pool');
const router = express.Router();



router.get('/:id', (req, res) => {
    console.log('this is the req.query.body',req.params.id);
    

    const queryText = `
    SELECT
      "movies"."title",
      "movies"."poster",
      "movies"."description",
      ARRAY_AGG("name") "genres"
    FROM "movies"
    JOIN "movie_genres" ON "movie_id" = "movies"."id"
    JOIN "genres" ON "genre_id" = "genres"."id"
    WHERE "movies"."id" = ${req.params.id}
    GROUP BY "movies"."id"
    ORDER BY "movies"."title" ASC`;

    pool.query(queryText)
    
    .then((result) => {
        res.send(result.rows);

    }).catch((error) => {
        console.log('Error GET /:id', error)
        res.sendStatus(500);
    });
})



// WHERE "movie_id"= $1
// [req.params.id]







module.exports = router;
