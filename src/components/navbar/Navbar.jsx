import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
     <div className="wrapper">
     <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:1}}> Portfolio</motion.span>
      <div className="social">
        <a href="https://github.com/gitpranoti/yatritourism-proj" target="_blank"><img src="/github.png" alt="" target="#"></img></a>
        <a href="https://www.linkedin.com/in/pranoti-patil-b17a90250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
        <img src="/libnkedin.png" alt=""></img></a>
       </div>
     </div>
    </div>
  )
}

export default Navbar
