const connect = require('connect');
const http = require('http');
const { parse } = require('url');

const app = connect();

function calculate(req, res) {
  const { query } = parse(req.url, true);
  const method = String(query.method || '').toLowerCase();
  const x = Number(query.x);
  const y = Number(query.y);

  res.setHeader('Content-Type', 'text/plain');

  const ops = {
    add: { symbol: '+', fn: (a, b) => a + b },
    subtract: { symbol: '-', fn: (a, b) => a - b },
    multiply: { symbol: '*', fn: (a, b) => a * b },
    divide: { symbol: '/', fn: (a, b) => (b !== 0 ? a / b : 'Error: Division by zero') },
  };

  if (!ops[method]) {
    res.end('Error: Invalid method. Use add, subtract, multiply, or divide.');
    return;
  }

  const { symbol, fn } = ops[method];
  const result = fn(x, y);
  res.end(`${x} ${symbol} ${y} = ${result}`);
}

app.use('/lab2', calculate);

http.createServer(app).listen(3000, () => {
  console.log('Server running at http://localhost:3000/lab2?method=add&x=16&y=4');
});
