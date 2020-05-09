const express = require("express");
const app = express();

app.get("/", (req, res) => res.sendFile(`${__dirname}/src/index.html`))

app.listen(process.env.PORT || 3022, () => {
    console.log("Server running");
})