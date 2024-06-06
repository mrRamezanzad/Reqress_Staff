import Modal from '../modal/Modal';
import { User } from '../main/Main';
import { useEffect, useRef, useState } from 'react';

export interface UserUpdateModalProps {
  user: User | null;
  onUserUpdate: Function;
}

export default function UserUpdateModal({ user, onUserUpdate }: UserUpdateModalProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const updateHandler = (formData: FormData) => {
    const rawFormData = {
      id: user?.id,
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      avatar: formData.get('avatar')
    }

    onUserUpdate(rawFormData);

    formRef.current?.reset();
  }

  const header = <div className="modal-header ">
    <h5 className="modal-title text-capitalize" id="exampleModalLabel">informations of employee</h5>
    <button type="button" className="btn btn-lg text-white fs-5 " data-bs-dismiss="modal" aria-label="Close">X</button>
  </div>

  const body = <form className=" bg-dark" action={updateHandler} ref={formRef}>
    <div className="mb-3">
      <label className="form-label">user id: </label>
      <input type="text" className="form-control" name="id" defaultValue={user?.id} aria-describedby="emailHelp" disabled />
    </div>
    <div className="mb-3">
      <label className="form-label">first name: </label>
      <input type="text" className="form-control" name="first_name" defaultValue={user?.first_name} />
    </div>
    <div className="mb-3">
      <label className="form-label">last name: </label>
      <input type="text" className="form-control" name="last_name" defaultValue={user?.last_name} />
    </div>
    <div className="mb-3">
      <label className="form-label">email address: </label>
      <input type="text" className="form-control" name="email" defaultValue={user?.email} />
    </div>
    <div className="mb-3">
      <label className="form-label">picture URL: </label>
      <input type="text" className="form-control" name="avatar" defaultValue={user?.avatar} />
    </div>
    <button id="save-update" className="btn btn-outline-success offset-left my-3" data-bs-dismiss="modal" type='submit'> Save </button>
  </form>

  return (
    <Modal id='user-update-modal' header={header} body={body} />
  )
}