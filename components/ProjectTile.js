

const ProjectTile = ({project}) => {
  return (
    <a href={project[2]} target='_blank'>
      <div className='project'>
        <div className='project-title'>
          {project[1]}
        </div>
        <style jsx>{`
        .project-title {
          color: inherit;
          width: 300px;
          height: 300px;
          font-size: 1.2rem;
          border-radius: 10px;
          padding-left: 30px;
          padding-right: 30px;
        }
        .project-title:hover {
          background-color: rgba(0, 0, 0, .5);
          transition: 300ms linear;
          text-align: center;
          padding-top: 130px;
        }
        .project {
          background-image: url(${project[0]});
          background-size: cover;
          width: 300px;
          height: 300px;
          color: rgba(255, 255, 255, 0);
          border: 2px solid #E9C87B;
          border-radius: 10px;
        }
        .project:hover {
          transition: 100ms linear;
          color: rgba(255, 255, 255, 1);
        }
        `}</style>
      </div>
    </a>
  )
}

export default ProjectTile