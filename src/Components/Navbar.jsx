import React from 'react'
import { Link } from 'react-router-dom';
import ButtonOrder from './ButtonOrder';

const Navbar = () => {
    return (
        <>


            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Aman Pizza
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse justify-content-around navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link mx-2 active" aria-current="page" to="/">
                                Home
                            </Link>
                            <Link className="nav-link mx-2" to="/all-products">
                                All Products
                            </Link>
                            <Link className="nav-link mx-2" to="/dashboard">
                                Dashboard
                            </Link>
                            <Link className="nav-link mx-2" to="/add">
                                Add Product
                            </Link>

                        </div>
                        <div className='d-flex fles-direction-row'>
                            <a className="nav-link" aria-disabled="true">
                                <ButtonOrder />
                            </a>

                        </div>

                    </div>
                </div>
            </nav>



        </>
    )
}

export default Navbar