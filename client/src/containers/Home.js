import React from "react";

// Containers
import Languages from "./Languages";
import Main from "./Main";

// CSS
import "./Home.css";

//Particles.js
import Particles from './Particles'

// Images
import HTMLLogo from '../images/html-logo.png'
import CSSLogo from '../images/css-logo.png'
import JavaScriptLogo from '../images/javascript-logo.png'
import MongoDB from '../images/mongoDB-logo.png'
import ExpressJS from '../images/express-logo.png'
import ReactJS from '../images/react-logo.png'
import NodeJS from '../images/node-logo.png'
import AWS from '../images/aws-cloud-logo.png'
import Serverless from '../images/serverless-logo.png'
import Features from "./Features";

export default function Home() {

  const LangLogos = [
    {
      id: 1,
      src: HTMLLogo,
      alt: "html-logo"
    },
    {
      id: 2,
      src: CSSLogo,
      alt: "css-logo"
    },
    {
      id: 3,
      src: JavaScriptLogo,
      alt: "javascript-logo"
    },
    {
      id: 4,
      src: MongoDB,
      alt: "mongodb-logo"
    },
    {
      id: 5,
      src: ExpressJS,
      alt: "expressjs-logo"
    },
    {
      id: 6,
      src: ReactJS,
      alt: "React-logo"
    },
    {
      id: 7,
      src: NodeJS,
      alt: "Node-logo"
    },
    {
      id: 8,
      src: AWS,
      alt: 'aws-logo'
    },
    {
      id: 9,
      src: Serverless,
      alt: 'serverless-logo'
    }

  ]

  return (
    <>
      <div className="home-container">
        <Particles />
        <Main />
      </div>
      <div className="languages-container col-12">
        <div className="row">
          <h1 id="skills-header" className="skills-header text-center display-4 col-12">Technical Languages and Skills</h1>
          {LangLogos.map((image) => (
            <Languages
              {...LangLogos}
              key={image.id}
              src={image.src}
              alt={image.alt}
              id={image.alt} />
          ))}

        </div>
      </div>
      <Features />
    </>
  );
}