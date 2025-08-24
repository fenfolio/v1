import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      <motion.div className="badge"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        <span> My Projects </span>
      </motion.div>

      <motion.h2 className="title"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        A Look at My Work
      </motion.h2>

      <motion.p className="description"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        A portfolio of my development work, where I turn concepts into interactive and user-friendly digital experiences.
      </motion.p>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/blackjack.jpg')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Blackjack Game</h3>
          <p>
            The game uses DOM manipulation, conditional logic, and arrays to simulate card drawing, calculate totals, and display results.
          </p>
          <div className="project-tech">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/todo-list.jpg')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>ToDO List</h3>
          <p>
            A lightweight task manager designed to help organize daily activities, where users can add, complete, and remove tasks.
          </p>
          <div className="project-tech">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>React</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/color-scheme-generator.jpg')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Color Scheme Generator</h3>
          <p>
            A web app that allows users to choose a base color and generate a complete palette using the Color API.
          </p>
          <div className="project-tech">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>API integration</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
