import './Intro.css'
import Me from '../../images/1_UMBVvBykFuYM5T4XfiCrHA.png';
import Fb from '../../images/icons8-facebook (1).svg';
import Ig from '../../images/icons8-instagram (1).svg';
import Twit from '../../images/icons8-twitter (1).svg';
import GitHu from '../../images/icons8-github.svg';


const Intro=()=>{
    return(
        <div className="i">
            <div className="i-left">
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, my name is</h2> 
                    <h1 className='i-name'>Emmanuel Cobblah</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Backend Developer</div>
                            <div className='i-title-item'>Frontend Developer</div>
                            <div className='i-title-item'>RESTful API Operations</div>
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
                        <a href="https://web.facebook.com/makaveli.big">
                            <img src={Fb} alt="" />
                        </a>
                        <a href="https://www.instagram.com/nii_darko_cobblah/">
                        <img src={Ig} alt="" />
                        </a>
                        <a href="https://twitter.com/darkocobblah">
                        <img src={Twit} alt="" />
                        </a>
                        <a href="https://github.com/darkocobbygh">
                        <img src={GitHu} alt="" />
                        </a>
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