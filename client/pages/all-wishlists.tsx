import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getMyWishlists } from '../apis/api-my-wishlist.ts'

interface Props {
  userId: number
}

export default function AllWishlists({ userId }: Props) {
  const {
    data: wishlists,
    isLoading,
    isError,
  } = useQuery(['wishlist', 'users', userId], () => getMyWishlists(userId))

  if (isLoading) {
    return <div>Loading your wishlist</div>
  }

  if (isError || !wishlists) {
    return <div>There was an error retrieving your wishlists</div>
  }

  function handleDelete() {}

  const listOfWishlists = wishlists.map((wishlist) => (
    <li key={wishlist.id}>
      <Link to={`/wishlists/${wishlist.id}`}>
        <div>
          <h2>{wishlist.name}</h2>
          <p>{wishlist.description}</p>
        </div>
      </Link>
      <span onClick={handleDelete}>❌</span>
      <Link to={`/wishlists/${wishlist.id}/edit`}></Link>
    </li>
  ))

  return (
    <div>
      <h1>My Wishlists</h1>
      {wishlists.length === 0 && <p>Please add a wishlist</p>}
      <ul>{listOfWishlists}</ul>

      {/* Need to check link below */}
      <span>
        <Link to={`/wishlists/add`}>➕</Link>
      </span>
    </div>
  )
}
