import Head from "next/head";
import Link from 'next/link'
import ActiveLink from './ActiveLink'
import { useState } from 'react'


const Layout = (props) => {
  const [menu, setMenu] = useState('none')

  const onBurgerClick = () =>{
    if (menu === 'none'){
      setMenu('inline-block')
    }
    else {
      setMenu('none')
    }
    console.log(menu)
  }

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:400,400i,700,700i&display=swap" rel="stylesheet" />
      </Head>
      <nav>
        <div className='logo'>
          <img className='headshot' src='/headshot.jpg' />
          <div className='personal-info-container'>
            <div className='personal-info name'>
            <Link href='/'>
              <a>
                Noah Maizels
              </a>
            </Link>
            </div>
            <div className='personal-info job-title'>
              Web Developer
            </div>
          </div>
        </div>
        <img onClick={onBurgerClick} className='burger' src='burger-bar.png'/>
        <div className='links'>
          <ActiveLink href="/">
            Home
          </ActiveLink>
          <ActiveLink href="/projects">
            Projects
          </ActiveLink>
          <ActiveLink href="/contact">
            Contact
          </ActiveLink>
        </div>
      </nav>

      <div className="Content">{props.children}</div>
    <style jsx>{`
      .links {
        display: flex;
        min-width: 300px;
        justify-content: space-around;
        flex-direction: row;
      }
      nav {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
      }
      .logo {
        display: flex;
        align-items: flex-end;
        min-width: 200px;
        flex-wrap: nowrap;
      }
      .headshot {
        width: 50px;
        border-radius: 100%;
      }
      .personal-info-container{
        display: inline-block;
        margin-left: 15px;
        
      }
      .personal-info {
        line-height: 1rem;
      }
      .job-title {
        margin-top: 5px;
        color: #CCCCCC;
      }
      .burger {
        position: fixed;
        right: 70px;
        top: 70px;
        width: 30px;
        height: 30px;
      }
      @media(max-width: 800px) {
        .links {
          flex-direction: column;
          align-items: flex-end;
          display: ${menu}
        }
      }
      @media(min-width: 800px) {
        .burger {
          display: none;
        }
      }
    
    `}</style>
    </div>
  )
}

export default Layout