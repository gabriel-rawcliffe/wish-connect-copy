import express from 'express'
import { getAllUsers } from '../db/functions/db'

import { User } from '../../models/user'
import { Wishlist } from '../../models/wishlist'

import { checkJwt } from '../utils/auth'

const router = express.Router()

//todo remove hardcoded auth ID and replace with token
router.get('/', async (req, res) => {
  try {
    const userId = 'auth0|123456'
    const users = (await getAllUsers(userId)).map(user => {
      if (typeof user.friends === 'string'){
        return { ...user, friends: user.friends?.split(',').map((id: string) => Number(id)) }
      } else return {...user, friends: Number(user.friends)}
    })

    res.json(users)
  } catch (e) {
    console.log(`An error has occurred at ${req.path}: ${e}`)
    res.status(500).send(e)
  }
})

export default router