import express from 'express'
import router from './router'

function server (port) {
  const app = express()
  const routes = router()

  app.use(express.json())
  app.use(routes)

  app.listen(port)
}

export default server
