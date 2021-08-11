const express = require('express');
const app = express();
const cors = require('cors');
const ObjectID = require('mongodb').ObjectId;

app.use(cors());
app.use(express.json());
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {

        const db = client.db('players');
        const playerInfo = db.collection('playerInfo');
        app.get('/api/players', (req, res) => {
            playerInfo
                .find()
                .toArray()
                .then((docs) => res.json(docs))
                .catch((err) => {
                    console.error(err);
                    res.status(500);
                    res.json({ status: 500, error: err });
                });
        })

        app.put('/api/players/:id', (req, res) => {
            const id = req.params.id;
            const updatedData = req.body;
            delete updatedData._id;
            playerInfo
                .updateOne({ _id: ObjectID(id) }, { $set: updatedData })
                .then(result => {
                    res.json(result);
                })
                .catch((err) => {
                    res.status(500);
                    res.json({ status: 500, error: err });
                });
        });

    })
        app.listen(5000, function() {
            console.log(`Stock server running on port ${this.address().port}`);
        });
   