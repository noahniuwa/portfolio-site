import Head from "next/head";
import Link from 'next/link'
import ActiveLink from './ActiveLink'
import { useState, useEffect } from 'react'


const Layout = (props) => {
  const [menu, setMenu] = useState('none')
  useEffect(() => {
    window.onclick = (event) => {
      if (event.target.id === 'burger'){
        if (menu === 'none'){
          setMenu('')
        }
        else {
          setMenu('none')
        }
      }
      else {
        setMenu('none')
      }
    }
  });

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
              <a className='name'>
                Noah Maizels
              </a>
            </Link>
            </div>
            <div className='personal-info job-title'>
              Web Developer
            </div>
          </div>
        </div>
        <div className='nav-menu'>
          <div className='links'>
            <div className='link-wrapper'>
              <ActiveLink href="/">
                Home
              </ActiveLink>
            </div>
            <div className='link-wrapper'>
              <ActiveLink href="/contact">
                Contact
              </ActiveLink>
            </div>
          </div>
          <img id='burger' className='burger' src='burger-bar.png'/>
        </div>
      </nav>
      <div className="Content">{props.children}</div>
    <style jsx>{`
      nav {
        padding-top: 50px;
        padding-left: 50px;
        padding-right: 50px;
      }
      .nav-menu {
        display: flex;
        min-width: 50px;
        justify-content: flex-end;
        flex-direction: row;
        align-items: center;
      }
      nav {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        align-items: center;
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
        transition: all 200ms linear;
      }
      .personal-info-container{
        display: inline-block;
        margin-left: 15px;
      }
      .personal-info {
        line-height: 1rem;
      }
      .name {
        font-size: 1rem;
      }
      .job-title {
        margin-top: 5px;
        color: #CCCCCC;
        font-size: 1rem;
        transition: all 200ms linear;
      }
      .burger {
        width: 30px;
        height: 30px;
      }
      @media(max-width: 1000px) {
        .links {
          display: ${menu};
          position: absolute;
          transform: translate(0px, 100px);
          border: 2px solid #984B48;
          width: 200px;
          background-color: white;
          border-radius: 5px;
        }
      }
      @media(min-width: 1000px) {
        .link-wrapper {
          margin-left: 30px;
        }
        .links {
          display: flex;
          transform: translate(0px, 0px);
          border: none;
          width: 300px;
          background-color: none;
          border-radius: 0px;
          justify-content: flex-end;
        }
        .burger {
          display: none;
        }
      }
      @media(max-width: 650px) {
        .logo {
          min-width: 100px;
        }
        .personal-info {
          line-height: .8rem;
        }
        .job-title {
          margin-top: 5px;
          color: #CCCCCC;
          font-size: .8rem;
        }
        .name {
          font-size: .8rem;
        }
        .headshot {
          width: 35px;
          border-radius: 100%;
        }
      }
    `}</style>
    </div>
  )
}

export default Layout