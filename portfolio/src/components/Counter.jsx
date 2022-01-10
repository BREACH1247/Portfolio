import "../styles/counter.css"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'
function Counter() {
    return (
        <div id="counter" className="d-flex justify-content-around">
            <div className="d-flex flex-column justify-content-center counter-ele">
                <i class="far fa-lightbulb"></i>
                <div><VisibilitySensor partialVisibility offset={{ bottom: 200}} >
                    {({ isVisible }) => (
                        <div style={{ height: 45 }}>
                            {isVisible ? <CountUp end={8} duration={1} preserveValue={true} /> : 8}
                        </div>
                    )}
                </VisibilitySensor></div>
                <div className="d-flex justify-content-center">Completed Projects</div>
            </div>
            <div className="d-flex flex-column justify-content-center counter-ele">
                <i class="fas fa-laptop-code"></i>
                <div><VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                    {({ isVisible }) => (
                        <div style={{ height: 45 }}>
                            {isVisible ? <CountUp end={3} duration={1} /> : 3}
                        </div>
                    )}
                </VisibilitySensor></div>
                <div>Hackathons Participated</div>
            </div>
            <div className="d-flex flex-column justify-content-center counter-ele">
                <i class="fas fa-award"></i>
                <div><VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                    {({ isVisible }) => (
                        <div style={{ height: 45 }}>
                            {isVisible ? <CountUp end={6} duration={1} /> : 6}
                        </div>
                    )}
                </VisibilitySensor></div>
                <div>Awards</div>
            </div>
            <div className="d-flex flex-column justify-content-center counter-ele">
                <i class="fas fa-user-plus"></i>
                <div><VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                    {({ isVisible }) => (
                        <div style={{ height: 45 }}>
                            {isVisible ? <CountUp end={70} duration={1} /> : 70}
                        </div>
                    )}
                </VisibilitySensor></div>
                <div>LinkedIn Connections</div>
            </div>
        </div>
    )
}

export default Counter;