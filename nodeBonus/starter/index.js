const fs = require("fs");
const http = require("http");
const url = require("url");

const file = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");

const laptops = JSON.parse(file);

const server = http.createServer((request, response) => {
  const pathName = url.parse(request.url, true).pathname;
  const id = url.parse(request.url, true).query.id;

  if (pathName === "/products" || pathName === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("products page");
  } else if ((pathName === "/laptop") & (id < 5)) {
    response.writeHead(200, { "Content-Type": "text/html" });

    const laptop = laptops[id];
    fs.readFile(
      `${__dirname}/templates/template-laptop.html`,
      "utf-8",
      (err, data) => {
        let output = data.replace(/{%NAME%}/g, laptop.productName);
        output = output.replace(/{%IMAGE%}/g, laptop.image);
        output = output.replace(/{%CPU%}/g, laptop.cpu);
        output = output.replace(/{%RAM%}/g, laptop.ram);
        output = output.replace(/{%STORAGE%}/g, laptop.storage);
        output = output.replace(/{%PROCESSOR%}/g, laptop.cpu);
        output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
        output = output.replace(/{%PRICE%}/g, laptop.price);
        output = output.replace(/{%SCREEN%}/g, laptop.screen);

        response.end(output);
      }
    );
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("page doesn't exist");
  }
});

server.listen(1337, "localhost", () => console.log("started listening"));
