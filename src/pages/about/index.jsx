import React from "react";
import "./styles.css";

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
};

const images = importAll(require.context("../../images", false, /\.(png|jpe?g|svg)$/i));

const AboutMe = () => {
  return (
    <div className="about-page">
      <div className="about-container">
      <h1 className="about-title">About Me</h1>

        <img src={images["pfp2.jpg"]} alt="My Profile" className="profile-image" />
        <div className="contact-section">
        <h2 className="contact-title">Contact Info</h2>
            <p className="contact-info">Email: <a href="mailto:kevin.dong@example.com">dongkevin542@gmail.com</a></p>
            <p className="contact-info">Phone: <a href="tel:+1234567890">(718) 316-8052</a></p>
        </div>
        <p className="about-text">
          Hey there! 👋 I'm an aspiring Software Engineer who loves turning ideas into
          functional and creative web apps. I enjoy solving problems, learning
          new technologies, and working on projects that push my limits.
        </p>
        <p className="about-text">
          My toolbox includes JavaScript, Python, React, Flask, Java, and more.
          I’ve built everything from AI bots to class scheduling tools, and I’m
          always up for a new challenge!
        </p>
        <p className="about-text">
          Beyond coding, you’ll find me enjoying anime, tackling chess puzzles,
          and experimenting with game AI.
        </p>
        
      </div>
    </div>
  );
};

export default AboutMe;
