import React from 'react'

function Header() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand fw-bolder fs-1" href="#">SURE<span className='text-danger'>NDER </span>S</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item active">
                            <a className="nav-link  mx-3 fw-bold fs-5" href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  mx-3 fw-bold fs-5" href="#project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3 fw-bold fs-5" href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
