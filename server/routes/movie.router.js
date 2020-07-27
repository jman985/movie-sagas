const express = require('express');
const pool = require('../modules/pool');
const { default: Axios } = require('axios');
const { query } = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    pool.query('SELECT * from "movies";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /movies', error)
        res.sendStatus(500);
    });
})


// save the user's changes to movie title and description
router.put('/', async (req, res) => {   
    const client = await pool.connect();
    try {
        const {
            title,
            description,
            id
        } = req.body;
        await client.query('BEGIN');
        
        await client.query
        (`UPDATE movies
          SET title = $1,
              description = $2
          WHERE id = $3;`, [ title, description, id ] );
        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /api/order', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});







module.exports = router;
