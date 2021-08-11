use players;

db.dropDatabase();

db.playerInfo.insertOne(
    {
        "totalCapital": 10000,
        "totalShares": [
            { "company": "DRNA", "shares": 0, "shortName": "Dicerna Pharmaceuticals, Inc." },
            { "company": "ICAD", "shares": 0, "shortName": "ICAD Inc." },
            { "company": "AAPL", "shares": 0, "shortName": "Apple Inc." },
            { "company": "FTFT", "shares": 0, "shortName": "Future FinTech Group Inc." },
            { "company": "AMTI", "shares": 0, "shortName": "Applied Molecular Transport Inc." },
        ]
    }
)
