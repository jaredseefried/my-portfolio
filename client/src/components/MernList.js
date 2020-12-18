import React from 'react'

function MernList() {
  return (
    <div className="mern-list-container">
      <div className="row">
        <h2 className="text-center h2-title col-12">Application and Web Development</h2>
      </div>
      <div className="row">
        <div className="col-4 mern-list">
          <div className="list-group" id="list-tab" role="tablist">
            <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="home">Front End Development</a>
            <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Back End Development</a>
            <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Mobile Responsive</a>
            <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Development Architecture</a>
          </div>
        </div>
        <div className="col-8">
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">The front end of the application is built with JavaScript (ES6), React.js, HTML and CSS. React is a JavaScript library developed by Facebook which used to build single page applications. The main objective for React is to render the DOM dynamically, changes the state management and routing components based on what the browser needs to render. React uses Hooks which are functions that let developers "hook into" React state and lifecycle features from function components. Using React for your application can increase efficiency and keep your application ahead of the industry. </div>
            <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">The back end is developed with a Database, both MySQL and a NoSQL database using MongoDB can be implemented. Using Express.js and Axios to run the server and make API calls to internal and external endpoints. </div>
            <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">With the majority of users on Mobile devices, mobile Responsive for UX is necessary for application development. Bootstrap libraries and Media Queries render the mobile application to screen constraints and provide a cleaner and more used application. </div>
            <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">The Architecture is built with an MVC structure which separates the Model, the Controller and the view to protect data. </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MernList