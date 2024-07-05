import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="fullcontact">
        <div className="clickme">
          <a className="ankor" href="https://abc.com/" target="_blank">
            <h1>Click Me</h1>
          </a>
          <a href="https://abc.com/" target="_blank">
            <img
              src="https://www.stanthonyshs.org/wp-content/uploads/2020/10/Apps-icon.png"
              alt=""
            />
          </a>
        </div>
        <div className="allicons">
          <div className="sizing">
            <div className="contacticons">
              <a href="" target="_blank">
                <img src="https://i.pinimg.com/736x/f1/4c/f9/f14cf99c9c6f445779da46eeb1b0003d.jpg" />
                <h3>My Phone</h3>
              </a>
            </div>
            <div className="contacticons">
              <a href="" target="_blank">
                <img src="https://img1.cgtrader.com/items/3561294/2922d48c23/large/contact-us-id-card-icon-3d-model-low-poly-obj.jpg" />
                <h3>Contact Card</h3>
              </a>
            </div>
            <div className="contacticons">
              <a href="" target="_blank">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66oPioSR75yAT3tTaWHffl2d3UZduAHB03w&usqp=CAU" />
                <h3>Decord</h3>
              </a>
            </div>
            <div className="contacticons">
              <a href="" target="_blank">
                <img src="https://cdn.pixabay.com/photo/2016/11/01/12/09/twitter-logo-1788039_1280.jpg" />
                <h3>Twww</h3>
              </a>
            </div>
            <div className="contacticons">
              <a href="" target="_blank">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BuuSlsTz9M49Qm3AkuqkbTaJUpf2Lpm7VQ&usqp=CAU" />
                <h3>OpenS</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="cirobtn">
          <a
            href="https://circo.me/pjkXOaH3AGQWILZaj588rAuwWKw2"
            target="_blank"
          >
            <button>Create Your Ciro</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
