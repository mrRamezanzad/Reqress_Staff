export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 rounded-bottom sticky-top shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="">Reqress Staff</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            {/* fix: add tabindex */}
                            <a id="signup" className="nav-link text-danger" href="#" data-bs-toggle="modal" data-bs-target="#more-info-modal">sign up</a>
                            {/* <a id="signup" className="nav-link text-danger" href="#" tabindex="-1" data-bs-toggle="modal" data-bs-target="#more-info-modal">sign up</a> */}
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input id="search-input" className="form-control me-2 " type="search" placeholder="Press / to Search " aria-label="Search" />
                        <button id="search-button" className="btn btn-outline-success">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
} 