function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container py-lg-5">

        {/* Heading */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <p className="section-label">FEATURED PROJECT</p>

            <h2 className="section-title">
              Something I've <span>built.</span>
            </h2>

            <p className="section-description mt-3">
              A practical web application built to solve a real-world
              problem using modern frontend and backend technologies.
            </p>
          </div>
        </div>

        {/* Main Project */}
        <div className="project-feature">

          {/* Project Visual */}
          <div className="project-visual">

            <div className="project-browser">

              <div className="browser-bar">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="browser-address">
                  hypersync
                </div>
              </div>

              <div className="project-preview">

                <div className="preview-sidebar">
                  <div className="preview-logo">
                    H
                  </div>

                  <div className="preview-nav active">
                    <i className="bi bi-grid"></i>
                  </div>

                  <div className="preview-nav">
                    <i className="bi bi-heart-pulse"></i>
                  </div>

                  <div className="preview-nav">
                    <i className="bi bi-people"></i>
                  </div>

                  <div className="preview-nav">
                    <i className="bi bi-gear"></i>
                  </div>
                </div>

                <div className="preview-content">

                  <div className="preview-heading">
                    <div>
                      <small>Dashboard</small>
                      <h5>Blood Pressure Overview</h5>
                    </div>

                    <div className="preview-avatar">
                      FM
                    </div>
                  </div>

                  <div className="preview-stats">

                    <div className="preview-stat">
                      <small>Systolic</small>
                      <strong>120</strong>
                      <span>mmHg</span>
                    </div>

                    <div className="preview-stat">
                      <small>Diastolic</small>
                      <strong>80</strong>
                      <span>mmHg</span>
                    </div>

                    <div className="preview-stat">
                      <small>Readings</small>
                      <strong>24</strong>
                      <span>This month</span>
                    </div>

                  </div>

                  <div className="preview-chart">
                    <div className="chart-line"></div>

                    <div className="chart-labels">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Project Information */}
          <div className="project-info">

            <span className="project-number">
              01 / FEATURED PROJECT
            </span>

            <h3>HyperSync</h3>

            <h4>
              Blood Pressure Management System
            </h4>

            <p>
              HyperSync is a web-based blood pressure management
              system designed to help patients and clinicians record,
              monitor, and manage blood pressure information.
            </p>

            <p>
              The system provides different experiences for
              administrators, clinicians, and patients, allowing
              users to interact with the platform according to their
              roles.
            </p>

            {/* Features */}
            <div className="project-features">

              <div>
                <i className="bi bi-check-circle"></i>
                Blood pressure recording
              </div>

              <div>
                <i className="bi bi-check-circle"></i>
                Patient trend monitoring
              </div>

              <div>
                <i className="bi bi-check-circle"></i>
                Role-based access
              </div>

              <div>
                <i className="bi bi-check-circle"></i>
                Data validation & CRUD
              </div>

            </div>

            {/* Technologies */}
            <div className="project-tech">

              <span>React</span>
              <span>Bootstrap</span>
              <span>FastAPI</span>
              <span>PostgreSQL</span>

            </div>

            {/* Links */}
            <div className="project-links">

              <a
                href="https://github.com/Muasyafrank"
                className="btn btn-teal px-4"
              >
                <i className="bi bi-github me-2"></i>
                View Code
              </a>

              <a
                href="https://github.com/Muasyafrank"
                className="btn btn-outline-dark px-4"
              >
                <i className="bi bi-box-arrow-up-right me-2"></i>
                Live Demo
              </a>

            </div>

          </div>

        </div>

        {/* Project takeaway */}
        <div className="row mt-5 pt-4">

          <div className="col-lg-9 mx-auto">

            <div className="project-takeaway">

              <div className="takeaway-icon">
                <i className="bi bi-code-square"></i>
              </div>

              <div>
                <h4>What I learned from this project</h4>

                <p>
                  HyperSync strengthened my understanding of full-stack
                  development, API integration, database management,
                  frontend development, and building systems around
                  real user requirements.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;