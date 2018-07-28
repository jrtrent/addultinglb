import React from 'react';
import {COMPLETE} from "../../timerStates";

const leftPad = (val) => {
    if (val <10) return `0${val}`;
    return `${val}`;
}
const TimerDisplay = (props) => {
    console.log(COMPLETE)
    console.log((props.timerState))
    return (
        
        <div>
            <div className="row center-block">
            {
                (props.timerState === COMPLETE)
                
                    && <iframe className="center-block youtube-responsive-width" title="alarm" src="https://www.youtube.com/embed/_qvmANQ-4Hw?autoplay=1"allow="autoplay"></iframe>
            }
        </div>
    <div className="row">
        <h2 className="text-center">{`${leftPad(props.currentTime.get('hours'))}:${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}
        </h2>
    </div>
    </div>
    )
};

export default TimerDisplay;