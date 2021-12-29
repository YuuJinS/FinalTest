/* eslint-disable no-tabs */
// Port Setting
const port = 80;

// Express
const express = require("express");
const app = express();
app.use(express.static("public"));

// ejs Engine
const engine = require("ejs-locals");
app.engine("ejs", engine);
app.set("views", "./views");
app.set("view engine", "ejs");

// Color Log
const logger = require("node-color-log");
logger.setLevel("info");
logger.setDate(() => new Date().toLocaleString());

// Calc

// Router
app.get("/", function(req, res) {
	logger.info("Someone comes to our site's home page");
	res.render("index",
		{
			page: "展示頁面",
			title: "陳思鏡 小吃部",
		});
	res.status(200).end();
});

app.get("/exit", function(req, res) {
	logger.warn("Process Stop!");
	res.render("exit", {
		page: "exit",
	});
	res.status(200).end();
	setTimeout(function() {process.exit(0);}, 3000);
});

app.post("/", function(req, res) {
	res.render("index",
		{
			page: "展示頁面",
			title: "陳思鏡 小吃部",
		});
	res.status(200).end();
});

// Process Start
logger.info("Starting Process");
app.listen(port);
logger.info("Process Start!");
logger.info("View your page in http://localhost");
