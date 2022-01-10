import '../styles/projects.css'

import { useState } from "react";


function Projects() {

  const [showproj, setShowproj] = useState("nothing");

  const display_web = () => {
    setShowproj("display-web")
  }
  const display_android = () => {
    setShowproj("display-android")
  }
  const display_others = () => {
    setShowproj("display-others")
  }
  const display_all = () => {
    setShowproj("")
  }


  return (
    <div id="projects" className="container-fluid">
      <h1 className='title'>Projects</h1>
      <div className="d-flex mb-3 justify-content-center">
        <div className="p-2 sorters nav-item" onClick={display_all}>All</div>
        <div className="p-2 sorters nav-item" onClick={display_web}>Web</div>
        <div className="p-2 sorters nav-item" onClick={display_android}>Android</div>
        <div className="p-2 sorters nav-item" onClick={display_others}>Others</div>
      </div>
      <div className="row cards-list wrapper">
        <div className={`col-md-4 col-sm-6 android ${showproj}`}>
          <div className="mycard m-4">
            <img
              src={`${process.env.PUBLIC_URL}/assets/vaxiqueue.png`}
              alt="VaxiQueue"
              height="200vh"
            />
            <div className="card-info">
              <h3>Vaxiqueue</h3>
              <p>
                An android app to predict the waiting time for people waiting to
                get a vaccine.
              </p>
              <a href="https://github.com/BREACH1247/VaxiQueue" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 others ${showproj}`}>
          <div className="mycard m-4">
            <img
              src={`${process.env.PUBLIC_URL}/assets/ursina.jpg`}
              alt="Ursina Minecraft Clone"
              height="200vh"
            />
            <div className="card-info">
              <h3>Ursina Minecraft</h3>
              <p>
                A simple minecraft clone made using ursina engine in python.
              </p>
              <a href="https://github.com/pokepetter/ursina/blob/master/samples/minecraft_clone.py" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 android ${showproj}`}>
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/chromavision.jpg`}
              alt="ChromaVision"
              height="200vh"
            />
            <div className="card-info">
              <h3>Chromavision</h3>
              <p>
                An android app that detects and specifies the type of Colour Blindness.
              </p>
              <a href="https://github.com/BREACH1247/ChromaVision" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 web ${showproj}`}>
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/chatify.jpg`}
              alt="chatify"
              height="200vh"
            />
            <div className="card-info">
              <h3>Chatify</h3>
              <p>
                A chat web app made using Chat Engine along with firebase integration.
              </p>
              <a href="https://github.com/BREACH1247/Chatify-" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 web ${showproj}`}>
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/portfolio.jpg`}
              alt="This Portfolio Website"
              height="200vh"
            />
            <div className="card-info">
              <h3>Portfolio</h3>
              <p>
                A website made for personal introduction and description using React.
              </p>
              <a href="https://github.com/BREACH1247/Portfolio" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 web ${showproj}`}>
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/cryptocap.jpg`}
              alt="Cryptocap"
              height="200vh"
            />
            <div className="card-info">
              <h3>CryptoCap</h3>
              <p>
                A website thats a one stop solution to all your queries regarding cryptocurrency.
              </p>
              <a href="https://github.com/BREACH1247/CryptoCap" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Projects;