export function LandingPage(props) {
  let {skills, bio} = props
  return(
    
    <div className="landing-page">
      <div className="skills-container">
        {skills.map((s, i) => (
          <h3 className="skill">{s}</h3>
        ))}
      </div>
      <div className="about-me">
        <p>{bio[0]}</p>
        <p>{bio[1]}</p>
      </div>
    </div>
  )
}