const http = require('http');

// ❌ Vulnerabilidad: servidor HTTP sin HTTPS ni validaciones
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Servidor inseguro sin cifrado\n');
}).listen(8080);

console.log('Servidor inseguro corriendo en puerto 8080');