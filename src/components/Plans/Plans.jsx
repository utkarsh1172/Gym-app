import React from "react";
import "./Plans.css";
import { plansData } from "../../Data/plansData";
import whitTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plan-container">
    <div className="blur plan-blur1"></div>
    <div className="blur plan-blur2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* plansCar */}

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span> $ {plan.price}</span>
           

            <div className="features">
                {plan.features.map((feature,i)=>(
                    <div className="feature">
                        <img src={whitTick} alt="" />
                        <span>{i}{feature}</span>
                    </div>
                ))}
            </div>
            <div>
                <span>See more benifits -> </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
