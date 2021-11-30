// imports
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1/places', routes.places);
app.use('/api/v1/speedtests', routes.speedtests);
app.use('/api/v1/', routes.users);
app.use('/api/v1/comments', routes.comments);

app.listen(port, () => console.log(`Server is running on port ${port}`));
