const fs = require("fs");
const http = require("http");
const url = require("url");

const file = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");

const dataJson = JSON.parse(file);

const server = http.createServer((request, response) => {
  const pathName = url.parse(request.url, true).pathname;
  const id = url.parse(request.url, true).query.id;

  if (pathName === "/products" || pathName === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("products page");
  } else if ((pathName === "/laptop") & (id < 5)) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`laptop page for laptop ${id}`);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("page doesn't exist");
  }
});

server.listen(1337, "localhost", () => console.log("started listening"));
