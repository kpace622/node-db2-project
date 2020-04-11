const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(car => {
            res.json(car);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to retrieve cars'})
        })
})

router.post('/', (req, res) => {
    const newCar = req.body;

    db('cars').insert(newCar)
    .then(car => {
        res.status(201).json(car)
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    db('cars')
    .where({id})
    .update(updates)
    .then(count => {
        if (count) {
            res.json({updated: count})
        } else {
            res.status(404).json({message: 'invalid id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'error updating car'})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db('cars')
    .where({id})
    .del()
    .then(count => {
        if (count) {
            res.json(count)
        } else {
            res.status(404).json({message: 'invalid id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'error deleting car'})
    })
})

module.exports = router;