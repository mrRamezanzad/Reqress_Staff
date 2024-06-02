export default function Modal() {
  return (
    // Fix: add style and tabindex
    <div className="modal fade" id="more-info-modal" aria-labelledby="moreInfoModalLabel" aria-hidden="true">
      {/* <div className="modal fade" id="more-info-modal" tabindex="-1" aria-labelledby="moreInfoModalLabel" style="display: none;" aria-hidden="true"> */}
      <div className="modal-dialog">
        <div className="modal-content bg-dark shadow-lg">
          <div className="modal-header ">
            <h5 className="modal-title text-capitalize" id="exampleModalLabel">informations of employee </h5>
            <button type="button" className="btn btn-lg text-white fs-5 " data-bs-dismiss="modal" aria-label="Close">X</button>
          </div>
          <div className="modal-body">
            <div className="col-12 ">
              <div className="card bg-dark">
                <img src="/assets/user2.jpg" className="card-img-top" alt="..." />
                <div className="card-body fw-bold bg-dark">
                  <p className="card-text ">id: <span id="id">2</span></p>
                  <p className="card-text">first name: <span id="first-name">saeed</span></p>
                  <p className="card-text">last name: <span id="last-name">tehran</span></p>
                  <p className="card-text">email: <span id="email">saeedstone@gmail.com</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button id="update-user" type="button" className="btn btn-warning">Update</button>
            <button id="delete-user" type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}