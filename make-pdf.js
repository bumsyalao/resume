import pdf from "html-pdf";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Resume from "./src/components/resume.jsx";

const config = {
	type: "pdf",
	format: "A4",
	renderDelay: 1000,
	height: "2800px",
	width: "1420px",
	orientation: "portrait",
};

const HTML = ReactDOMServer.renderToString(<Resume />);

fs.readFile("./index.html", "utf8", (err, data) => {
	if (err) throw err;

	const document = data
		.replace(
			/<div id="main" class="responsive"><\/div>/,
			`<div id="main" class="printer"${HTML}</div>`
		)
		.replace(/.\/dist\/style.css/, "http://localhost:9090/style.css")
		.replace(/<script src=".\/dist\/bundle.js" defer><\/script>/, "");

	pdf.create(document, config).toFile("./resume.pdf", (err, res) => {
		if (err) return console.log(err);
		console.log(res);
	});
});
