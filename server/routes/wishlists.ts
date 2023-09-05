import express from 'express'
import { getFriendsWishlistsByAuthId } from '../db/functions/db'

import { User } from '../../models/user'
import { Wishlist } from '../../models/wishlist'

import { checkJwt } from '../utils/auth'

const router = express.Router()

// GET /api/v1/wishlists

//todo remove hardcoded auth ID and replace with token
router.get('/friends', async (req, res, next) => {
  try {
    const userId = 'auth0|123456'
    const wishlists = await getFriendsWishlistsByAuthId(userId)

    res.json(wishlists)

  } catch (e) {
    console.log(`An error has occurred at ${req.path} - ${e}`)
  }
})

export default router
