import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>Hi there! I'm Sharanya Mundakana, a passionate Software Engineer with over 5 years of experience in designing, developing, testing, and maintaining software systems. My expertise lies in a wide array of technologies including Python, Java 8, Javascript, SpringBoot, ReactJS, NodeJS, Oracle, PostgreSQL, MongoDB Kubernetes, Docker, Drone, HTML, CSS, Bootstrap, RabbitMQ, Kafka, Micrometer, Grafana, Jira and Git </p>
          <p> I've had the privilege of working with renowned companies like Target, where I've contributed to various projects, ensuring they meet all specified timelines and requirements. During my tenure at Target, I led the development and deployment of critical dashboards, such as Price Matching and Server Room, utilizing my skills in Python for image matching algorithms and UI development. Additionally, I've actively collaborated with teams, conducted code reviews, and mentored junior developers to uphold code quality and best practices.</p>
          <p>I was also involved in the Video Management Platform team, where I automated manual processes, significantly improving rollout speed and test coverage. My dedication to enhancing system efficiency and performance is reflected in the projects I've undertaken, such as the development of a cross-platform desktop application using ElectronJS, resulting in a 25% reduction in buffering time.</p>
          <p>I hold a Bachelor's degree in Computer Science from Bangalore Institute of Technology, where my final project on "3D Drawing with Augmented Reality" earned high praise. Additionally, I've pursued various certifications to augment my skill set, including Google Project Management Certificate, Google Advanced Data Analytics Certificate, and ICAgile Certified Professional in Agile Product Ownership, among others.</p>
          <p>Beyond my professional endeavors, I've actively pursued my interests in emerging technologies such as blockchain, evidenced by my internship experience at ShopConnect.Live. My dedication and contributions have been recognized through awards like the Winner of Advanced Cybersecurity Expedition by Target and securing the 1st place in the Target Women in India Hackathon.</p>
          <p>I'm excited about the possibilities that lie ahead in the world of technology and look forward to leveraging my skills and experiences to contribute meaningfully to future projects and endeavors.</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About