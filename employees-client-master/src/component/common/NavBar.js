import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>
                    Employee Cards Demo
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item navbar-text">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to={"/view-employees"}>
                                View All Employees
                            </Link>
                        </li>
                        <li className="nav-item navbar-text">
                            <Link
                                className="nav-link"
                                to={"/add-employees"}>
                                Add New Employees
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
