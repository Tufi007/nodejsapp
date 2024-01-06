const http = require("http");
const url = require("url");
const fs = require("fs");
const html = fs.readFileSync("./basic.html", "utf-8");
const productlist = fs.readFileSync("./productlist.html", "utf-8");
const productdetail = fs.readFileSync("./productdetail.html", "utf-8");
const products = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
function replaceHtml(template, product) {
  let output = template.replace("{{%IMAGE%}}", product.images[0]);
  output = output.replace("{{%NAME%}}", product.title);
  output = output.replace("{{%MODELNAME%}}", product.id);
  output = output.replace("{{%MODELNO%}}", product.stock);
  output = output.replace("{{%SIZE%}}", product.rating);
  output = output.replace("{{%CAMERA%}}", product.camera);
  output = output.replace("{{%PRICE%}}", product.price);
  output = output.replace("{{%COLOR%}}", product.color);
  output = output.replace("{{%ID%}}", product.id);
  output = output.replace("{{%ROM%}}", product.ROM);
  output = output.replace("{{%DESC%}}", product.Description);

  return output;
}
const server = http.createServer((Request, Response) => {
  let { query, pathname: path } = url.parse(Request.url, true);
  productlistresponse = products.map((prod) => {
    return replaceHtml(productlist, prod);
  });

  
  
  if (
    path.toLocaleLowerCase() === "/products" ||
    path.toLocaleLowerCase() == "/"
  ) {
    if (!query.id) {
      Response.writeHead(200, {
        "content-type": "text/html",
        myheader: "custom header",
      });
      Response.end(
        html.replace("{{%CONTENT%}}", productlistresponse.join())
      );
    } else {
        let ida= query.id;
        let product = products.find(element => {
            let ida= query.id; 
            if(element.id == ida){
            return (element);}
          });
        console.log(product);
        let productdetailresponse = replaceHtml(productdetail,product);
        Response.end(
            html.replace("{{%CONTENT%}}", productdetailresponse)
          );
    }
  } else {
    Response.writeHead(404);
    Response.end("page was never there");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("server started");
  // console.log(products);
});
