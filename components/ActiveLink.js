import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  console.log(router.pathname)
  const style = {
    color: router.pathname === href ? '#984B48' : 'black',
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
      <style jsx>{`
      a {
        text-decoration: underline;
        transition: all 200ms linear;
        color: #23323B;
        border-radius: 3px;
        padding: 8px 20px;
        display: block;
      }
      a:visited {
        color: #23323B;
      }
      a:hover {
        color: #984B48;
        background-color: rgba(233, 200, 123, .4);
        border-radius: 3px;
      }
      `}</style>
    </a>
  )
}

export default ActiveLink
