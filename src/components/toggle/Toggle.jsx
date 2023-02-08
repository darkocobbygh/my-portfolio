import './toggle.css'
import Moon from '../../images/Nearly_Full_Moon.png'
import Sun from '../../images/sun.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context'
const Toggle=()=>{
    const theme= useContext(ThemeContext)

    const handleClick=()=>{
        theme.dispatch({type:'TOGGLE'})
    }
    return (
        <div className="t">
        <img src={Sun} alt="moon  here" className="t-icon" />
        <img src={Moon} alt="sun here" className="t-icon" />
        <div className="t-button" onClick={handleClick} style={{left:theme.state.darkMode?0:25}} ></div>
        </div>
    )
}

export default Toggle;