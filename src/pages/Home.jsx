function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top bg-white border-bottom">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Francis<span className="text-teal">.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>

              <li className="nav-item">
                <a className="btn btn-teal px-4" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100 pt-5">

            <div className="col-lg-7">
              <p className="hero-intro mb-3">
                Hello, I'm Francis Muasya
              </p>

              <h1 className="display-3 fw-bold mb-4">
                Business Information Technology Student
                <span className="text-teal"> & Web Developer.</span>
              </h1>

              <p className="lead text-secondary mb-4 hero-description">
                I build practical web solutions that solve real-world
                business and user problems.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-teal btn-lg px-4">
                  View My Projects
                </a>

                <a
                  href="/My cv.pdf"
                  className="btn btn-outline-dark btn-lg px-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-download me-2"></i>
                  Download CV
                </a>
              </div>

              <div className="social-links mt-5 d-flex gap-4">
                <a
                  href="https://github.com/Muasyafrank"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="mailto:your-email@example.com"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="hero-card">
                <div className="code-window">

                  <div className="code-header">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="code-content">
                    <p>
                      <span className="code-purple">const</span>{' '}
                      developer = {'{'}
                    </p>

                    <p className="ms-3">
                      name:{' '}
                      <span className="code-green">
                        "Francis Muasya"
                      </span>,
                    </p>

                    <p className="ms-3">
                      role:{' '}
                      <span className="code-green">
                        "Web Developer"
                      </span>,
                    </p>

                    <p className="ms-3">
                      stack:{' '}
                      <span className="code-green">
                        "React + Python"
                      </span>,
                    </p>

                    <p className="ms-3">
                      passion:{' '}
                      <span className="code-green">
                        "Building Solutions"
                      </span>
                    </p>

                    <p>{'}'};</p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tech stack strip */}
      <section className="tech-strip border-top border-bottom">
        <div className="container py-4">
          <div className="row text-center g-4">

            <div className="col-6 col-md-3">
              <i className="bi bi-filetype-js fs-3"></i>
              <p className="mb-0 mt-2">JavaScript</p>
            </div>

            <div className="col-6 col-md-3">
              <i className="bi bi-bootstrap fs-3"></i>
              <p className="mb-0 mt-2">Bootstrap</p>
            </div>

            <div className="col-6 col-md-3">
              <i className="bi bi-code-slash fs-3"></i>
              <p className="mb-0 mt-2">React</p>
            </div>

            <div className="col-6 col-md-3">
              <i className="bi bi-terminal fs-3"></i>
              <p className="mb-0 mt-2">Python</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;