import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm fixed-top" style={{ background: 'linear-gradient(to right, #0062E6, #33AEFF)' }}>
            <div className="container">
                {/* Logo and Brand */}
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <span className="fw-bold text-dark">TechLearn Academy</span>
                </a>

                {/* Hamburger Menu Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-dark nav-link-hover-effect" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark nav-link-hover-effect" to="/courses">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark nav-link-hover-effect" to="/resources">Resources</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark nav-link-hover-effect" to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>


                    {/* Right-aligned items */}
                    <div className="d-flex align-items-center">
                        {/* Search Bar */}
                        <div className="input-group me-3 d-none d-lg-flex" style={{ maxWidth: '200px' }}>
                            <input type="search" className="form-control form-control-sm rounded-pill" placeholder="Search..." aria-label="Search" />
                            <button className="btn btn-sm btn-light rounded-pill ms-n3" type="button">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>

                        {/* Notification Bell */}
                        <div className="nav-item dropdown me-3">
                            <a className="nav-link text-dark position-relative" href="#" id="notificationDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-bell-fill fs-5"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    3
                                </span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end shadow-lg" aria-labelledby="notificationDropdown" style={{ minWidth: '300px' }}>
                                <li><h6 className="dropdown-header">Notifications</h6></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="me-3">
                                        <div className="bg-primary rounded-circle p-2">
                                            <i className="bi bi-calendar-event-fill text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fw-bold">New Course Available</span>
                                        <p className="mb-0 small text-muted">React Advanced is now available!</p>
                                        <small className="text-muted">5 mins ago</small>
                                    </div>
                                </a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="me-3">
                                        <div className="bg-success rounded-circle p-2">
                                            <i className="bi bi-check-circle-fill text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Assignment Graded</span>
                                        <p className="mb-0 small text-muted">You scored 92% on JavaScript Quiz</p>
                                        <small className="text-muted">Yesterday</small>
                                    </div>
                                </a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item text-center small text-primary" href="/notifications">View All Notifications</a></li>
                            </ul>
                        </div>

                        {/* User Profile Dropdown */}
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="rounded-circle overflow-hidden me-2 border border-2 border-white" style={{ width: '32px', height: '32px' }}>
                                    <img src="https://via.placeholder.com/150" alt="Profile" className="img-fluid" />
                                </div>
                                <span className="d-none d-lg-inline text-dark fw-semibold">John Doe</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userDropdown">
                                <li>
                                    <div className="dropdown-item text-center">
                                        <div className="rounded-circle overflow-hidden mx-auto mb-2" style={{ width: '80px', height: '80px' }}>
                                            <img src="https://via.placeholder.com/150" alt="Profile" className="img-fluid" />
                                        </div>
                                        <h6 className="mb-0">John Doe</h6>
                                        <small className="text-muted">student@example.com</small>
                                    </div>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/profile">
                                    <i className="bi bi-person me-2"></i> My Profile
                                </a></li>
                                <li><a className="dropdown-item" href="/my-courses">
                                    <i className="bi bi-collection me-2"></i> My Courses
                                </a></li>
                                <li><a className="dropdown-item" href="/progress">
                                    <i className="bi bi-graph-up me-2"></i> Learning Progress
                                </a></li>
                                <li><a className="dropdown-item" href="/settings">
                                    <i className="bi bi-gear me-2"></i> Settings
                                </a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item text-danger" href="/logout">
                                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;