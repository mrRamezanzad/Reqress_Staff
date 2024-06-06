import Modal from '../modal/Modal';
import { User } from '../main/Main';

export interface UserUpdateModalProps {
  user: User | null;
}

export default function UserUpdateModal({ user }: UserUpdateModalProps) {
  const header = <div className="modal-header ">
    <h5 className="modal-title text-capitalize" id="exampleModalLabel">informations of employee</h5>
    <button type="button" className="btn btn-lg text-white fs-5 " data-bs-dismiss="modal" aria-label="Close">X</button>
  </div>

  let body = <form className=" bg-dark">
    <div className="mb-3">
      <label className="form-label">user id: </label>
      <input type="text" className="form-control " id="id" defaultValue={user?.id} aria-describedby="emailHelp" disabled />
    </div>
    <div className="mb-3">
      <label className="form-label">first name: </label>
      <input type="text" className="form-control" id="first_name" defaultValue={user?.first_name} />
    </div>
    <div className="mb-3">
      <label className="form-label">last name: </label>
      <input type="text" className="form-control" id="last_name" defaultValue={user?.last_name} />
    </div>
    <div className="mb-3">
      <label className="form-label">email address: </label>
      <input type="text" className="form-control" id="email" defaultValue={user?.email} />
    </div>
    <div className="mb-3">
      <label className="form-label">picture URL: </label>
      <input type="text" className="form-control" id="avatar" defaultValue={user?.avatar} />
    </div>
    <button id="save-update" className=" btn btn-outline-success offset-left my-3" data-bs-dismiss="modal"> Save </button>
  </form>

  return (
    <Modal id='update-modal' header={header} body={body} />
  )
}