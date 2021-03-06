const dotenv = require ('dotenv');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require ('celebrate');
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(process.env.PORT || 3333);
