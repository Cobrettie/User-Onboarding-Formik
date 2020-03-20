import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      <div>
        {users.map(user => {
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

export default UserList;