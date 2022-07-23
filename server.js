const http = require('http'); //http will not be modified that's why we put const instead of let or var
//http is an object it has methods and functions

//createServer (call back function --> prend request/demande ll server, response mn aaand server)
const server = http.createServer((req,res) => {
    // res.statusCode=200; //status code: 404-->not found/ 200-->ok
    // res.setHeader('content-type', 'text/html');//content type: HTML, JSON, Image, Video..
    // //res and req are objects
    // res.write('Welcome\n'); 
    //res.write(req.url);//url eli tlabha el user e.g: localhost:3000/yosr --> /yosr
    
    
    if (req.url == '/home') {
        res.write('WELCOME TO HOME PAGE');
    }
    else if (req.url == '/about') {
        res.write('WELCOME FROM ABOUT PAGE');
    }
    else if (req.url == '/contact') {
        res.write('WELCOME FROM CONTACT PAGE');
    }
    else {
        res.statusCode=404; 
        res.write("NOT FOUND");
    }
    res.end();
});

server.listen(3000, ()=> {
    console.log('server is running');
});


