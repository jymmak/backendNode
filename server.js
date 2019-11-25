const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function (req, res) {
    console.log(req.headers)
    res.header({
        "custom-header": "Nuestro valor personalizado",
    })
    res.send('Lista de mensajes');
});
router.post('/message', function (req, res) {
    console.log(req.query);
    console.log(req.body);
res.status(201).send({error: '',body: 'Creado correctamente' })
});



app.listen(3000, () => {
    console.log("server run!!!");
});

