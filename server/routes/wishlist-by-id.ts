import express from 'express'
// import { getUserFriendsWishlits } from '../db/functions/db'

import { User } from '../../models/user'
import { Wishlist } from '../../models/wishlist'

import { checkJwt } from '../utils/auth'
import {
  getMyWishlists,
  getWishListById,
} from '../db/functions/db-wishlist-by-id'

const router = express.Router()

// GET /api/v1/wishlists/wishlists
router.get('/wishlists', async (req, res) => {
  // add auth0Id param that is not hard-coded
  const auth0Id = 'auth0|123456'
  try {
    const wishlist = await getMyWishlists(auth0Id)
    console.log(`wishlist: ${wishlist}`)
    //deconstructs the body of the response and

    res.json(wishlist)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// GET /api/v1/wishlists/:wishlistId
router.get('/:wishlistId', async (req, res) => {
  //Get all wishlists for all friends of a user
  const wishlistId = Number(req.params.wishlistId)
  // add auth0Id param
  // const auth0Id = req.auth?.sub
  const auth0Id = 'auth0|123456'
  try {
    const wishlist = await getWishListById(wishlistId, auth0Id)
    console.log(`wishlist: ${wishlist}`)
    //deconstructs the body of the response and

    res.json(wishlist)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  }
})

export default router
