import Layout from '../components/Layout'

const Contact = (props) => {
  return (
    <Layout>
      <main>
        <div className='contact-card'>
          <div className='section-title'>
            Get in Touch
          </div>
          <div className='contact-links'>
            <a href='https://github.com/noahniuwa' target='_blank'>
              <img className='icon' src='githubblack.svg'/>
            </a>
            <a href='https://www.linkedin.com/in/noah-maizels/' target='_blank'>
              <img className='icon' src='linkedin.png'/>
            </a>
            <a href='https://medium.com/@noahmaizels' target='_blank'>
              <img className='icon' src='medium.png'/>
            </a>
            <a href='mailto:noahmaizels@protonmail.com' target='_blank'>
              <img className='icon' src='email.png'/>
            </a>
            <a href='tel:86-150-2175-9537' target='_blank'>
              <img className='icon' src='phone.png'/>
            </a>
          </div>
        </div>
      </main>
    
      <style jsx>{`
        main {
          width: 100vw;
        }
        .contact-links {
          display: flex;
          justify-content: space-around;
        }
        .icon {
          width: 70px;
          height: 70px;
          border-radius: 100%;
        }
        .section-title {
          padding-bottom: 50px;
          text-align: center;
          font-size: 3rem;
        }
        .contact-card {
          border: 2px solid rgba(173,173,173,0.37);
          -webkit-box-shadow: 6px 6px 6px 0px rgba(173,173,173,0.67);
          -moz-box-shadow: 6px 6px 6px 0px rgba(173,173,173,0.67);
          box-shadow: 6px 6px 6px 0px rgba(173,173,173,0.67);
          padding: 50px 100px;
          padding-bottom: 100px;
          border-radius: 10px;
          width: 1100px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 200px;
        }
      
        @media(max-width: 1100px){
        .contact-card{
          width: 800px;
        }
      }

      @media(max-width: 750px){
        .section-title {
          font-size: 2rem;
        }
        .contact-card{
          width: 300px;
        }
        .contact-links {
          display: grid;
          grid-template-columns: 120px 120px;
          grid-template-rows: 120px 120px;
          padding-left: 60px;
        }
      }
      `}</style>
    </Layout>
  )
}

export default Contact