import * as Path from 'node:path'

import express from 'express'

import wishListRouter from './routes/wishlists'
import userRouter from './routes/users.ts'
import userDetailsRouter from './routes/user-details'

const server = express()
server.use(express.json())
server.use('/api/v1/wishlists', wishListRouter)
server.use('/api/v1/users', userRouter)
server.use('/api/v1/user-details', userDetailsRouter)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
