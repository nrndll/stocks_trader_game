const express = require('express');
const app = express();

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {

        const db = client.db('stocks');
        const companiesCollection = db.collection('companies');
        const companiesRouter = createRouter(companiesCollection);
   
        app.use('/api/stocks', companiesRouter);
    })
        app.listen(5000, function() {
            console.log(`Stock server running on port ${this.address().port}`);
        });
   