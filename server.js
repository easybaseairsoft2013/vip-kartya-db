const express = require("express");
const app = express();
require("dotenv").config();

app.get("/token", (req, res) => {
    res.json({ token: process.env.VIP_KARTYA_TOKEN });
});

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
