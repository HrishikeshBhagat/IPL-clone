import React from "react";
import './style.css'

const About = () => {
    return (
        <>
        <div className="about-parent-prim">
            <h1>About IPL</h1>
        </div>
        <div className="about-parent-sec">
            <div className="about-child-prim">
            <div class="ui celled list">
  <div class="item">
    {/* <img class="ui avatar image" src="/images/avatar/small/helen.jpg"> */}
    <div class="content">
      <div class="header">Anti Curruption Policy</div>
      An excellent companion
    </div>
  </div>
  <div class="item">
    {/* <img class="ui avatar image" src="/images/avatar/small/daniel.jpg"> */}
    <div class="content">
      <div class="header">Anti Dopping Policy- NADA</div>
      A poodle, its pretty basic
    </div>
  </div>
  <div class="item">
    {/* <img class="ui avatar image" src="/images/avatar/small/daniel.jpg"> */}
    <div class="content">
      <div class="header">TUE Application Form</div>
      He's also a dog
    </div>
  </div>
</div>
            </div>
            <div className="about-child-sec">
                <h1>About Us</h1>
                <div>
                <div className="about-child-sec-one">
                    <span>
                    <h2>Address :</h2>
                    
                    <p> BCCI-IPL 4th Floor, Cricket Centre. Wankhede Stadium <span> <br /> </span> 'D' Road, Churchgate Mumbai - 400020 India</p>
                    </span>
                

                </div>
                <div className="about-child-sec-two">
                    <div>
                    <h1>contact us:</h1>
                    <ul>
                        <li> +91 22 22800300</li>
                        <li> +91 22 22800300</li>
                        <li> +91 22 22800300</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default About;