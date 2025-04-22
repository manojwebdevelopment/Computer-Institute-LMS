import React from 'react';

export default function HomePage() {
  return (

      
      <>
      <section className="hero-section position-relative">
        <div className="hero-bg" style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://via.placeholder.com/1920x1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px'
        }}>
          <div className="container h-100 d-flex align-items-center">
            <div className="row">
              <div className="col-lg-8 col-md-10">
                <div className="hero-content text-white">
                  <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInUp">Build Your Tech Career with TechLearn Academy</h1>
                  <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">From beginner to professional developer with our comprehensive courses, expert instructors, and hands-on learning approach.</p>
                  <div className="d-flex gap-3 animate__animated animate__fadeInUp animate__delay-2s">
                    <a href="/courses" className="btn btn-primary btn-lg px-4 py-2">Explore Courses</a>
                    <a href="/free-trial" className="btn btn-outline-light btn-lg px-4 py-2">Free Trial</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Stats Cards */}
        <div className="container stats-container">
          <div className="row mt-n5">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="card border-0 shadow-lg rounded-3 p-4 text-center h-100">
                <div className="stat-icon rounded-circle bg-primary bg-opacity-10 p-3 mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0d6efd" className="bi bi-person-check" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                    <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                  </svg>
                </div>
                <h3 className="counter fw-bold" data-count="15000">15,000+</h3>
                <p className="text-muted">Happy Students</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="card border-0 shadow-lg rounded-3 p-4 text-center h-100">
                <div className="stat-icon rounded-circle bg-success bg-opacity-10 p-3 mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#198754" className="bi bi-laptop" viewBox="0 0 16 16">
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                  </svg>
                </div>
                <h3 className="counter fw-bold" data-count="120">120+</h3>
                <p className="text-muted">Professional Courses</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="card border-0 shadow-lg rounded-3 p-4 text-center h-100">
                <div className="stat-icon rounded-circle bg-danger bg-opacity-10 p-3 mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#dc3545" className="bi bi-trophy" viewBox="0 0 16 16">
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                  </svg>
                </div>
                <h3 className="counter fw-bold" data-count="98">98%</h3>
                <p className="text-muted">Job Placement Rate</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="card border-0 shadow-lg rounded-3 p-4 text-center h-100">
                <div className="stat-icon rounded-circle bg-warning bg-opacity-10 p-3 mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffc107" className="bi bi-mortarboard" viewBox="0 0 16 16">
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                  </svg>
                </div>
                <h3 className="counter fw-bold" data-count="45">45</h3>
                <p className="text-muted">Certified Instructors</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Courses Section */}
      <section className="popular-courses py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="section-title fw-bold mb-3">Our Popular Courses</h2>
              <p className="text-muted">Discover our most sought-after courses designed to equip you with skills that the industry demands.</p>
            </div>
          </div>
          
          <div className="row g-4">
            {/* Course Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm course-card">
                <div className="position-relative">
                  <img src="https://via.placeholder.com/600x400" className="card-img-top" alt="Web Development Course" />
                  <span className="position-absolute top-0 end-0 bg-primary text-white py-1 px-2 m-2 rounded">Bestseller</span>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="badge bg-light text-primary">Web Development</span>
                    <div className="course-rating">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc107" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <span className="ms-1">4.9 (2.5k)</span>
                    </div>
                  </div>
                  <h5 className="card-title mb-3">Full Stack Web Development Bootcamp</h5>
                  <p className="card-text text-muted">Master front-end and back-end technologies and become a job-ready full-stack developer.</p>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle overflow-hidden me-2" style={{width: '32px', height: '32px'}}>
                        <img src="https://via.placeholder.com/100" alt="Instructor" className="img-fluid" />
                      </div>
                      <span>Dr. Alex Johnson</span>
                    </div>
                    <span className="fw-bold text-primary">$89.99</span>
                  </div>
                </div>
                <div className="card-footer bg-white p-4 border-top-0">
                  <div className="d-flex justify-content-between text-muted small">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock me-1" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                      </svg>
                      12 Weeks
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mortarboard me-1" viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                      </svg>
                      5,280 Students
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart me-1" viewBox="0 0 16 16">
                        <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5h-2v12h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-5 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-5 3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"/>
                      </svg>
                      All Levels
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Course Card 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm course-card">
                <div className="position-relative">
                  <img src="https://via.placeholder.com/600x400" className="card-img-top" alt="Python Course" />
                  <span className="position-absolute top-0 end-0 bg-danger text-white py-1 px-2 m-2 rounded">Hot</span>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="badge bg-light text-primary">Python</span>
                    <div className="course-rating">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc107" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <span className="ms-1">4.8 (1.8k)</span>
                    </div>
                  </div>
                  <h5 className="card-title mb-3">Python for Data Science & Machine Learning</h5>
                  <p className="card-text text-muted">Learn Python and how to use it to analyze data, create beautiful visualizations, and implement ML algorithms.</p>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle overflow-hidden me-2" style={{width: '32px', height: '32px'}}>
                        <img src="https://via.placeholder.com/100" alt="Instructor" className="img-fluid" />
                      </div>
                      <span>Sarah Williams</span>
                    </div>
                    <span className="fw-bold text-primary">$79.99</span>
                  </div>
                </div>
                <div className="card-footer bg-white p-4 border-top-0">
                  <div className="d-flex justify-content-between text-muted small">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock me-1" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                      </svg>
                      10 Weeks
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mortarboard me-1" viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                      </svg>
                      4,120 Students
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart me-1" viewBox="0 0 16 16">
                        <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5h-2v12h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-5 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-5 3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"/>
                      </svg>
                      Intermediate
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Course Card 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm course-card">
                <div className="position-relative">
                  <img src="https://via.placeholder.com/600x400" className="card-img-top" alt="Cybersecurity Course" />
                  <span className="position-absolute top-0 end-0 bg-success text-white py-1 px-2 m-2 rounded">New</span>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="badge bg-light text-primary">Cybersecurity</span>
                    <div className="course-rating">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc107" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <span className="ms-1">5.0 (856)</span>
                    </div>
                  </div>
                  <h5 className="card-title mb-3">Ethical Hacking & Network Security</h5>
                  <p className="card-text text-muted">Learn to secure systems, identify vulnerabilities, and protect organizations from cyber threats.</p>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle overflow-hidden me-2" style={{width: '32px', height: '32px'}}>
                        <img src="https://via.placeholder.com/100" alt="Instructor" className="img-fluid" />
                      </div>
                      <span>Michael Chen</span>
                    </div>
                    <span className="fw-bold text-primary">$99.99</span>
                  </div>
                </div>
                <div className="card-footer bg-white p-4 border-top-0">
                  <div className="d-flex justify-content-between text-muted small">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock me-1" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                      </svg>
                      8 Weeks
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mortarboard me-1" viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                      </svg>
                      2,475 Students
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart me-1" viewBox="0 0 16 16">
                        <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5h-2v12h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-5 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-5 3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"/>
                      </svg>
                      Advanced
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <a href="/courses" className="btn btn-outline-primary btn-lg px-4">View All Courses</a>
          </div>
        </div>
      </section>
      </>
        
      );
    }