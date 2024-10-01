import "./services.scss";
import { motion } from "framer-motion";

// Define skill objects with names and image paths
const skills = [
  {
    name: "HTML5",
    image: "./images/html5.png", // Path from the public folder
  },
  {
    name: "JavaScript",
    image: "./images/js.png", // Path from the public folder
  },
  {
    name: "CSS3",
    image: "./images/css3.png", // Add the respective image path
  },
  {
    name: "Node.js",
    image: "./images/nodejs.png", // Path from the public folder
  },
 
  {
    name: "React.js",
    image: "./images/reactjs.png", // Add the respective image path
  },
  {
    name: "MongoDB",
    image: "./images/mongodb.png", // Add the respective image path
  },
  {
    name: "C",
    image: "./images/c.png", // Add the respective image path
  },
];

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <h2>My Skills</h2>
        <p>There’s always something new to learn.</p>
        <hr />
      </motion.div>
      <motion.div className="listContainer">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skillCard"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Display the image */}
            <img src={skill.image} alt={`${skill.name} logo`} className="skillImage" />
            {/* Display the skill name */}
            <p className="skillName">{skill.name}</p> 
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
