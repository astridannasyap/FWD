import { NavLink, Link } from "react-router";
import './Header.css';

export default function Header() {
    return (
        <>
        <header className="sticky-top bg-white border-bottom">
        <div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#0d6efd" }}></i>
              <span className="ms-2 fs-4 fw-bold">Bookstore</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><NavLink to="/" className="nav-link px-2" end>Home</NavLink></li>
            <li><NavLink to="/books" className="nav-link px-2">Book</NavLink></li>
            <li><NavLink to="/team" className="nav-link px-2">Team</NavLink></li>
            <li><NavLink to="/contact" className="nav-link px-2">Contact</NavLink></li>
          </ul>
          <div className="col-md-3 text-end">
            <Link to="/login">
              <button type="button" className="btn btn-outline-primary me-2">Login</button>
            </Link>
            <Link to="/register">
              <button type="button" className="btn btn-primary">Register</button>
            </Link>
          </div>
        </div>
      </header>
    </>
    )
}