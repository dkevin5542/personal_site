import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaptopCode, FaChalkboardTeacher, FaDatabase, FaRobot, FaBook } from "react-icons/fa";
import "./styles.css";

const experiences = [
  {
    title: "Tutor",
    company: "QuattronKids",
    type: "Part-time",
    duration: "Jul 2024 - Present · 10 mos",
    location: "Remote",
    description:
      "Responsible for delivering engaging lessons, helping students understand core programming concepts such as loops, functions, and data structures.",
    skills: ["Communication", "Time Management", "+2 skills"],
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "AI Trainer",
    company: "Scale AI",
    type: "Internship",
    duration: "Jun 2024 - Aug 2024 · 3 mos",
    location: "Remote",
    description:
      "Collaborated on training 3+ different AI models by providing accurate annotations and labeling for large-scale datasets and ensuring timely project completion.",
    skills: ["Machine Learning", "Data Analysis", "+1 skill"],
    icon: <FaRobot />,
  },
  {
    title: "Software Engineer (Front-End)",
    company: "Drensys",
    type: "Internship",
    duration: "Jul 2023 - Aug 2023 · 2 mos",
    location: "Staten Island, New York, United States · Hybrid",
    description:
      "Worked on the front-end portion of 3+ projects for clients and collaborated with the team to detect and resolve bugs.",
    skills: ["Node.js", "TypeScript", "+7 skills"],
    icon: <FaLaptopCode />,
  },
  {
    title: "Teacher Assistant",
    company: "Brooklyn Chinese-American Association",
    type: "Internship",
    duration: "Jul 2021 - Aug 2021 · 2 mos",
    location: "Brooklyn, New York, United States · On-site",
    description:
      "Responsible for grading and providing feedback for student exams and homework. Provided clarification for students unfamiliar with the materials.",
    skills: ["Communication", "Time Management"],
    icon: <FaBook />,
  },
  {
    title: "Data Collector",
    company: "ORAIKO",
    type: "Internship",
    duration: "Mar 2019 - May 2019 · 3 mos",
    location: "New York, United States",
    description:
      "Collected and organized client data for 20+ clients and maintained an updated database with new information.",
    skills: ["Google Sheets", "Microsoft Excel"],
    icon: <FaDatabase />,
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h1>Experience Timeline</h1>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#222", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #00bcd4" }}
            date={exp.duration}
            iconStyle={{ background: "#00bcd4", color: "#fff" }}
            icon={exp.icon}
          >
            <h2 className="vertical-timeline-element-title">{exp.title}</h2>
            <h3 className="vertical-timeline-element-subtitle">{exp.company} · {exp.type}</h3>
            <p className="duration">{exp.location}</p>
            <p>{exp.description}</p>
            <p className="skills">💡 {exp.skills.join(", ")}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
