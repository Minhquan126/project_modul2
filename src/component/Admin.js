import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { act_block_user, act_get_user } from '../redux/action'
import { useNavigate } from 'react-router-dom'
import History from './History'
export default function Admin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(act_get_user())
  }, [])
  let listUser = useSelector(state => state.listUsers)
  console.log("listUser", listUser);
  const handleBlock = (id) => {
dispatch(act_block_user(id, false))
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>stt</th>
            <th>User Name</th>
            <th>status</th>
            <th>Phone number</th>
            <th>Address</th>
            <th>action</th>
            <th>History</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user) => <tr key={user.id}>
            <th>{user.id}</th>
            <th>{user.userName}</th>
            <th>{user.status}</th>
            <th>{user.phoneNumber}</th>
            <th>{user.address}</th>
            <th><button className='btn btn-danger' onClick={() =>handleBlock(user.id)}>Block</button></th>
            <th><button
             type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">History</button></th>
<th></th>
          </tr>
          )}

        </tbody>
      </table>
      <History listUser={listUser}/>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  )
}
