'use client'

import Modal from '../modal/Modal';

export interface SignupModalProps {
  onSubmit: Function;
}

export default function SignupModal({ onSubmit }: SignupModalProps) {
  function signupUser(formData: FormData) {
    const rawFormData = {
      id: formData.get('id'),
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      avatar: formData.get('avatar')
    }

    onSubmit(rawFormData)
  }

  const body = <form className=" bg-dark" action={signupUser}>
    <div className="mb-3">
      <label className="form-label">user id: </label>
      <input type="text" className="form-control " name="id" />
    </div>
    <div className="mb-3">
      <label className="form-label">first name: </label>
      <input type="text" className="form-control" name="first_name" />
    </div>
    <div className="mb-3">
      <label className="form-label">last name: </label>
      <input type="text" className="form-control" name="last_name" />
    </div>
    <div className="mb-3">
      <label className="form-label">email address: </label>
      <input type="text" className="form-control" name="email" />
    </div>
    <div className="mb-3">
      <label className="form-label">picture URL: </label>
      <input type="text" className="form-control" name="avatar" />
    </div>
    <button id="save-new" className=" btn btn-outline-success offset-left my-3" data-bs-dismiss="modal" type='submit'> Save </button>
  </form>

  return (<>
    <Modal id='signup-modal' body={body} />
  </>)
}