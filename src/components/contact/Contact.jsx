import { useContext, useState } from 'react';
import '../contact/contact.css'
import emailjs from '@emailjs/browser';

import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { ThemeContext } from '../../context';

const Contact=()=>{
    const theme= useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    const [done,setDone]= useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('contact_service', 'contact_form',e.target, 'l6WaYpC8Sl_vhE8tU')
          .then((result) => {
              console.log('Success'+ result.text);
              setDone(true) 
          window.location.reload(false);
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
                        <FaPhone size={30} />
                            <p>+233201076334</p>
                        </div>
                        <div data-testid='Email' className='c-info-item'>
                        <MdEmail size={30} />
                            <p>darkogaucho@gmail.com</p>
                        </div>
                        <div data-testid='Home' className='c-info-item'>
                        <TiLocation size={30} />
                            <p>Dansoman Accra, Ghana</p>
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        <b>What's your story?</b> Get in touch. Always freelancing if the right project comes along
                    </p>
                      <form action="" onSubmit={sendEmail}>
                        <input style={{backgroundColor: darkMode && ''}} type="text" placeholder='Name' name='user_name' />
                        <input style={{backgroundColor: darkMode && ''}} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{backgroundColor: darkMode && ''}} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{backgroundColor: darkMode && ''}} name="message" id="" cols="30" rows="5" placeholder='message'  ></textarea>
                        <button type='submit' value='Send' >Submit</button>
                        {done && 'Thank you'}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;