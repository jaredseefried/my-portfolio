import React from 'react';
import './Languages.css'

import HTMLLogo from '../../images/html-logo.png'
import CSSLogo from '../../images/css-logo.png'
import JavaScriptLogo from '../../images/javascript-logo.png'
import MongoDB from '../../images/mongoDB-logo.png'
import ExpressJS from '../../images/express-logo.png'
import ReactJS from '../../images/react-logo.png'
import NodeJS from '../../images/node-logo.png'
import AWS from '../../images/aws-cloud-logo.png'
import Serverless from '../../images/serverless-logo.png'
import Container from '../../components/Container/Container';

function Languages(props) {

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
    <Container className="languages-container col-12" id='languages-container'>
      <div className="row" style={{ padding: '25px 0px' }}>
        <h1 id="skills-header" className="skills-header text-center display-4 col-12">Technical Languages and Skills</h1>
        {LangLogos.map((image) => (
          <img
            {...LangLogos}
            key={image.id}
            src={image.src}
            alt={image.alt}
            id={image.alt}
            className='language-logo' />
        ))}
      </div>
    </Container>
  )
}

export default Languages;