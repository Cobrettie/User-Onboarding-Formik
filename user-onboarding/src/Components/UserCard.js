import React from 'react';

const UserCard = ({ users }) => {
  return (
    <div>
      <h2>User Card</h2>
      <div>
        {users.map(user => {
          console.log('user map', user)
          const { firstname, lastname } = user.values;
          return (
            <div key={user.id}>
              <p>{firstname}</p>
              <p>{lastname}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserCard