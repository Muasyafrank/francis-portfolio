const experiences = [
  {
    period: 'January 2026 – June 2026',
    role: 'IT & Research Assistant',
    company: 'Kenya Investment Authority (KenInvest)',
    description:
      'Provided technical and research support within the IT and Research Department while contributing to technology-related activities and organizational operations.',
    responsibilities: [
      'Provided technical support and troubleshooting to staff.',
      'Set up computers, operating systems, printers, and peripherals.',
      'Assisted with software updates, user accounts, and workstation issues.',
      'Supported data cleaning, verification, and identification of data inconsistencies.',
      'Contributed technical support during the Kenya International Investment Conference (KIICO).',
      'Assisted with delegate registration, accreditation, and technical activities.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section py-5">
      <div className="container py-lg-5">

        {/* Heading */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <p className="section-label">EXPERIENCE</p>

            <h2 className="section-title">
              Where I've gained <span>practical experience.</span>
            </h2>

            <p className="section-description mt-3">
              My professional experience has allowed me to apply my
              technical knowledge in real-world environments while
              developing my communication and problem-solving skills.
            </p>
          </div>
        </div>

        {/* Experience timeline */}
        <div className="experience-timeline">

          {experiences.map((experience, index) => (
            <div className="experience-item" key={index}>

              {/* Timeline marker */}
              <div className="timeline-marker">
                <i className="bi bi-briefcase"></i>
              </div>

              {/* Content */}
              <div className="experience-card">

                <div className="experience-header">

                  <div>
                    <span className="experience-period">
                      {experience.period}
                    </span>

                    <h3>{experience.role}</h3>

                    <h4>{experience.company}</h4>
                  </div>

                  <div className="experience-number">
                    01
                  </div>

                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-divider"></div>

                <h5>Key Responsibilities</h5>

                <div className="responsibility-grid">
                  {experience.responsibilities.map(
                    (responsibility, responsibilityIndex) => (
                      <div
                        className="responsibility"
                        key={responsibilityIndex}
                      >
                        <i className="bi bi-check2"></i>

                        <span>{responsibility}</span>
                      </div>
                    )
                  )}
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Experience takeaway */}
        <div className="row mt-5 pt-4">

          <div className="col-lg-10 mx-auto">

            <div className="experience-highlight">

              <div className="highlight-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>

              <div>
                <h4>What this experience has taught me</h4>

                <p>
                  Working in a professional environment has strengthened
                  my ability to troubleshoot problems, communicate with
                  users, work as part of a team, and apply technical
                  knowledge to practical situations.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;