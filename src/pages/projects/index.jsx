import React from "react";
import "./styles.css";

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };
  
  const images = importAll(require.context("../../images", false, /\.(png|jpe?g|svg)$/));

  const projects = [
    {
        title: "Anime Tracker",
        technologies: "HTML, CSS, Heroku",
        date: "Nov. 2024 - Dec. 2024",
        description: [
          "Developed a web appliaction that allows user to track their favorite anime shows and merchandise using Heroku",
          "Implemented key features like secure login, profile page, and friends system",
          "Used the MAL database to access all shows available to the public"
        ],
        image: images["anime-tracker.png"], 
        link: "https://dkevin5542-64740ada7be1.herokuapp.com/final_project/",
      },
    {
        title: "SparkBytes",
        technologies: "Flask, Python, Next.js, FastApi, SQLite, Typescript, CSS, Node.js",
        date: "Oct. 2024 - Dec. 2024",
        description: [
          "Developed a single-page web appliaction that allows BU students to RSVP and access details about events going on campus, including the type and quantity of food, location, and time. Also allows faculty members to post events offering free food and snacks",
          "Implemented key features like secure login, profile page, event posting, RSVP form, etc.",
          "Used an agile workflow to coordinate with team members to meet dealines and milestones"
        ],
        image: images["sparksbyte.png"], 
        link: "https://github.com/dkevin5542/SparkBytesG7?tab=readme-ov-file",
      },
    {
        title: "Tetris Neural Network",
        technologies: "Java, Sepia",
        date: "Oct. 2024 - Dec. 2024",
        description: [
          "Designed and trained a reinforcement learning agent for tetris over the course of 3 months resulting in an average point of 10 (in thousands) per game",
          "Implemented key components like state-action representation, reward system, and neural network based Q-value prediction",
          "Utilized a training pipline method that uses temporal differences and replay buffers for learning to reduce aggregate transition and overfitting "
        ],
        image: images["tetris.png"], 
        link: "https://github.com/dkevin5542/tetris-neural-network",
      },
    {
        title: "AI Chess Bot",
        technologies: "Java, Sepia",
        date: "Sep. 2024 - Oct. 2024",
        description: [
          "Designed an AI chess bot with a 1000-1500 elo rating",
          "Intergated the fundamental mechanics of chess gameplay and custom heuristic algorithms to further improve the bot's decision making capabilites",
          "Developed custom heuristics focusing on board positionings, king's safety, positional adventages, pawn structure, and piece development"
        ],
        image: images["chess-bot.png"], 
        link: "https://github.com/dkevin5542/chess-bot",
      },
    {
        title: "Algorithm Visualizer",
        technologies: "Python, Tkinter",
        date: "Dec. 2023 - Jan. 2024",
        description: [
          "Designed a widget-based application that visualizes 3+ well-known sorting algorithms.",
          "Allows the user to randomize 50+ values of input data and select the desired sorting algorithm.",
        ],
        image: images["algorithm-visualizer.png"], 
        link: "https://github.com/dkevin5542/algorithm_visualizer",
      },
    {
      title: "Class Catcher",
      technologies: "React.js, Node.js, Flask, Python, GoogleAuth, Google Maps API",
      date: "Sep - Dec. 2023",
      description: [
        "Developed a web-based application to help students pick their classes based on home/dorm location.",
        "Shows users the shortest distance and time using Google Maps API.",
        "Allows users to pick courses and add them to Google Calendar.",
        "Offers different travel times based on available transportation.",
        "Utilized React for a fluid UI and collaborated on bug fixes.",
      ],
      image: images["class-catcher.png"], 
      link: "https://github.com/EfimSo/class-catcher",
    },
  ];
  
  
  const Projects = () => {
    return (
      <div className="projects-page">
        <h1 className="page-title">My Projects</h1>
        <div className="projects-container">
          {projects.map((project, index) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details">
                <div className="project-header">
                  <h2>{project.title}</h2>
                  <span className="project-date">{project.date}</span>
                </div>
                <h3>{project.technologies}</h3>
                <ul>
                  {project.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
