const express = require('express');
const router = express.Router();

const app = express();

app.use(router);
router.get('/', (req, res) => res.send('hola desde get '));


app.listen(3000, () => {
    console.log("server run!!!");
});

