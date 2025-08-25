import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="badge">
            <span> Hi, i'm Fenilyn Tan👋🏻 </span>
          </motion.div>
          {/* <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Fenilyn Tan
          </motion.h1> */}
          <motion.h2 className="title" variants={fadeInUp}>
            {" "}
            Creative Front-End Web Developer
          </motion.h2>

          <motion.p className="description" variants={fadeInUp}>
            With 15+ years of experience building websites that are secure,
            accessible, and user-friendly. I enjoy bringing design and
            functionality together to deliver smooth user experiences.
          </motion.p>

          <motion.p className="description" variants={fadeInUp}>
            I’ve built WordPress websites for small to medium-sized businesses and collaborated on custom web applications using HTML5, CSS3, JavaScript, and frameworks like ReactJS and Next.js. I also create email campaigns with Mailchimp and
            Constant Contact, and recently completed a Cybersecurity
            certification.
          </motion.p>

          <motion.p className="description" variants={fadeInUp}>
            Currently, I'm building my portfolio and working on an exciting
            project.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/fenfolio/" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/fenilyntan/"
              target="_blank"
            >
              <i className="fab fa-linkedin"> </i>
            </motion.a>
            <motion.a href="https://www.uniquewebstudio.me/" target="_blank">
              <i className="fa-solid fa-link"> </i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(43, 32, 39, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
                wordWrap: "break-word",
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = { 
  codename: "fenfolio", 
  origin: "🌍 Somewhere between code and coffee",
  role: "Front-End Web Developer", 
  stack: {
  technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    frameworks: ["React", "Next.js", "TailwindCSS", "Bootstrap"],
    platforms: ["WordPress", "NodeJS"],
    databases: ["MySQL"],
    tools: {
      versionControl: ["Git", "SVN"],
      containerization: ["Docker"],
      buildTools: ["Webpack"],
      scripting: ["Bash", "Powershell"],
      emailMarketing: ["Mailchimp", "Constant Contact"],
      cloudPlatforms: ["Google Cloud", "AWS", "Microsoft Azure"],
      designTools: ["Adobe Photoshop", "Figma", "Canva"]
    }
  },
  missionStatement: 
  "Designing interactive, safe, and user-focused websites",
  availability: "Available for new opportunities",
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
