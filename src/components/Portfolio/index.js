import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Ecommerce from "../../assets/images/images.jpg"
import Bitcoin from "../../assets/images/bitcoin.png"
import AirDraw from "../../assets/images/airdraw.png"
import Cryptoverse from "../../assets/images/cryptoverse.png"
import Facemesh from "../../assets/images/facemesh.png"
import GreenConnect from "../../assets/images/greenconnect.png"
import Blog from "../../assets/images/blog.png"
import ICAgile from "../../assets/images/icagile.png"
import Python from "../../assets/images/python.png"
import Accenture from "../../assets/images/accenture.png"
import More from "../../assets/images/more.png"
const Portfolio = () => { 
  const [letterClass, setLetterClass] = useState('text-animate');
  const [portfolio, setPortfolio] = useState([
    {
      name: 'STYLE HOME',
      image: Ecommerce,
      description: 'An e-commerce website with modern design and animations, advanced cart and checkout functionalities, and payment integration implements features such as adding/editing products, search, filtering.',
      url: 'https://ecommerce-website-sharanya.vercel.app/',
    },
    {
      name: 'BITCOIN 2.0',
      image: Bitcoin,
      description: 'A blockchain-powered cryptocurrency with the key features of a cryptocurrency, including transactions, mining, and a blockchain explorer.',
      url: 'https://github.com/SharanyaMBhat/cryptochain-tutorial',
    },
    {
      name: 'AIR DRAW',
      image: AirDraw,
      description: 'Multiplayer application which lets users draw in Augmented Reality. Real-time sync on all devices connected. Built using Unity3d, ARCore, Unity Multiplayer/ UNet',
      url: 'https://www.irjet.net/archives/V6/i6/IRJET-V6I6530.pdf',
    },
    {
      name: 'CRYPTOVERSE',
      image: Cryptoverse,
      description: 'An app to explore the world of cryptocurrency. Built using React and RapidAPI.',
      url: 'https://sharanya-crypto.netlify.app/',
    },
    {
      name: 'FACE MESH',
      image: Facemesh,
      description: 'A face landmark detector app allows you to detect several different points on your face that together make-up your eyes, mouth, ears, nose built using Tensorflow.JS and React',
      url: 'https://sharanya-faceapp.netlify.app/',
    },
    {
      name: 'GREEN CONNECT',
      image: GreenConnect,
      description: 'A platform that connects Target directly to various NGOs which would reduce and eliminate wastage through donations. Built for a Hackathon in Target using React, Node and PostgreSQL.',
      url: 'https://www.target.com/',
    },
    {
      name: 'BLOG WEBSITE',
      image: Blog,
      description: 'A fully responsive blog application with featured posts, categories, author information and comments built using React JS, NextJS, Tailwind CSS, GraphQL, and GraphCMS',
      url: 'https://blog-802pm3fqp-sharanyambhat.vercel.app/',
    },
    // Add more projects as needed
  ]);
  const [certificate, setCertificate] = useState([
    {
      name: 'ICAgile Product Owner',
      image: ICAgile,
      description: 'ICAgile Certified Professional - Agile Product Ownership - ICAgile',
      url: 'https://www.icagile.com/credentials/b10d91c6-7e31-4c89-b70e-e09592b1db77',
    },
    {
      name: 'Python for Data Science',
      image: Python,
      description: 'Issued by NPTEL',
      url: 'https://nptel.ac.in/?q=nptel21cs78s1319128503057308',
    },
    {
      name: 'Accenture Developer Program',
      image: Accenture,
      description: 'Issued by Accenture',
      url: 'https://insidesherpa.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/PxenP4rHNE6Bh4nQz_Accenture%20Nordic_ZXMKx7AKFzNhiHLMA_completion_certificate.pdf',
    },
    {
      name: 'More!',
      image: More,
      description: 'View other certifications',
      url: 'https://www.linkedin.com/in/sharanya-mundakana/details/certifications/',
    },
   
    // Add more projects as needed
  ]);
  useEffect(() => {
      const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 3000);

      return () => {
          clearTimeout(timer);
      }
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://example.com/portfolio');
      const data = await response.json();
      setPortfolio(data);
    };

    fetchData();
  }, []);

//   useEffect(() => {
//     getPortfolio();
// }, []);

// const getPortfolio = async () => {
// }

  const renderPortfolio = (portfolio) => {
    return (
        <div className="images-container">
            {
                portfolio.map((port, idx) => {
                    return (
                        <div className="image-box" key={idx}>
                            <img 
                            src={port.image}
                            className="portfolio-image"
                            alt="portfolio" />
                            <div className="content">
                                <p className="title">{port.name}</p>
                                <h4 className="description">{port.description}</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open(port.url)}
                                >View</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}


return (
    <>
        <div className="container portfolio-page">
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Projects".split("")}
                    idx={15}
                />
            </h1>
            <div>{renderPortfolio(portfolio)}</div>
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Certificates".split("")}
                    idx={15}
                />
            </h1>
            <div>{renderPortfolio(certificate)}</div>
        </div>

        <Loader type="pacman" />
    </>
);
}

export default Portfolio;