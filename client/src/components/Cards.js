import React from 'react'

function Cards() {
  return (
    <div className="cards-home-container col-12">
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <div className="card portfolio-card">
            <img className="card-img-top" src="https://d9qtyz43wogdd.cloudfront.net/pixpacom/images/homebanner-image.jpg" alt="" />
            <div className="card-body">
              <h5 className="card-title">Development</h5>
              <p className="card-text">Coming Soon...</p>
              <a href="/" className="btn btn-primary">Go There!</a>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-4">
          <div className="card portfolio-card">
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78PFP5HuGD5BJUhCqnY4crXgoTcCJP7_yJA&usqp=CAU" alt="" />
            <div className="card-body">
              <h5 className="card-title">Portfolio</h5>
              <p className="card-text">A collection of work I've completed. </p>
              <a href="/portfolio" className="btn btn-primary">Go There!</a>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-4">
          <div className="card portfolio-card">
            <img className="card-img-top" src="https://previews.123rf.com/images/279photo/279photo1705/279photo170501991/81032796-client-support-service-workdesk-with-contact-us-signs-dark-background-top-view-mockup.jpg" alt="" />
            <div className="card-body">
              <h5 className="card-title">Contact</h5>
              <p className="card-text">Fill out the Contact Form and send me a message. </p>
              <a href="/contact" className="btn btn-primary">Go There!</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cards