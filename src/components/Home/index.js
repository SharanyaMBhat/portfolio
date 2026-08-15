import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['h', 'a', 'r', 'a', 'n', 'y', 'a', ',']
  const jobArray = [
   'A',
  'p',
  'p',
  's',
  ' ',
  '·',
  ' ',
  'A',
  'n',
  'a',
  'l',
  'y',
  't',
  'i',
  'c',
  's',
  ' ',
  '·',
  ' ',
  'D',
  'e',
  't',
  'e',
  'c',
  't',
  'i',
  'o',
  'n'
  ]

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const resumeUrl = 'https://drive.google.com/file/d/1h8EvQwE17-_sKh7_Paet9rFb_yGTS9w8/view?usp=sharing';
 
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={17}
            />
          </h1>
          <h2>Senior software engineer @ Target</h2>
          <Link to={resumeUrl} className="flat-button">
            DOWNLOAD RESUME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
