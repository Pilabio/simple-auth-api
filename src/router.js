import express from 'express'

function router () {
  const routes = express.Router()

  routes.get('/', (req, res) => {
    return res.json({ hello: 'World' })
  })

  return routes
}

export default router