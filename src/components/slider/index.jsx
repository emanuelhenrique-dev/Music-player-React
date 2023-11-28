import './styles.css'
import { useState, useEffect } from 'react';



export const Slider = ({onChange, percentage, duration, currentTime}) => {

  const [position, setPosition] = useState(0);

  useEffect(() => {
    console.log('mudou');
    setPosition(percentage)
  }, [percentage])

  function secondsToHms(seconds) { //converter o tempo para Xm Xs
    if (!seconds) return '00m 00s'

    let duration = seconds
    let hours = duration / 3600
    duration = duration % 3600

    let min = parseInt(duration / 60)
    duration = duration % 60

    let sec = parseInt(duration)

    if (sec < 10) {
      sec = `0${sec}`
    }
    if (min < 10) {
      min = `0${min}`
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`
    } else if (min == 0) {
      return `00m ${sec}s`
    } else {
      return `${min}m ${sec}s`
    }
  }

  return (  
    <div className="slider_bar">
      <input className='range' value={position} type="range" step='0.01'onChange={onChange}/>
      <div className="progress_bar" style={{
        width: `calc(${position}%)`
        }}></div>
      <div className="timer">
        <p>{secondsToHms(currentTime)}</p>
        <p>{secondsToHms(duration)}</p>
      </div>
    </div>
   );
}
 