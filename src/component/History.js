import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function History(props) {
    const navigate = useNavigate()
    let {listUser} = props
    console.log("history",listUser);
  return (
    <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    {listUser.map((user) => 
    <div key={user.id} className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Order
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div>
      {user.history}
        
      </div>
      
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
    )}
    
      
   
  </div>
  )
}
