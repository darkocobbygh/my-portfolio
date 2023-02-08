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
            <p className='a-sub'>This is where i write about myself and get into detail</p>
            <p className='a-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, labore quisquam nostrum dignissimos, nobis sapiente, incidunt deserunt voluptates rem non sed impedit officiis animi eius similique? Iusto blanditiis tenetur perferendis.</p>
                <h1>My Resume/Curriculum Vitae</h1>
                <p>Click below to download my Resume/ Curriculum Vitae</p>
                        <a href={CV} download={CV}>
                            <button className="btn-highlighted-btn">
                                <img src={Dw} alt=""className='dw-sv' /><br /> Download CV here
                            </button>
                        </a>
        </div>
    </div>
    )
}

export default About;