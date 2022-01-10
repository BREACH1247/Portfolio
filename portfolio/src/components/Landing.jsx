import "../styles/landing.css";
import video from "../videos/back.mp4";
import Typist from "react-typist";
import { useState, useEffect } from "react";

function Landing() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <div id="landing">
      <video class="videoclass" autoplay="autoplay" muted loop width="100%">
        <source src={video} type="video/mp4" />
      </video>
      <div class="mycontent">
        <div class="d-flex justify-content-center"><h2>Hi,I am</h2></div>
        <div class="d-flex justify-content-center"><h1>Aditya Sinha</h1></div>
        <div class="d-flex justify-content-center">
          <h3>
            <div className="d-flex">
              <div className="pe-2">I am a</div>
              <div>
                {count ? (
                  <Typist avgTypingDelay={65} onTypingDone={() => setCount(0)}>
                    <span className="dynamic">Programmer</span>
                    <Typist.Backspace count={20} delay={800} />
                    <span className="dynamic">Web Developer</span>
                    <Typist.Backspace count={15} delay={800} />
                    <span className="dynamic">Ml Enthusiast</span>
                    <Typist.Backspace count={15} delay={800} />
                    <span className="dynamic">Crypto fanatic</span>
                    <Typist.Backspace count={15} delay={800} />
                  </Typist>
                ) : (
                  ""
                )}
              </div>
            </div>
          </h3>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/aditya-s-a07a54121/">
            <i class="fab fa-linkedin p-3"></i>
          </a>
          <a href="https://github.com/BREACH1247">
            <i class="fab fa-github p-3"></i>
          </a>
          <a href="https://stackoverflow.com/users/14740229/godspeed69?tab=profile">
            <i class="fab fa-stack-overflow p-3"></i>
          </a>
          <a href="mailto:sinhaditya50@gmail.com.com">
            <i class="fas fa-envelope p-3"></i>
          </a>
          <a href="https://www.hackerrank.com/sinhaditya50">
            <i class="fab fa-hackerrank p-3"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
