const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use('/_assets', express.static(path.join(__dirname, '_assets')));
app.use('/_static', express.static(path.join(__dirname, '_static')));
app.use(express.static('pages'));

// Serve index.html as the default page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
