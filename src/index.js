import server from './server'
import env from 'dotenv'

env.config()

server(process.env.PORT)
