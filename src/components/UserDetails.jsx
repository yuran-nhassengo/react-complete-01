import React from 'react'

export const UserDetails = ({username,email}) => {
  return (
    <>
      <div >
            <b>Username:</b><span>{username}</span><br/>
            <b>Email:</b><span>{email}</span>
      </div>
    </>
  )
}

