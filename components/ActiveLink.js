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
        text-decoration: none;
        transition: all 200ms linear;
        color: #23323B;
        border-radius: 2px;
        padding: 8px 5px;
        display: block;
      }
      a:visited {
        color: #23323B;
      }
      a:hover {
        color: #984B48;
        background-color: #E9C87B;
      }
      `}</style>
    </a>
  )
}

export default ActiveLink
