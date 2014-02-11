var http = require('http');
var exec = require('child_process').exec;

http.createServer(function (req, res) {
  if (req.url == '/TROLLOCK') {
    var child = exec('"/System/Library/CoreServices/Menu\ Extras/User.menu/Contents/Resources/CGSession" -suspend',
      function (error, stdout, stderr) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('TROLLED.\n');
      });
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Nothing to see here.\n');
  }
}).listen(1337, '127.0.0.1');
console.log('TROLLOCK running at http://127.0.0.1:1337/');
