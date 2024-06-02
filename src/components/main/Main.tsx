export default function Main() {
  return (
    <main className="row">
      <div className="col-md-4 mb-3 ">
        <div className="card shadow">
          <img src="/assets/user1.jpg" className="card-img-top rounded-circle" alt="..." />
          <div className="card-body">
            <p className="card-text fw-bold">id: <span id="id">1</span></p>
            <p className="card-text">email: <span id="email">aliahmadi@gmail.com</span></p>
            <a user-id="1" data-bs-toggle="modal" data-bs-target="#more-info-modal" className="btn btn-dark main--cards--card--card-body--more-info">more info</a>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3 ">
        <div className="card shadow">
          <img src="/assets/user2.jpg" className="card-img-top rounded-circle" alt="..." />
          <div className="card-body">
            <p className="card-text fw-bold">id: <span id="id">2</span></p>
            <p className="card-text">email: <span id="email">saeedstone@gmail.com</span></p>
            <a user-id="2" data-bs-toggle="modal" data-bs-target="#more-info-modal" className="btn btn-dark main--cards--card--card-body--more-info">more info</a>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3 ">
        <div className="card shadow">
          <img src="/assets/user6.jpg" className="card-img-top rounded-circle" alt="..." />
          <div className="card-body">
            <p className="card-text fw-bold">id: <span id="id">3</span></p>
            <p className="card-text">email: <span id="email">sameasghari@gmail.com</span></p>
            <a user-id="3" data-bs-toggle="modal" data-bs-target="#more-info-modal" className="btn btn-dark main--cards--card--card-body--more-info">more info</a>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3 ">
        <div className="card shadow">
          <img src="/assets/user3.jpg" className="card-img-top rounded-circle" alt="..." />
          <div className="card-body">
            <p className="card-text fw-bold">id: <span id="id">4</span></p>
            <p className="card-text">email: <span id="email">imyusef@gmail.com</span></p>
            <a user-id="4" data-bs-toggle="modal" data-bs-target="#more-info-modal" className="btn btn-dark main--cards--card--card-body--more-info">more info</a>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3 ">
        <div className="card shadow">
          <img src="/assets/user4.jpg" className="card-img-top rounded-circle" alt="..." />
          <div className="card-body">
            <p className="card-text fw-bold">id: <span id="id">5</span></p>
            <p className="card-text">email: <span id="email">avamusicsamibeigi@gmail.com</span></p>
            <a user-id="5" data-bs-toggle="modal" data-bs-target="#more-info-modal" className="btn btn-dark main--cards--card--card-body--more-info">more info</a>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3 ">
        <div className="card shadow">
          <img src="/assets/user6.jpg" className="card-img-top rounded-circle" alt="..." />
          <div className="card-body">
            <p className="card-text fw-bold">id: <span id="id">6</span></p>
            <p className="card-text">email: <span id="email">avamusicsamibeigi@gmail.com</span></p>
            <a user-id="6" data-bs-toggle="modal" data-bs-target="#more-info-modal" className="btn btn-dark main--cards--card--card-body--more-info">more info</a>
          </div>
        </div>
      </div>
    </main>
  )
}