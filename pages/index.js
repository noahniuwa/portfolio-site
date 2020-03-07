import Layout from '../components/Layout'
import projects from '../config/projects'
import ProjectTile from '../components/ProjectTile'

const Index = (props) => {
  return (
    <Layout>
      <div className='main'>
        <div className='main-intro'>
          Hi I'm Noah, <br />I like building stuff online.
        </div>
        <div className='sub-intro'>
          Check out my projects <a>below</a>, <br />
          and feel free to <a href='mailto:noahmaizels@protonmail.com'>get in touch</a>.
        </div>
        <div className='section-title'>My Work</div>
        <div className='projects-container'>
          <div className='grid-container'>
            {Object.keys(projects).map((item, i) => {
              return <ProjectTile key={i} project={projects[item]}/>
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
       
      .section-title {
        padding-top: 100px;
        padding-bottom: 50px;
        text-align: center;
        font-size: 3rem;
      }
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
      .main-intro {
        font-size: 2.5rem;
        line-height: 2.7rem;
        margin-bottom: 15px;
      }  
      a {
        font-size: inherit;
        text-decoration: underline;
      }
      a:hover {
        cursor: pointer;
      }
      .sub-intro {
        font-size: 1.5rem;
        max-width: 400px;
      }
      .main {
        margin-top: 50px;
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

export default Index