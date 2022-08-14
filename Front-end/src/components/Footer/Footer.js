import React from 'react';
import "./Footer.css";

const Footer=()=> {
  return (
    <footer className='footer'>
      <p>For any Questions and Query contact: 1-111-1111</p>
      <div className='footer-cols'>
        <ul>
          
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Inverstor Reaction</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Netflix Orginal</a></li>
          
        </ul>
        <ul xs lg="3">
              <li><a href="#">Help center</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Terms of uses</a></li>
              <li><a href="#">Contact Us</a></li>
        </ul>
        <ul xs lg="3">
              <li><a href="#">Account</a></li>
              <li><a href="#">Redeem Gift cards</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Speed test</a></li>
        </ul>
        <ul xs lg="3">
              <li><a href="#">Media center</a></li>
              <li><a href="#">Buy Gift cards</a></li>
              <li><a href="#">Cookies Preference</a></li>
              <li><a href="#">Legal Notice</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;