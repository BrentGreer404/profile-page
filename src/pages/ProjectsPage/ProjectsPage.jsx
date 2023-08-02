export function ProjectsPage(props){
  let projects = props.projects
  return(
    <div>
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((p) => (
          <div className="project">
            <a href={p.git} target="_blank">
              <h3>{p.title}</h3>
              {p.image ? <img src={p.image} alt="project"/> : <div></div>}
              <div className="project-notes">
                {p.notes.map((n) => (
                  <p>{n}</p>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}