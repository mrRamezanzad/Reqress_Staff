import { useEffect, useState } from 'react';
import './Nav.css'
import Link from 'next/link';
import $ from 'jquery'

export interface NavProps {
    onSearch: Function;
}

export default function Nav({ onSearch }: NavProps) {
    const [isSearching, setIsSearching] = useState(false)

    useEffect(() => {
        window.addEventListener('keyup', keyUpEventHandler);
        $("#search-input").on('focus', () => setIsSearching(true));
        $("#search-input").on('blur', () => setIsSearching(false));

        return () => {
            window.removeEventListener('keyup', keyUpEventHandler);
        }
    })

    const keyUpEventHandler = (event: KeyboardEvent) => {
        const pressedKey = event.key

        if (isSearching) {
            const shouldExitSearch = pressedKey === "Escape"

            if (shouldExitSearch) {
                $("#search-input").trigger('blur')
                return setIsSearching(false)
            }

            return search()
        }

        const shouldStartSearch = pressedKey === "/" || pressedKey === "?"
        if (shouldStartSearch) {
            $("#search-input").trigger("focus")
            return setIsSearching(true);
        }
    };

    const search = () => {
        const searchQuery = $("#search-input")?.val()?.toString() || ''
        onSearch(searchQuery)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 rounded-bottom sticky-top shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" href="">Reqress Staff</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="#">Action</Link></li>
                                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link id="signup" className="nav-link text-danger" tabIndex={1} href="#" data-bs-toggle="modal" data-bs-target="#signup-modal">sign up</Link>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={e => {
                        e.preventDefault();
                        search();
                    }}>
                        <input id="search-input" className="form-control me-2 " type="search" placeholder="Press / to Search " aria-label="Search" />
                        <div id="search-button" className="btn btn-outline-success">Search</div>
                    </form>
                </div>
            </div>
        </nav>
    )
} 