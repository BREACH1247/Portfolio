import "../styles/skills.css"
import Aos from "aos";
import "aos/dist/aos.css"

function Skills() {
  return (
    <div id="skills" className="container-fluid">
      <h1 className="skill-title">Skills</h1>
      <div className="row">
        <div className=" col-md-4" data-aos-once="true" data-aos="flip-left">
          <div className="skillcard">
            <div><i class="fas fa-code"></i></div>
            <h3 className="skill-title">Web Development</h3>
            <div className='skill-text'>HTML | CSS | JavaScript | ReactJS | Bootstrap | Node.js | Next.js | Tailwind.css | MongoDB</div>
          </div>
        </div>
        <div className="col-md-4" data-aos-once="true" data-aos="flip-up">
          <div className="skillcard">
            <div><i class="fab fa-android"></i></div>
            <h3 className="skill-title">App Development</h3>
            <div className="skill-text">Native Android Development (Java) | Flutter | Dart | XML </div>
          </div>
        </div>
        <div className="col-md-4" data-aos-once="true" data-aos="flip-right">
          <div className="skillcard">
            <div><i class="fas fa-robot"></i></div>
            <h3 className="skill-title">Machine Learning</h3>
            <div className="skill-text">Python | Pandas | NumPy | Scikit-Learn | Matplotlib | Seaborn </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;