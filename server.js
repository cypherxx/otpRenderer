const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

app.get('/otp', (req, res) => {
    res.sendFile(__dirname + '/public/otp.html'); // Ensure your HTML file is named 'otp.html'
});

app.listen(port, () => {
    console.log(`Server running`);
});