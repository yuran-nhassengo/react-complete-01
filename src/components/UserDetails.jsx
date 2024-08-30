import React from 'react'

import Prototype from 'prop-types'

export const UserDetails = ({user}) => {
  return (
    <>
      <div >
            <b>Username:</b><span>{user.username}</span><br/>
            <b>Email:</b><span>{user.email}</span>
      </div>
    </>
  )
}

UserDetails.prototype ={
    user: Prototype.shape({
        username: Prototype.string.isRequired,
        email: Prototype.string.isRequired,
    }
    )
}
