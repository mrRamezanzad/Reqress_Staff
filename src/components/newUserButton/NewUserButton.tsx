export default function NewUserButton() {
  return (
    <div className="new-user d-flex justify-content-end">
      <button id="add-user-button" type="button" className="btn btn-dark btn-add" data-bs-toggle="modal" data-bs-target="#more-info-modal">
        Add New Employee
      </button>
    </div>)
}