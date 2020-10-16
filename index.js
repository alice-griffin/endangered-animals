const express = require('express');
const app = express();
const endangeredList = require('./routes/animals');
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/endangered-animals', endangeredList);

app.listen(process.env.PORT || 3000, () => console.log(`listening on ${port}`));

