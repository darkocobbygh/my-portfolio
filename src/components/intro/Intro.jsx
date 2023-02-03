import './Intro.css'
import Me from '../../images/pexels-olia-danilevich-4974912.jpg'


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
                    <p className='i-desc'>
                        I design and develop websites and web apps for customers of all sizes,
                         specializing in creating stylish, modern websites, web services and online stores
                    </p>
                    <div className="colz">
                        <div className="colz-icon">
                        <a href="#">
                            <i className="fa fa-facebook-square">Facebook icon</i>
                        </a>
                        <a href="#">
                            <i className="fa fa-instagram">Instagram icon</i>
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter-square">Twitter Icon</i>
                        </a>
                        </div>
                    </div>
                </div>
                <svg
                width='75'
                height='75'
                viewBox='0 0 75 75'
                fill='none'
                stroke='black'
                className='i-scroll' 
                xmlns='http://www.w3.org/2000/svg'>
                    <g id='scroll' >
                        <path id='Vector'
                        d='M40.5 15L34.5 9L28.5 15'
                        stroke-width='3'
                        stroke-miterlimit='10'
                        stroke-lineup='round'
                        stroke-linejoin='round'
                        />
                    </g>
                </svg>
            </div>
            <div className="i-right">
                <div className='i-bg'></div>
                <img src={Me} alt="" className='i-img'/>
            </div>
        </div>
    )
}

export default Intro;