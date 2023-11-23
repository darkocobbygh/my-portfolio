import './Intro.css';
import { useContext } from "react";
import Me from '../../images/1_UMBVvBykFuYM5T4XfiCrHA.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context';


const Intro=()=>{
    const theme= useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
    return(
        <div className="i">
            <div className="i-left">
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, my name is</h2> 
                    <h1 className='i-name'>Emmanuel Cobblah</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Frontend Developer</div> 
                        </div>
                    </div>
                    <div>
                    <p className='i-desc'>
                        I design and develop websites and web apps for customers of all sizes,
                         specializing in creating stylish, modern websites, web services and online stores
                    </p>
                    </div>
                    <div className="colz">
                        <div className="colz-icon">
                            <Link to={'https://web.facebook.com/makaveli.big'}>
                            <FaFacebook style={{color: darkMode && '#fff'}} color='blue' size={60} />
                            </Link>
                            <Link to={'https://www.instagram.com/nii_darko_cobblah/'}>
                            <FaInstagram style={{color: darkMode && '#fff'}} color='red' size={60} />
                            </Link>
                            <Link to={'https://twitter.com/darkocobblah'}>
                            <FaTwitter style={{color: darkMode && '#fff'}} color='black' size={60} />
                            </Link>
                            <Link to={'https://github.com/darkocobbygh'}>
                            <FaGithub style={{color: darkMode && '#fff'}} color='black' size={60} />
                            </Link>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="i-right">
                <div className='i-bg'></div>
                <img src={Me} alt="" className='i-img'/>
            </div>
        </div>
    )
}

export default Intro;