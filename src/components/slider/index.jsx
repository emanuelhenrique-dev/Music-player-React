import './styles.css'




export const Slider = ({onChange, percentage}) => {
console.log(percentage)

  return (  
    <div className="slider_bar">
      <input className='range' type="range" step='0.01'onChange={onChange}/>
      <div className="progress_bar" style={{width: ''}}></div>
    </div>
   );
}
 