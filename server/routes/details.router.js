const express = require('express');
const pool = require('../modules/pool');
const { default: Axios } = require('axios');
// const { query } = require('../modules/pool');
const router = express.Router();



router.get('/:id', (req, res) => {
    console.log('this is the GET req.query.body',req.params.id);
    

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

// save the user's changes to movie title and description


router.put('/:id', (req, res) => {
    // return all genres
    const queryText = `UPDATE movies
                      SET title=$1,
                      description=$2
                      WHERE ID=$3`;
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


// router.put('/', async (req, res) => {   
//     console.log('this is the PUT req.query.body',req.body);

//     const client = await pool.connect();
//     try {
//         const {
//             title,
//             description,
//             id
//         } = req.body;
//         await client.query('BEGIN');
        
//         await client.query
//         (`UPDATE movies
//           SET title = $1,
//               description = $2
//           WHERE id = $3;`, [ title, description, id ] );
//         await client.query('COMMIT')
//         res.sendStatus(201);
//     } catch (error) {
//         await client.query('ROLLBACK')
//         console.log('Error POST /details', error);
//         res.sendStatus(500);
//     } finally {
//         client.release()
//     }
// });

// WHERE "movie_id"= $1
// [req.params.id]







module.exports = router;
