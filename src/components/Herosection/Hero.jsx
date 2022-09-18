import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero.png";
import Heart from "../../assets/Heart.png";
import Calories from "../../assets/calories.png";
import hero_image_back from '../../assets/hero_image_back.png'

const Hero = () => {
  function update(){
   prompt('Enter you name');
  }
  return (
    <div className="hero" id="home">
    <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad  */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading  */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figuers */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div>
        {/* Hero bottons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn" onClick={update} >Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Herat Rate</span>
          <span>116 bpm</span>
        </div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/* calories */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
