const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log('Server has started in 5000');
});
