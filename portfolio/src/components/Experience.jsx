import "../styles/experience.css";
import { ReactComponent as WorkIcon } from "../images/work.svg";
import { ReactComponent as SchoolIcon } from "../images/school.svg";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Experience() {
    return (
        <div id='experience'>
        <div className="exp">
            <h1 className="title">Experience</h1>
            <VerticalTimeline lineColor="#16D4D3">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 71, 171)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 71, 171)' }}
                    date="Jan 2022 - Present"
                    iconStyle={{ background: 'rgb(11,165,222)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Junior Executive(Tech)</h4>
                    <h5 className="vertical-timeline-element-subtitle">Ecell-KIIT</h5>
                    <h6>Currenty working as a React Frontend Developer.</h6>
                </VerticalTimelineElement>
               
               
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(212, 11, 34)', color: '#fff' }}

                />
            </VerticalTimeline>
        </div>
        <div className="edu">
        <h1 className="title">Education</h1>
            <VerticalTimeline lineColor="#16D4D3">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 71, 171)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 71, 171)' }}
                    date="2020 - 2024"
                    iconStyle={{ background: 'rgb(255,150,0)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h4 className="vertical-timeline-element-title">B.tech.(IT)</h4>
                    <h5 className="vertical-timeline-element-subtitle">Kalinga Institute of Industrial Technology</h5>
                    
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 71, 171)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 71, 171)' }}
                    date="2018 - 2020"
                    iconStyle={{ background: 'rgb(255,150,0)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Class XII(CBSE)</h4>
                    <h5 className="vertical-timeline-element-subtitle">GMSSS(35-B),Chandigarh</h5>
                    
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 71, 171)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(0, 71, 171)' }}
                    date="2017 - 2018"
                    iconStyle={{ background: 'rgb(255,150,0)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Class X(CBSE)</h4>
                    <h5 className="vertical-timeline-element-subtitle">Ryan International School,Chandigarh</h5>
                    
                </VerticalTimelineElement>
               
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(212, 11, 34)', color: '#fff' }}

                />
            </VerticalTimeline>
        </div>
        </div>
    );
}

export default Experience;