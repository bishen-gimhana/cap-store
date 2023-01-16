const express = require('express');
const path = require('path');
const port = process.env.PORT || 4260;
const app = express();

const destinationDir = path.join(__dirname, '../dist');

//hosting from dist folder
app.use(express.static(destinationDir))
console.log(`express hosting from ${destinationDir}`);

//serving index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(destinationDir,'index.html'));
}
);
//initialize app and listen to port
console.log(`serving index.html`);
app.listen(port, ()=> console.log(`server is runing from port ${port}`)); 