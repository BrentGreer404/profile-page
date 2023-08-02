import {gitHubIcon, gitHubUrl, linkedInIcon, linkedInUrl, docsIcon} from "./data/urls"
import { NavLink } from "react-router-dom"

export function Header() {
  return(
    <div className="header">
      <div className="social-links">
        <a className="social-link" href={linkedInUrl} target="_blank">
          <img src={linkedInIcon} alt="linked in" height={100} width={100}/>
        </a>
        <a className="social-link" href={gitHubUrl} target="_blank">
          <img src={gitHubIcon} alt="github" height={100} width={100}/>
        </a>
        <a className="social-link" href={gitHubUrl} target="_blank">
          <img src={docsIcon} alt="resume" height={100} width={100} title="Resume"/>
        </a>
      </div>
      <h1>Brent Greer</h1>
      <h2>Full-Stack Web Developer</h2>
      <nav className="nav-bar">
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="aboutme">About Me</NavLink> */}
        <NavLink to="projects">Projects</NavLink>
      </nav>
    </div>
  )
}