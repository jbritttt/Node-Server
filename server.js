const http = require('http')

const server = http.createServer((req , res) => {

    // server logic
// if urls are this or that do this. we can write logic like this
console.log(req.url)
if(req.url == '/'){

    console.log('welcome to the crazy cat corner!')
}else if (req.url == '/cats'){

    console.log({cat: 'garfield'})
}else{ console.log('page not found')}

//res.statusCode = 200;
//res.end('Hello, world')
})

server.listen(3000, ()=>{
    console.log('server running on port 80')
})


// Create different "routes" depending on the value of req.url
    // Send different responses depending on what is being requested
    // 1. Home route "/" send back "Welcome to the crazy cat corner!"
    // 2. Cats routes "/cats" send back some info about cats. Start with string, then try
    // returning some JSON
    // 3. Create a default route that catches everything else and returns not found.
