function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container py-lg-5">

        {/* Section heading */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <p className="section-label">ABOUT ME</p>

            <h2 className="section-title">
              Turning technology into <span>practical solutions.</span>
            </h2>
          </div>
        </div>

        <div className="row g-5 align-items-center">

          {/* About text */}
          <div className="col-lg-7">

            <p className="about-lead">
              I'm Francis Muasya, a Business Information Technology
              student at Dedan Kimathi University of Technology with a
              strong interest in web development and technology.
            </p>

            <p>
              My journey into technology started with an interest in
              understanding how computers could be used to build solutions
              to real-world problems. Through my studies and personal
              projects, I have developed practical experience in frontend
              and backend web development.
            </p>

            <p>
              I enjoy working with technologies such as React, Bootstrap,
              Python, Django, FastAPI, and PostgreSQL. I am particularly
              interested in building systems that combine technology with
              business needs and improve the way people interact with
              digital solutions.
            </p>

            <p>
              Beyond coding, I enjoy learning from other developers,
              collaborating on projects, and sharing knowledge. These
              experiences have strengthened my communication, teamwork,
              and problem-solving skills.
            </p>

          </div>

          {/* Profile card */}
          <div className="col-lg-5">

            <div className="about-card">

              <div className="about-card-icon">
                <i className="bi bi-code-slash"></i>
              </div>

              <h3>What I enjoy building</h3>

              <ul className="about-list">
                <li>
                  <i className="bi bi-check2"></i>
                  Responsive web applications
                </li>

                <li>
                  <i className="bi bi-check2"></i>
                  Business technology solutions
                </li>

                <li>
                  <i className="bi bi-check2"></i>
                  User-focused interfaces
                </li>

                <li>
                  <i className="bi bi-check2"></i>
                  Data-driven applications
                </li>

                <li>
                  <i className="bi bi-check2"></i>
                  Practical problem-solving
                </li>
              </ul>

            </div>

          </div>

        </div>

        {/* Quick facts */}
        <div className="row mt-5 pt-4 g-4">

          <div className="col-md-4">
            <div className="about-stat">
              <span>01</span>
              <div>
                <h5>Education</h5>
                <p>BBIT at DeKUT</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-stat">
              <span>02</span>
              <div>
                <h5>Focus</h5>
                <p>Web Development</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-stat">
              <span>03</span>
              <div>
                <h5>Approach</h5>
                <p>Learn, Build & Share</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;