import Image from 'next/image';
import Modal from '../modal/Modal';

export default function UpdateModal() {
  const header = <div className="modal-header ">
    <h5 className="modal-title text-capitalize" id="exampleModalLabel">informations of employee </h5>
    <button type="button" className="btn btn-lg text-white fs-5 " data-bs-dismiss="modal" aria-label="Close">X</button>
  </div>

  const body = <div className="modal-body">
    <div className="col-12 ">
      <div className="card bg-dark">
        <Image src="/assets/user2.jpg" className="card-img-top" alt="..." width={250} height={250} />
        <div className="card-body fw-bold bg-dark">
          <p className="card-text ">id: <span id="id">2</span></p>
          <p className="card-text">first name: <span id="first-name">saeed</span></p>
          <p className="card-text">last name: <span id="last-name">tehran</span></p>
          <p className="card-text">email: <span id="email">saeedstone@gmail.com</span></p>
        </div>
      </div>
    </div>
  </div>

  const footer = <div className="modal-footer">
    <button id="update-user" type="button" className="btn btn-warning">Update</button>
    <button id="delete-user" type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
  </div>

  return (
    <Modal id='update-modal' header={header} body={body} footer={footer} />
  )
}