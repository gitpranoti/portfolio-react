import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Yatri Tourism website",
        img: "./yatri.png",
        desc: "Creating a working website for Yatri Tourism Pune. Worked on MERN technology for creating full stack website,with API fetching. Creating client side, admin side and domain connection with deployment.",
        technologies: ["HTML & CSS","React", "MongoDB", "JavaScript","NodeJs","ExpressJs"]
    },
    {
        id: 2,
        title: "Currency Converter",
        img: "./cc.png",
        desc: "'Currency Converter' project is a user-friendly web application where users can select two countries, input a number, and get the converted currency value after clicking the 'Get Exchange Rate' button. The app leverages an API to fetch real-time exchange rates, ensuring accurate and up-to-date conversions. This project is useful for anyone needing quick and reliable currency conversions, such as travelers or business professionals.",
        technologies: ["HTML & CSS", "JavaScript"],
    },
    {
        id: 3,
        title: "Bootstrap Demo",
        img: "./b1.png",
        desc: "Bootstrap project is a demo website built using Bootstrap 5, showcasing the framework's responsive design capabilities. The website features a sliding hero section that immediately captures attention, followed by sections displaying items with detailed information. It also includes a well-designed 'Contact Me' page, allowing users to get in touch easily. This project highlights Bootstrap's flexibility in creating modern, professional, and mobile-responsive websites.",
        technologies: ["HTML & CSS", "Bootstrap5"]
     },
    {
        id: 4,
        title: "Stone Paper Scissor Game",
        img: "./sps.png",
        desc: "'Stone Paper Scissors' game is an interactive web-based project where users can play against the computer. The game features three images representing the options: stone, paper, and scissors. Players choose one, while the computer randomly selects its choice. After each round, the game determines the winner and updates the win counts for both the user and the computer.",
        technologies: ["HTML & CSS", "JavaScript"]
    },
    {
        id: 6,
        title: "Amazon clone",
        img: "./Amclone.png",
        desc: "'Amazon Clone' project is a replica of the Amazon homepage, featuring the exact design and layout. This project demonstrates your ability to recreate complex website interfaces, focusing on replicating the structure, styling, and functionality of a well-known e-commerce platform's main page. It showcases your web development skills in creating visually identical clones of real-world websites.",
        technologies: ["HTML & CSS"]
    },
]

const Single = ({item}) =>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref,
        // offset:[ "start start","end start"],
        });

    const y = useTransform(scrollYProgress,[0,1],[-300, 300])

    return <section >
        <div className="container">
            <div className="wrapper">
            <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
                <h2 >{item.title}</h2>
                <p>{item.desc}</p>
                <div className="technologies">
                            {item.technologies.map((tech, index) => (
                                <span key={index} className="tech">{tech}</span>
                            ))}
                        </div>
            </motion.div>
        </div>
        </div>
    </section>
    
};

const Portfolio = () => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({target: ref, offset:["end end", "start start"],});
    const scaleX = useSpring(scrollYProgress,{stiffness: 100, damping: 30,})
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Projects</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
      {items.map((item) =>(
        <Single item={item} key={item.id}/>
      ))} 
    </div>
  )
}

export default Portfolio
