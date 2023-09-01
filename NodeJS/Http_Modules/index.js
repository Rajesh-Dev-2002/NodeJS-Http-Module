const http = require("http");

const server = http.createServer((req, res) => {
//     console.log(req.url)
//   res.end("Hey Iam Learning Node js and React JS");
if(req.url=="/"){
    res.end("Hello from Home section");
}
else if(req.url=="/about"){
    res.end("Hello from About  section");
}
else if(req.url=="/contact"){
    res.end("Hello from Contact  section");
}
else if(req.url=="/xyz"){
    res.end(" <h1> Hello</h1> ");
}
else {
    
    res.end("404 Error Page ! Page Does not found")
}

});

server.listen(9000, () => {
  console.log("server created successfully !");
});
