import './toggle.css'
import Moon from '../../images/Nearly_Full_Moon.png'
import Sun from '../../images/sun.png'
const Toggle=()=>{
    return (
        <div className="t">
        <img src={Sun} alt="moon  here" className="t-icon" />
        <img src={Moon} alt="sun here" className="t-icon" />
        <div className="t-button"></div>
        </div>
    )
}

export default Toggle;