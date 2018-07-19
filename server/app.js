const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const indexApiRoute = require("./routes/api");
const indexRoute = require("./routes");

app.use(express.static(__dirname + "/public", {maxage:"4h"}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/api/todos", indexApiRoute);
app.use("/", indexRoute);

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server Started!");
});