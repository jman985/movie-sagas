const express = require('express');
const pool = require('../modules/pool');
const { default: Axios } = require('axios');
const router = express.Router();



router.get('/:id', (req, res) => {
    console.log('this is the GET req.params',req.params.id);
    
    //query for the selected movie, combine genres into a single string
    //credit to fellow Paxos student Carl Wilcoxon for this complex query
    pool.query('SELECT "movies"."title","movies"."poster","movies"."description",ARRAY_AGG("name") "genres" FROM "movies" JOIN "movie_genres" ON "movie_id" = "movies"."id" JOIN "genres" ON "genre_id" = "genres"."id" WHERE "movies"."id" = $1 GROUP BY "movies"."id" ORDER BY "movies"."title" ASC;',[req.params.id])

    .then((result) => {
        res.send(result.rows);

    }).catch((error) => {
        console.log('Error GET /:id', error)
        res.sendStatus(500);
    });
})

//save the user's changes to movie title and description to database
router.put('/:id', (req, res) => {

    const queryText = `UPDATE movies SET title=$1, description=$2 WHERE ID=$3`;
    const queryValues = [
      req.body.title,
      req.body.description,
      req.body.id,
    ]
    pool.query(queryText, queryValues)
        .then( (result) => {
            res.sendStatus(200);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
  });

   




module.exports = router;
