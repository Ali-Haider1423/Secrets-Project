import express from "express";
import axios from "axios"

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {
        secret: result.data.secret,
        user: result.data.username
    });
})


app.listen(PORT, console.log(`Server is running on PORT: ${PORT}`));