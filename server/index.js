const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 4002;

const Student_Route = require("./route/StudentRoute");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
    return res.json("From fast project Server Side");
});
app.use("/", Student_Route);


app.listen(PORT, () => {
    console.log(`Server Listening on port ` + PORT);
});