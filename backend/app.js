const express = require('express');
const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res, next) => {
    res.send('hi');
})

app.listen(PORT, () => {
    console.log(`Your server is up and running on port:${PORT}`);
})