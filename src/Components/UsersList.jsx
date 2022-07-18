
import React from 'react';

const UsersList = ({users, selectUser, deleteUser}) => {




  return (
    <div className='users-list'>
      <ul>
        {
          users.map(user =>
            <li key={user.id} className='user_card'>
              <p >{user.first_name} {user.last_name}</p>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Birthday:</b> {user.birthday}</p>
              

              <div className="buttons">
                <button className='trash'
                onClick={()=>deleteUser( user )}
                ><i className='bx bxs-trash'></i></button>

                <button className='edit' type='button' onClick={()=>selectUser(user)}><i className='bx bxs-pencil'></i></button>
                </div>
            </li>
          )
        }
      </ul>
      
    </div>
  );
};

export default UsersList;