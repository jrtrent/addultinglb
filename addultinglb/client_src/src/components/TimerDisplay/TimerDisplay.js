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
                    && <img className="center-block youtube-responsive-width" height="259" width="480" title="alarm" src="https://giphy.com/embed/3o6gbcjYiGrpaLXy7K" alt="alarm" />
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