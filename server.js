const PORT = 3001;
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server: Kaveesha | Batch: 24.2 | Started at http://localhost:${PORT}`);
});