import React from "react";

// Containers
import Languages from "../../containers/Languages/Languages";
import Main from "../../containers/MainHeader/Main";
import Features from "../../containers/Features/Features.js";
import MyProjects from '../../containers/MyProjects/MyProjects'
import Contact from '../../containers/Contact/Contact'
import Footer from "../../containers/Footer/Footer";

// CSS
import "./Home.css";

//Particles.js
import Particles from '../../containers/Particles/Particles'

// Components
import Container from "../../components/Container/Container";

export default function Home() {

  return (

    <Container className="home-container" id='home-container'>
      <Particles />
      <Main />
      <Languages />
      <Features />
      <MyProjects />
      <Contact />
      <Footer />
    </Container>
  );
}