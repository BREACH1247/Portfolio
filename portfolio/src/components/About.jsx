import myImg from "../images/mypic.jpg";
import "../styles/about.css";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])

  return (
    <div id="about" className="container-fluid">
      <h2 className="title">About Me</h2>
      <div className="row">
        <img data-aos="fade-right" data-aos-once="true" src={myImg} alt="I, in the flesh." className="col-lg-4 image" />
        <div className="col-lg-8 d-flex justify-content-center flex-column summary" data-aos-once="true" data-aos="fade-up">
          <div className="d-flex justify-content-center flex-column">
            <div className="mb-2">
              Hey, I'm Aditya.Rapid development of technology around us excites me the most.It also makes me wonder how these fascinating
              softwares work.This question began my voyage in the field of technology.I love testing and learning softwares from different domains
              of computer science and technology.In this staggering journey I am at a state of pursuing a Btech(Computer Science) degree from
              Kalinga Institute of Industrial Technology,Bhubaneswar.
            </div>
            <div className="mb-2">
              I'm skilled at{" "}
              <span className="embolden">C, C++ , JavaScript </span>and <span className="embolden">Python</span>{" "}
              and I am currently exploring Web Development using the{" "}
              <span className="embolden">MERN stack</span> and{" "}
              <span className="embolden">Machine Learning with Python</span>.
              When I’m not engaged in this journey, I’m either reading about crytocurrencies or
              playing games.{" "}
            </div>
          </div>
          <a
            className="button-link contact-button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aditya-s-a07a54121/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAB47vacBX8Y82x9mCqqkJawFuJ37ZHkqaS8,1635479283352)/"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
