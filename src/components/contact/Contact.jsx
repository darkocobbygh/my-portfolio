import { useRef, useContext } from 'react';
import '../contact/contact.css'
import emailjs from '@emailjs/browser';

import Email from '../../images/email.svg';
import Phone from '../../images/phone.svg';
import Location from '../../images/location_on.svg'
import { ThemeContext } from '../../context';

const Contact=()=>{
    const theme= useContext(ThemeContext);
    const darkMode=theme.state.darkMode;

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('contact_service', 'contact_form',e.target, 'l6WaYpC8Sl_vhE8tU')
          .then((result) => {
              console.log('Success'+ result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div className="c">
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>
                        Let's discuss your projects
                    </h1>
                    <div className='c-info'>
                        <div data-testid='Phone' className='c-info-item'>
                            <img src={Phone} className='c-icon' alt="icon for phone" />
                            <p>+233201076334</p>
                        </div>
                        <div data-testid='Email' className='c-info-item'>
                            <img src={Email} className='c-icon' alt="icon for email" />
                            <p>darkogaucho@gmail.com</p>
                        </div>
                        <div data-testid='Home' className='c-info-item'>
                            <img src={Location} className='c-icon' alt="icon for home address" />
                            <p>Dansoman Accra, Ghana</p>
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        <b>What's your story?</b> Get in touch. Always freelancing if the right project comes along
                    </p>
                      <form action="" onSubmit={sendEmail}>
                        <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Name' name='user_name' />
                        <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{backgroundColor: darkMode && '#333'}} name="message" id="" cols="30" rows="5" placeholder='message'  ></textarea>
                        <button type='submit' value='Send' >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;