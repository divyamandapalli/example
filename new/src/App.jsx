import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="home" className="home">
        <h1>Hello, I'm Divya</h1>
        <p>A passionate developer exploring the world of code.</p>
        <a className="btn" href="#projects">View My Projects</a>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <img src="new/src/assets/divya.jpg" alt="Divya Mandapalli" />
        <p>
          I'm Divya Mandapalli, a passionate Computer Science and Technology student. I've worked on projects like Sentiment Analysis and Customer Segmentation.
        </p>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Sentiment Analysis</h3>
            <p>Project done at Andhra Pradesh State Skill Development Corporation using NLP techniques.</p>
          </div>
          <div className="project-card">
            <h3>Customer Segmentation</h3>
            <p>Developed a clustering-based customer segmentation model at Zidio.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:itsmandapallidivya@gmail.com">itsmandapallidivya@gmail.com</a></p>
      </section>

      <footer className="footer">
        &copy; 2025 Mandapalli Divya | All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;

