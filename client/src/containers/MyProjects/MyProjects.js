// Dependencies
import React from 'react';

// Components
import ProjectCard from '../../components/ProjectCard/ProjectCard';

// Images
import NoteApp from '../../images/note-app.jpg'
import Covid from '../../images/pandemic-tracker.jpg'
import ChatApp from '../../images/chat app.jpg'
import EmployeeDirectory from '../../images/employee-directory.jpg'
import EatDaBurger from '../../images/eat-da-burger.jpg'
import Weather from '../../images/weather-dashboard.jpg'
import ShelfIndulgence from '../../images/shelf-indulgence.jpg'
import MealMatcher from '../../images/meal-matcher.jpg'

// CSS
import './MyProjects.css'

function MyProjects() {

  const projects = [
    {
      src: NoteApp,
      className: 'note-app',
      id: 'note-app',
      title: 'Note Application',
      text: 'This Note application is build using React for the front end and uses "Serverless" framework to API to Amazon Web Services. The configuration allows a user to sign up and login and while logged in, users can save notes with a file attachment. AWS Congnito is used for user access management, Lambda functions access the AWS API Gateway to make CRUD, (Create, Read, Update and Delete), actions to collection in DynamoDB and an s3 bucket for the attachment. The users home page will render the notes saved in the database',
      tech: 'Amazon Web Services IAM Cognito S3 DynamoDB Amplify and Netlify | Serverless | React.js | Node.js ',
      alt: 'Note Application',
      site: 'https://my-serverless-note-app-to-aws.netlify.app/',
      github: 'https://github.com/jaredseefried/serverless-note-app',
    },
    {
      src: Covid,
      className: '234',
      id: '123',
      title: 'Pandemic Tracker',
      text: "The tracker is web application using MERN Stack, (MongoDB, Express.js, React.js and Node.js). The application uses React Globe and Generates Data from an external API to update the the state of the statistics container. Users can select a country and that specific countries Covid Data will populate. Additional API's to generate data by US State from a drop down menu as well as a New API that populates 2 news articles from the 'Covid' Keyword.",
      tech: '',
      alt: 'alt text'
    },
    {
      src: ChatApp,
      className: '234',
      id: '123',
      title: 'Chat Application',
      text: 'This real-time chat app is a Node.js application which uses Express.js and Socket.io. Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. The client will try to establish a WebSocket connection if possible, and will fall back on HTTP long polling if not.',
      tech: '',
      alt: 'alt text'
    },
    {
      src: EmployeeDirectory,
      className: '234',
      id: '123',
      title: 'Employee Directory',
      text: 'This real-time chat app is a Node.js application which uses Express.js and Socket.io. Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. The client will try to establish a WebSocket connection if possible, and will fall back on HTTP long polling if not.',
      tech: '',
      alt: 'alt text'
    },
    {
      src: EatDaBurger,
      className: '234',
      id: '123',
      title: 'Eat-Da-Burger',
      text: 'This real-time chat app is a Node.js application which uses Express.js and Socket.io. Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. The client will try to establish a WebSocket connection if possible, and will fall back on HTTP long polling if not.',
      tech: '',
      alt: 'alt text'
    },
    {
      src: Weather,
      className: '234',
      id: '123',
      title: 'Weather Dashboard',
      text: 'This real-time chat app is a Node.js application which uses Express.js and Socket.io. Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. The client will try to establish a WebSocket connection if possible, and will fall back on HTTP long polling if not.',
      tech: '',
      alt: 'alt text'
    },
    {
      src: ShelfIndulgence,
      className: '234',
      id: '123',
      title: 'Chat Application',
      text: 'This real-time chat app is a Node.js application which uses Express.js and Socket.io. Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. The client will try to establish a WebSocket connection if possible, and will fall back on HTTP long polling if not.',
      tech: '',
      alt: 'alt text'
    },
    {
      src: MealMatcher,
      className: '234',
      id: '123',
      title: 'Chat Application',
      text: 'This real-time chat app is a Node.js application which uses Express.js and Socket.io. Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. The client will try to establish a WebSocket connection if possible, and will fall back on HTTP long polling if not.',
      tech: '',
      alt: 'alt text'
    },

  ]

  return (
    <div className="projects-container col-12" id='projects-container'>
      <div className='projects-wrapper'>
        <div className='row'>
          <h1 className='display-3 text-center col-12 projects-title'>My Projects</h1>
        </div>
        <div className='row' style={{ margin: '0 auto', width: '90%' }}>
          {projects.map((item, i) => (
            <ProjectCard
              {...projects}
              key={i}
              src={item.src}
              alt={item.alt}
              id={item.id}
              text={item.text}
              title={item.title}
              className={item.className}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default MyProjects;