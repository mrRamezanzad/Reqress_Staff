import Image from 'next/image';
import Modal from '../modal/Modal';
import { User } from '../main/Main';

export interface UpdateModalProps {
  user: User | null;
  onUserDelete: Function;
}

export default function UserDetailModal({ user, onUserDelete }: UpdateModalProps) {
  const onDeleteHandler = () => {
    onUserDelete(user?.id)
  }

  const header = <div className="modal-header ">
    <h5 className="modal-title text-capitalize" id="exampleModalLabel">informations of employee </h5>
    <button type="button" className="btn btn-lg text-white fs-5 " data-bs-dismiss="modal" aria-label="Close">X</button>
  </div>

  const body = <div className="modal-body">
    <div className="col-12 ">
      <div className="card bg-dark">
        <Image src={user?.avatar || ''} className="card-img-top" alt="..." width={250} height={250} />
        <div className="card-body fw-bold bg-dark">
          <p className="card-text ">id: <span id="id">{user?.id}</span></p>
          <p className="card-text">first name: <span id="first-name">{user?.first_name}</span></p>
          <p className="card-text">last name: <span id="last-name">{user?.last_name}</span></p>
          <p className="card-text">email: <span id="email">{user?.email}</span></p>
        </div>
      </div>
    </div>
  </div>

  const footer = <div className="modal-footer">
    <button id="update-user" type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#user-update-modal">Update</button>
    <button id="delete-user" type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={onDeleteHandler}>Delete</button>
  </div>

  return <Modal id='user-detail-modal' header={header} body={body} footer={footer} />;
}