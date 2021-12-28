/* eslint-disable no-tabs */
// Port Setting
const port = 80;

// Express
const express = require(
	"express",
);
const app = express();
app.use(
	express.static(
		"public",
	),
);

// ejs Engine
const engine = require(
	"ejs-locals",
);
app.engine(
	"ejs",
	engine,
);
app.set(
	"views",
	"./views",
);
app.set(
	"view engine",
	"ejs",
);

// Color Log
const logger = require(
	"node-color-log",
);
logger.setLevel(
	"info",
);
logger.setDate(
	() => new Date()
		.toLocaleString(),
);

// Router
app.get(
	"/", function(
		req,
		res,
	) {
		logger.info(
			"Someone comes to our site's home page",
		);
		res.render(
			"index",
			{
				"title": "Home",
				"titleH2": "<h2>第二級標題</h2>",
				"show": true,
				"foods": ["apple", "banana", "mongo"],
			},
		);
	},
);

app.get(
	"/exit",
	function(
		req,
		res,
	) {
		logger.warn(
			"Process Stop!",
		);
		setTimeout(
			res.render(
				"exit",
				{
					title: "exit",
				},
			), 3000);
		process.exit(
			0,
		);
	},
);

// Process Start
logger.info(
	"Starting Process",
);
app.listen(
	port,
);
logger.info(
	"Process Start @ http://localhost/ !",
);
