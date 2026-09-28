const skillGroups = [
  {
    icon: 'bi-layout-text-window-reverse',
    title: 'Frontend Development',
    description: 'Building responsive and user-focused web interfaces.',
    skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Bootstrap'],
  },
  {
    icon: 'bi-server',
    title: 'Backend Development',
    description: 'Developing APIs and server-side applications.',
    skills: ['Python', 'Django', 'FastAPI', 'REST APIs'],
  },
  {
    icon: 'bi-database',
    title: 'Database',
    description: 'Working with structured data and application databases.',
    skills: ['PostgreSQL', 'Database Design', 'CRUD Operations'],
  },
  {
    icon: 'bi-tools',
    title: 'Tools & Other Skills',
    description: 'Tools and skills that support my development workflow.',
    skills: ['Git', 'GitHub', 'UI/UX', 'IT Support', 'Problem Solving'],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container py-lg-5">

        {/* Heading */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <p className="section-label">MY SKILLS</p>

            <h2 className="section-title">
              Technologies I use to <span>build solutions.</span>
            </h2>

            <p className="section-description mt-3">
              My technical skills span frontend and backend development,
              databases, development tools, and problem-solving.
            </p>
          </div>
        </div>

        {/* Skill cards */}
        <div className="row g-4">

          {skillGroups.map((group, index) => (
            <div className="col-md-6" key={index}>

              <div className="skill-card h-100">

                <div className="skill-icon">
                  <i className={`bi ${group.icon}`}></i>
                </div>

                <h3>{group.title}</h3>

                <p className="skill-description">
                  {group.description}
                </p>

                <div className="skill-tags">
                  {group.skills.map((skill, skillIndex) => (
                    <span className="skill-tag" key={skillIndex}>
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Development philosophy */}
        <div className="row mt-5 pt-4">

          <div className="col-12">

            <div className="learning-banner">

              <div className="learning-icon">
                <i className="bi bi-lightbulb"></i>
              </div>

              <div>
                <h4>Always learning, always building.</h4>

                <p>
                  Technology is constantly evolving, so I continuously
                  explore new tools and approaches while applying what
                  I learn through practical projects.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;