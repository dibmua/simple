const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	if(req.url === "/"){
		fs.readFile("./index.html", "UTF-8", (err, html) => {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(html);
			});
		}
	});		

server.listen(3000, () => {
	console.log('Server started on port 3000 http://localhost:3000/');
})