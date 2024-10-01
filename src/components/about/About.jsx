import "./about.scss"
const About = () => {
  return (
    <div className="about-me-container">
      {/* Profile Image Section */}
      <div className="profile-section">
        <img src="/people.webp" alt="Profile" className="profile-img" />
        <div className="abstract-background"></div>
      </div>

      {/* Bio and Education Section */}
      <div className="bio-education-section">
        <div className="bio">
          <h1 className="bio-title">Hi, I'm Pranoti</h1>
          <p className="bio-description">
            I'm a creative web developer specializing in building and designing
            user-focused websites. I thrive on solving complex problems with
            code, bringing digital experiences to life. My journey started with
            an interest in design, and I've since developed a deep understanding
            of frontend development.
          </p>

        </div>

        {/* Education Section */}
        <div className="education-section">
          <h2 className="education-title">Education</h2>
          <ul className="education-list">
          <li className="education-item">
              <span className="degree">Master of Science in Computer Science (2022 - 2024)</span>
              <span className="institution">Christ College Pune. (9.2 SGPA)</span>
            </li>
            <li className="education-item">
              <span className="degree">Bachelor of Science in Computer Science (2019 - 2022)</span>
              <span className="institution">Christ College Pune. (9.6 SGPA)</span>
            </li>
            <li className="education-item">
              <span className="degree">Higher Secondary Class "XII" (2017 - 2019)</span>
              <span className="institution">S.V.Union Jr College, Pune. (75.23%)</span>
            </li>
            <li className="education-item">
              <span className="degree"> Secondary Class "X" (2017)</span>
              <span className="institution">Shivraj Vidya Mandir School, Pune. (88.00%)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
