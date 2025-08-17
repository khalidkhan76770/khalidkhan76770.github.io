// app.js
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#home">Khalid Khan</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#skills">Skills</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#certificates">Certificates</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div>
      <NavBar />

      <section className="hero" id="home">
        <div className="container">
          <h1>MD KHALID KHAN</h1>
          <p>Front-End Developer & Inventory Controller</p>
          <a href="#contact" className="btn btn-primary btn-lg">Contact Me</a>
        </div>
      </section>

      <section id="experience" className="py-5">
        <div className="container">
          <h2>Work Experience</h2>
          <div className="mb-4">
            <h5>Inventory Controller, SAFCO</h5>
            <p className="text-muted">Dubai, UAE — Feb 2024 - Apr 2025</p>
            <ul>
              <li>
                Streamlined inventory verification processes by conducting daily comparisons between system data and physical stock, reducing discrepancies by 92%, which enhanced overall stock accuracy and operational efficiency.
              </li>
              <li>
                Led cycle count initiatives and comprehensive audits that maintained over 98% inventory accuracy, directly supporting a £100K profit increase through precise stock management.
              </li>
              <li>
                Analyzed monthly inventory trends to forecast demand accurately, resulting in a 15% reduction in excess stock levels and improved turnover rates across key product categories.
              </li>
              <li>
                Enforced FIFO principles and monitored product movement to ensure items reached customer locations instead of being wasted, driving a 35% reduction in product loss and prompting timely order generation by the sales team.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h5>Systems Engineer, Infosys Limited</h5>
            <p className="text-muted">Bangalore, Karnataka — Dec 2021 - Nov 2023</p>
            <ul>
              <li>
                Orchestrated timely content updates and database upgrades, consistently achieving 100% adherence to project deadlines while maintaining uninterrupted service delivery across all platforms.
              </li>
              <li>
                Collaborated effectively with back-end developers, front-end developers, QA testers, and the CTO, reducing communication gaps by 30% and streamlining project workflows to prevent delays.
              </li>
              <li>
                Applied responsive design standards and optimized cross-browser compatibility, leading to a 15% boost in user engagement metrics across various devices and browsers.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h5>Front End Developer, Serventys Technologies</h5>
            <p className="text-muted">Mumbai, Maharashtra — Aug 2020 - Nov 2021</p>
            <ul>
              <li>
                Crafted visually compelling, responsive websites utilizing HTML, CSS, and Bootstrap that boosted user satisfaction scores by 30% and enhanced conversion rates by 15%, leading to improved customer engagement metrics.
              </li>
              <li>
                Implemented dynamic event-based functionalities with JavaScript, increasing user interaction rates by 25% and reducing bounce rates during peak traffic periods by 10%, thereby elevating overall site engagement.
              </li>
              <li>
                Developed robust back-end systems using PHP and MySQL to optimize data management processes, decreasing server response times by 20% and supporting a seamless user experience for over 50,000 monthly visitors.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education" className="bg-light">
        <div className="container">
          <h2>Education</h2>
          <h5>Mohammad Ali Jauhar University</h5>
          <p>Rampur, Uttar Pradesh — Bachelor of Technology</p>
          <p className="text-muted">Graduated Oct 2020</p>
        </div>
      </section>

      <section id="certificates">
        <div className="container">
          <h2>Certificates</h2>
          <ul>
            <li>INFOSYS - Infosys Certified Java SE Developer</li>
            <li>INFOSYS - Front End Development</li>
            <li>INFOSYS - Responsive Web Design</li>
          </ul>
        </div>
      </section>

      <section id="skills" className="bg-light">
        <div className="container">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>Proficiency in front-end technologies (HTML, CSS, JavaScript, React)</li>
            <li>Strong knowledge of Java frameworks (Spring Boot)</li>
            <li>Responsive Web Design</li>
            <li>Object Oriented Programming</li>
            <li>PHP & SQL</li>
            <li>CMS (WordPress, CommerceUP, Shopify)</li>
            <li>Microsoft Office (Excel, PowerPoint, Word)</li>
            <li>Performance optimization and scalability techniques</li>
            <li>Problem-solving and debugging skills</li>
            <li>CMS Web Development</li>
            <li>Photoshop & Typography</li>
            <li>Analytical skills and logical thinking</li>
            <li>Collaborative and team-oriented</li>
            <li>High-pressure environment management</li>
            <li>Excellent verbal and written communication</li>
          </ul>
        </div>
      </section>

      <section id="contact">
        <div className="container text-center">
          <h2>Contact</h2>
          <p>PATNA, INDIA | +917903883874</p>
          <p>
            <a href="mailto:khalid.khan.76770@gmail.com">khalid.khan.76770@gmail.com</a>
          </p>
          <p>
            <a
              href="https://github.com/khalidkhan76770"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/khalidkhan76770
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
