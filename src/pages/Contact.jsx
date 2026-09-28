function Contact() {
  return (
    <>
      <section id="contact" className="contact-section py-5">
        <div className="container py-lg-5">

          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">

              <p className="section-label">GET IN TOUCH</p>

              <h2 className="section-title">
                Let's <span>connect.</span>
              </h2>

              <p className="section-description mx-auto mt-3">
                Whether you'd like to collaborate, discuss a project,
                or simply connect, I'd be happy to hear from you.
              </p>

            </div>
          </div>

          <div className="row g-4 justify-content-center">

            {/* Email */}
            <div className="col-md-4">

              <a
                href="mailto:muasyafrancis327@gmail.com"
                className="contact-card"
              >

                <div className="contact-icon">
                  <i className="bi bi-envelope"></i>
                </div>

                <h3>Email</h3>

                <p>
                  muasyafrancis327@gmail.com
                </p>

                <span>
                  Send me an email
                  <i className="bi bi-arrow-up-right ms-2"></i>
                </span>

              </a>

            </div>

            {/* GitHub */}
            <div className="col-md-4">

              <a
                href="https://github.com/Muasyafrank"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >

                <div className="contact-icon">
                  <i className="bi bi-github"></i>
                </div>

                <h3>GitHub</h3>

                <p>
                  github.com/Muasyafrank
                </p>

                <span>
                  View my code
                  <i className="bi bi-arrow-up-right ms-2"></i>
                </span>

              </a>

            </div>

            {/* LinkedIn */}
            <div className="col-md-4">

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >

                <div className="contact-icon">
                  <i className="bi bi-linkedin"></i>
                </div>

                <h3>LinkedIn</h3>

                <p>
                  Connect with me professionally
                </p>

                <span>
                  Visit my profile
                  <i className="bi bi-arrow-up-right ms-2"></i>
                </span>

              </a>

            </div>

          </div>

          {/* Final CTA */}
          <div className="row mt-5 pt-4">

            <div className="col-lg-10 mx-auto">

              <div className="contact-cta">

                <div>
                  <span className="cta-label">
                    HAVE A PROJECT OR IDEA?
                  </span>

                  <h3>
                    Let's build something meaningful.
                  </h3>

                  <p>
                    I'm always open to learning, collaborating,
                    and working on practical technology solutions.
                  </p>
                </div>

                <a
                  href="mailto:muasyafrancis327@gmail.com"
                  className="btn btn-light btn-lg px-4"
                >
                  Let's Talk
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">

        <div className="container">

          <div className="footer-main">

            <div>
              <a href="#" className="footer-brand">
                Francis<span>.</span>
              </a>

              <p>
                Business Information Technology Student
                <br />
                & Web Developer.
              </p>
            </div>

            <div className="footer-links">

              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>

            </div>

            <div className="footer-socials">

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
                href="mailto:muasyafrancis327@gmail.com"
                aria-label="Email"
              >
                <i className="bi bi-envelope"></i>
              </a>

            </div>

          </div>

          <div className="footer-bottom">

            <p>
              © {new Date().getFullYear()} Francis Muasya.
              All rights reserved.
            </p>

            <p>
              Built with React & Bootstrap.
            </p>

          </div>

        </div>

      </footer>
    </>
  );
}

export default Contact;