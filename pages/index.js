import Layout from '../components/Layout'
import projects from '../config/projects'
import ProjectTile from '../components/ProjectTile'

const Index = (props) => {

  return (
    <Layout>
      <div className='main'>
        <div className='introduction'>
          <div className='main-intro'>
            Hi I'm Noah, <br />I like building stuff online.
          </div>
          <div className='sub-intro'>
            Check out my projects <a href='#my-work' id='below'>below</a>, <br />
            and feel free to <a href='mailto:noahmaizels@protonmail.com'>get in touch</a>.
          </div>
        </div>
        <div className='section-title' id='my-work'>My Work</div>
        <div className='projects-container'>
          <div className='grid-container'>
            {Object.keys(projects).map((item, i) => {
              return <ProjectTile key={i} project={projects[item]}/>
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
      
      .introduction {
        padding: 0px 50px;
      }
      .section-title {
        padding-bottom: 50px;
        text-align: center;
        font-size: 3rem;
      }
      .projects-container {
        display: flex;
        justify-content: center;
        border: 2px solid rgba(173,173,173,0.37);
        -webkit-box-shadow: 6px 6px 6px 0px rgba(173,173,173,0.67);
        -moz-box-shadow: 6px 6px 6px 0px rgba(173,173,173,0.67);
        box-shadow: 6px 6px 6px 0px rgba(173,173,173,0.67);
        padding: 50px 50px;
        border-radius: 10px;
        width: 1100px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 200px;
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
        margin-bottom: 100px;
      }
      .main {
        margin-top: 50px;
      }
      @media(max-width: 1100px){
        .grid-container {
          grid-template-columns: 300px 300px;
        }
        .projects-container{
          width: 800px;
        }
      }

      @media(max-width: 750px){
        .grid-container {
          grid-template-columns: 300px;
        }
        .projects-container{
          width: 350px;
        }
      }
      `}</style>
    </Layout>
  )
}

export default Index