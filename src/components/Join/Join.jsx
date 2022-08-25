import React from "react";
import "./Join.css";
// import emailjs from '@emailjs/browser'

const Join = () => {

//     const form = useRef();

//     // eslint-disable-next-line no-unused-vars
//     const sendEmail = (e) => {
//         e.preventDefault();
    
//         emailjs.sendForm('service_qn38fi9', 'template_4pafk9p', form.current, 'XKRjucTLo8TvLH7yH')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           });
//       };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
      <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">

        <form action="" className="email-container">
            <input type="email" name="from_name" placeholder="Enter your email address" />
            <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
