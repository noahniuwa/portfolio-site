

const ProjectTile = ({project}) => {
  return (
      <div className='project'>
        <div className='project-details'>
          {project.description}
          <div className='links-container'>
            <a href={project.site} target='_blank'>
              <div className='project-link detail'>
                Live Site
              </div>
            </a>
            <a href={project.code} target='_blank'>
              <img className='github detail' src='github.svg'/>
            </a>
          </div>
        </div>
        <style jsx>{`

        .links-container {
          padding-top: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .github {
          width: 40px;
          height: 40px;
          transform: translateY(3px)
        }
        .project-link {
          border: 2px solid white;
          border-radius: 7px;
          padding: 5px 10px;
          margin-right: 15px;
        }
        .project-details .detail{
          filter: opacity(0%)
        }
        .project-details:hover .detail{
          filter: opacity(100%);
          transition: 300ms linear;
        }
        .project-link {
          display: inline-block;
          color: white;
        }
        .project-details {
          color: inherit;
          width: 300px;
          height: 300px;
          font-size: 1.2rem;
          border-radius: 10px;
          padding-left: 30px;
          padding-right: 30px;
          border: 2px solid rgba(97, 83, 47, 0.207);
          -webkit-box-shadow: 3px 3px 3px 0px rgba(173,173,173,0.67);
          -moz-box-shadow: 3px 3px 3px 0px rgba(173,173,173,0.67);
          box-shadow: 3px 3px 3px 0px rgba(173,173,173,0.67);
        }
        .project-details:hover {
          background-color: rgba(0, 0, 0, .5);
          transition: 300ms linear;
          text-align: center;
          padding-top: 130px;
        }
        .project {
          background-image: url(${project.img});
          background-size: cover;
          width: 300px;
          height: 300px;
          color: rgba(255, 255, 255, 0);
          border-radius: 10px;
        }
        .project:hover {
          transition: 100ms linear;
          color: rgba(255, 255, 255, 1);
        }
        @media(max-width: 650px){
          .project-details {
            background-color: rgba(0, 0, 0, .5);
            transition: 300ms linear;
            text-align: center;
            padding-top: 130px;
          }
          .project  {
            transition: 100ms linear;
            color: rgba(255, 255, 255, 1);
          }
          .project-details .detail{
            filter: opacity(100%);
            transition: 300ms linear;
          }
        }
        `}</style>
      </div>
  )
}

export default ProjectTile