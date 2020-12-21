import React from 'react'
import shelfIndulgence from '../images/shelf-indulgence.jpg'
import pandemicTracker from '../images/pandemic-tracker.jpg'
import mealMatcher from '../images/meal-matcher.jpg'
import chatApp from '../images/chat-app.jpg'
import empDir from '../images/employee-directory.jpg'
import burger from '../images/eat-da-burger.jpg'
import weather from '../images/weather-dashboard.jpg'


function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="row">
        {/* <h1 className="h1-title mx-auto display-3">Group Projects</h1> */}
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-12 col-lg-4 card-div">
          <div className="card portfolio-card">
            <img className="card-img-top" src={pandemicTracker} alt="" />
            <div className="card-body">
              <h5 className="card-title">Pandemic Tracker</h5>
              <p className="card-text">A MERN (Mongo, Express, React and Node) Application using React-Globe and API's to show updated stats on Covid-19. </p>
              <a href="pandemic-tracking.herokuapp.com" target="_blank" rel="noreferrer"className="btn btn-primary">Go There!</a>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-12 col-lg-4 card-div">
          <div className="card portfolio-card">
            <img className="card-img-top" src={shelfIndulgence} alt="" />
            <div className="card-body">
              <h5 className="card-title">Shelf Indulgence</h5>
              <p className="card-text">A book club community where you can search for books using an API, add those books to a MySQL database and communicate in a chat room.</p>
              <a href="http://shelf-indulgence-bc.herokuapp.com/" target="blank" rel="noreferrer" className="btn btn-primary">Go There!</a>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-12 col-lg-4">
          <div className="card portfolio-card">
            <img className="card-img-top" src={mealMatcher} alt="" />
            <div className="card-body">
              <h5 className="card-title">Meal Matcher</h5>
              <p className="card-text">A recipe site using Server side and third party API's</p>
              <a href="https://jessicaano92.github.io/meal_matcher_javascript_ajax/" rel="noreferrer" target="blank" className="btn btn-primary">Go There!</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
          <div className="card portfolio-card">
            <img className="card-img-top" src={chatApp} alt="" />
            <div className="card-body">
              <h5 className="card-title">Chat Application</h5>
              <p className="card-text">A real time chat application using Express and Socket.io</p>
              <a href="https://my-socketio-chat-app.herokuapp.com/" target="blank" rel="noreferrer" className="btn btn-primary">Go There!</a>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
          <div className="card portfolio-card">
            <img className="card-img-top" src={empDir} alt="" />
            <div className="card-body">
              <h5 className="card-title">Employee Directory</h5>
              <p className="card-text">The directory is built on React and uses class components to utilize states. Requires the use of .map and .sort methods using arrays. </p>
              <a href="https://my-employee-directory-react.herokuapp.com/" target="blank"  rel="noreferrer" className="btn btn-primary">Go There!</a>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
          <div className="card portfolio-card">
            <img className="card-img-top" src={burger} alt="" />
            <div className="card-body">
              <h5 className="card-title">Eat-Da-Burger</h5>
              <p className="card-text">A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. I create a MVC design pattern to separate information.</p>
              <a href="https://east-da-burger-mvc.herokuapp.com/" target="blank" rel="noreferrer" className="btn btn-primary">Go There!</a>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3 card-div">
          <div className="card portfolio-card">
            <img className="card-img-top" src={weather} alt="" />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">The dashboard calls a third party API (openweathermap.com) to show current weather when a user searches for a city. Searches are saved in a history panel. </p>
              <a href="https://jaredseefried.github.io/weather-dashboard/" target="blank" rel="noreferrer" className="btn btn-primary">Go There!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio