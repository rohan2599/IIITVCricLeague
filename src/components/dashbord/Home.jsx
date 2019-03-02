import React, { Component } from "react";
import "../../static/css/home.css";
import coverphoto from "../../static/image/coverphoto1.jpg";
import image from "../../static/image/frontpageimage.png";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="coverphoto-wrapper">
          <img className="coverphoto" src={coverphoto} alt="IIITV" />
          <img className="frontpageimage" src={image} alt="Cricketer" />
        </div>
        <h1 className="flc">
          FIRST LOVE <span>CRICKET</span>
        </h1>
        <button className="register--button">Register</button>

        {/* <div className="about--league">
          <h1>About The Cricket League</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ullam voluptates numquam natus in fugiat voluptatem fugit commodi
            mollitia tenetur dolorem non debitis, rerum officia, amet excepturi
            quidem omnis vel?{" "}
          </p>
        </div> */}
      </React.Fragment>
    );
  }
}

export default Home;
