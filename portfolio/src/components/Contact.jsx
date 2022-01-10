import "../styles/contact.css";
import Aos from "aos";
import mailbox from "../images/mailbox.png";
import "aos/dist/aos.css"
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
  Aos.init({duration:2000})
  }, [])
  return (
    <div id="contact" class="container-fluid">
      <h2 className="title">Get in Touch</h2>
      <div className="d-flex justify-content-center mt-3">
        <img src={mailbox} alt="mailbox." className=" mail-img" data-aos="zoom-in" data-aos-once="true" />
        <div className="contact-text">
          Feel free to drop an email, or contact me on any of the social
          platforms provided. I'm always interested in new and exciting
          oppurtunities so don't hesitate to get in touch. I'll be waiting for
          you!
          <div className="d-flex justify-content-center">
            <a href="mailto:sinhaditya50@gmail.com" className="cool-btn contact-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="pe-2 ps-2">Contact Me</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;