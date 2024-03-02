'use strict';

import express from 'express';
const app = express();
const port = 80;

app.use(express.static(
    'public',
    {
        extensions: [
            'htm',
            'html'
        ]
    }));

app.listen(port, () => {
    console.log(`Der Webserver läuft auf Port ${port}`);
});
