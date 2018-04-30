const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

function serveApi(req, res) {}

app.prepare().then(() => {

  console.log('prepared')

  let handler = (req, res) => {
    if (req.url.startsWith('/api')) {
      return serveApi(req, res)
    }

    handle(req, res)
    return
  }

  createServer(handler).listen(3000, () => console.log('listening on 3000'))
})
