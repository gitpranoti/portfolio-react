import { useEffect, useState } from "react"
import "./cursor.scss"
import { motion } from "framer-motion"

const Cursor = () => {
    const [position, setPosition] = useState({x:0,y:0})

    useEffect(()=>{
        const mouseMove = (e) =>{
            setPosition({ x: e.clientX, y:e.clientY});
        };

        window.addEventListener("mouseover", mouseMove);
        return ()=> {
            window.removeEventListener("mouseover", mouseMove);
        };
    },[]);
    
  return (
    <motion.div className="cursor" animate={{x:position.x, y:position.y}}>
      
    </motion.div>
  )
}

export default Cursor
