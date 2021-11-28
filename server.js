// imports
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require("body-parser")

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());

app.use(express.json());

const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json(), urlencodedParser)

app.use('/api/v1/places', routes.places);
app.use('/api/v1/speedtests', routes.speedtests);
app.use('/api/v1/', routes.users);

app.listen(port, () => console.log(`Server is running on port ${port}`));
