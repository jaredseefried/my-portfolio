import React from 'react';
import './Resume.css'
import MyResume from '../assets/Resume.docx'

function Resume(props) {
  return (
    <>
      <div className="resume-container col-10">
        <div className="row col-12" id="section-1">
          <h1 className="text-center resume-header col-12">Jared Seefried</h1>
          <div className="row col-12">
            <p className="text-center resume-text col-12">Aurora, CO 80012 | Phone: (303)-638-4230 | Email: jared.seefried@yahoo.com</p>
            <p className="text-center resume-text col-12">GitHub: <a href="https://www.github.com/jaredseefried" target="_blank">github link</a> | LinkedIn: <a href="https://www.linkedin.com/in/jaredseefried/" target="_blank">linkedin link</a></p>
            <p className="text-center resume-text col-12">Portfolio: <a href="https://jared-seefrieds-portfolio.herokuapp.com/" target="_blank">portfolio link</a></p>
          </div>

        </div>
        <div className="row col-12">
          <h2 className="text-center section-header col-12">Professional Summary</h2>
          <p className="summary">With a certificate in Full Stack Web Development, focusing on JavaScript and Node.js, this experienced technical engineer has 10+ years of experience working within Agile development life cycles as an active team contributor, result driven problem solver with a desire to master Object-Oriented Programming.</p>
        </div>
        <div className="row col-12">
          <h2 className="text-center section-header col-12">Technical Skills</h2>
          <p className="resume-text text-center col-10 skills">HTML5 | CSS3 | JavaScript (ES6) | jQuery | React.js | Bootstrap | Node.js | Express.js | REST API/AJAX | AWS | Axios | Serverless | MySQL | NoSQL | MongoDB | GitHub | Heroku | Atlas | Adobe | Microsoft Office</p>
        </div>
        <div className="row col-12">
          <h2 className="text-center section-header col-12">Experience</h2>
          <p className="resume-text resume-job">ViaSat, Inc | Software Testing Engineer | 04.2017-03.2020</p>
          <p className="resume-text">Fulfill technology requirements to meet SOX compliance, audit requirements, and revenue assurance. Tasks included QA, UAT, Project Management, SQL Reporting and Defect Resolution. Met with cross functional SCRUM teams to incorporate agile development, testing and deployment.</p>
          <ul className="resume-ul">
            <li className="resume-list-item">Drove revenue by leading QA functional testing within two-week sprint cycle for the implementation, products and services.</li>
            <li className="resume-list-item">Executed SQL reporting to test customer billing data for revenue assurance and SOX Compliance.</li>
          </ul>
          <p className="resume-text resume-job">talentReef | Web Designer | 09.2014 – 04.2017</p>
          <p className="resume-text">Sole product designer for the CMS which led to increased sales and revenue. Managed the design and maintenance of branding requirements, designing web graphics and customized HTML and CSS.</p>
          <ul className="resume-ul">
            <li className="resume-list-item">Boosted revenue by designing and implementing 1200 web pages including corporate projects with Taco Bell, Five Guys and Zoe’s Kitchen.</li>
            <li className="resume-list-item">Generated efficiency by converting forms to html-result driven.</li>
          </ul>
          <p className="resume-text resume-job">IQNavigator | Software Support Engineer | 03.2013 – 08.2014</p>
          <p className="resume-text">Provided dedicated technical support and implementation advice of potential procurement process improvements to ensure competition and cost savings. Tasks included technical support, implementation, project management, business analysis, quality assurance testing, and training.</p>
          <ul className="resume-ul">
            <li className="resume-list-item">Maintained dedicated technical assistance to Disney, UPS, TVA, ARAMARK, and various other logos.</li>
            <li className="resume-list-item">Analyzed software integrations between client software and IQN to optimize process and identify fixes. </li>
          </ul>
        </div>
        <div className="row col-12">
          <h2 className="text-center section-header col-12">Projects</h2>
          <p className="resume-text text-center col-12 link-to-portfolio"><a href="/portfolio">View My Full Portfolio Here</a></p>
        </div>
        <div className="row col-12">
          <h2 className="text-center section-header col-12">Education</h2>
          <p className="resume-text col-12 education">Full Stack Web Development Certificate - University of Denver | 2020</p>
          <p className="resume-text col-12 education">Bachelor of Science in Business Marketing - Metropolitan State University of Denver</p>
        </div>
      </div>
      <div className="download-resume container-fluid col-10">
        <a href={MyResume} download='Resume' className="col-10 download-link">Download My Resume</a>
      </div>
    </>
  );
}

export default Resume;