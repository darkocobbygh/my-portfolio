import './about.css'
import IM from '../../images/pexels-kevin-ku-577585.jpg'
import CV from '../../cv/CURRICULUM VITAE.docx'
import Dw from '../../images/download(1).svg'

const About=()=>{
    return(
    <div className="a">
        <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
                <img src={IM} alt="" className='a-img' />
            </div>
        </div>
        <div className='right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'></p>
            <p className='a-desc'>I’m a nice fun and friendly person, I’m honest and punctual, I work well in a team but also on my own as I like to set myself goals which I will achieve, I have good listening and communication skills. I have a creative mind and am always up for new challenges. I am well organized and always plan ahead to make sure I manage my time well.</p>
                <div className='cv'>
                <h3>My Resume/Curriculum Vitae</h3>
                <p>Click below to download my Resume/ Curriculum Vitae</p>
                        <a href={CV} download={CV}>
                            <button className="btn-highlighted-btn">
                                <img src={Dw} alt=""className='dw-sv' /><br /> Download CV here
                            </button>
                        </a>
                </div>
        </div>
    </div>
    )
}

export default About;