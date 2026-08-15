import { useEffect, useState } from 'react'
import {
  faGitAlt,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faChartLine, faDatabase } from '@fortawesome/free-solid-svg-icons';
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
<p>Hi, I'm Sharanya Mundakana — a Senior Software Engineer who enjoys building systems that solve real problems at scale. Over the past 7 years, I've worked across backend engineering, full-stack development, distributed systems, data analytics, and fraud detection, which has given me the opportunity to approach problems from both an engineering and analytical perspective.</p>

<p>My journey at Target has taken me through several different areas of technology. I began by building backend microservices and event-driven systems for enterprise order management, then moved into platform engineering and computer vision applications, where I worked on internal tools, dashboards, APIs, and production systems used to support large-scale retail operations.</p>

<p>One of the things I enjoy most about engineering is seeing how technology evolves around a problem. My work has ranged from improving deployment automation and system reliability to partnering with machine learning engineers on computer vision solutions. Along the way, I've worked with technologies such as Java, Python, Spring Boot, React, Node.js, Kafka, PostgreSQL, Docker, Kubernetes, Splunk, and Trino.</p>

<p>More recently, my work has moved deeper into data analytics and fraud detection. I enjoy digging into large datasets, identifying patterns that are difficult to spot, and turning those insights into production solutions. Today, I design and maintain fraud detection strategies and analytical workflows across areas such as gift card abuse, refund fraud, account abuse, and other retail fraud patterns. Some of these systems collectively support more than 300K fraud detections every month.</p>

<p>What I value most is being able to work across the entire problem-solving process — understanding an ambiguous problem, exploring the data, designing a solution, building it, validating it, and continuously improving it once it reaches production. I also enjoy collaborating with people from different backgrounds, mentoring engineers, sharing what I've learned, and helping teams make thoughtful technical decisions.</p>

<p>I studied Computer Science at Bangalore Institute of Technology, where my curiosity for building things started long before my professional career. Since then, I've continued learning through hands-on projects and certifications across data analytics, engineering, product ownership, project management, and cybersecurity.</p>

<p>Outside of work, music is a big part of my life. I'm a vocalist and enjoy performing with a local band. I also spend time mentoring students and early-career professionals, especially those trying to navigate the first few years of their careers in technology.</p>

</div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faDatabase} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faChartLine} color="#28A4D9" />
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
