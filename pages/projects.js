import Layout from '../components/Layout'
import projects from '../config/projects'
import ProjectTile from '../components/ProjectTile'

const Projects = (props) => {
  return (
    <Layout>
      <div className='section-title'>My Projects</div>
      <div className='projects-container'>
        <div className='grid-container'>
          {Object.keys(projects).map((item, i) => {
            return <ProjectTile key={i} project={projects[item]}/>
          })}
        </div>
      </div>
      <style jsx>{`
      .projects-container {
        display: flex;
        justify-content: center;
      }
      .grid-container {
        display: grid;
        grid-template-columns: 300px 300px 300px;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
      }
      .section-title {
        padding-top: 100px;
        padding-bottom: 50px;
        text-align: center;
        font-size: 3rem;
      }
      @media(max-width: 1000px){
        .grid-container {
          grid-template-columns: 300px 300px;
        }
      }
      @media(max-width: 650px){
        .grid-container {
          grid-template-columns: 300px;
        }
      }
      `}</style>
    </Layout>
  )
}

export default Projects