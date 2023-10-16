import './index.css'

const ProjectsShowCase = props => {
  const {details} = props
  const {name, imageUrl} = details

  return (
    <li className="app-list">
      <img src={imageUrl} className="list-img" alt={name} />
      <p className="list-text">{name}</p>
    </li>
  )
}
export default ProjectsShowCase
