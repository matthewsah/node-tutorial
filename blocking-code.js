const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home page')
  } else if (req.url === '/about') {
    // BLOCKING CODE
    for (let i=0; i < 1000000; i++) {
      console.log(i)
    }
    res.end('About')
  } else {
    res.end('Not found')
  }
})

server.listen(5001, () => {
  console.log('Server Listening on port 5001');
});