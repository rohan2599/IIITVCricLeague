import React from "react";
import image from "../../static/image/kohali.jpg";
import "../../static/css/about.css";
const About = () => {
  return (
    <div className="contAbout">
      <div className="about--image">
        <div className="aboutHeading--rot">
          ABOUT THE <span>CRICKET LEAGUE</span>
          <div className="aboutUnderline--rot" />
        </div>
        <img className="kohali" src={image} alt="Kohali" />
      </div>
      <div className="about--details">
        <div className="paragraph">
          <div className="heading--about">
            STORY BEHIND STARTING <span>THE LEAGUE</span>
            <div className="underline--about" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, odit accusantium at neque beatae a quaerat explicabo
            nihil ex reprehenderit iusto asperiores culpa eligendi veniam
            laborum ullam, earum voluptatibus quod? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Perferendis cum, id porro fugit
            assumenda architecto quo quidem dolor fuga nam dicta recusandae!
            Incidunt corporis eaque quaerat placeat error libero repellat? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea
            optio nihil! Dicta vitae soluta ea iste pariatur quo facere error,
            unde quasi dolore ipsum at velit sint est saepe.Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Dignissimos, odit accusantium
            at neque beatae a quaerat explicabo nihil ex reprehenderit iusto
            asperiores culpa eligendi veniam laborum ullam, earum voluptatibus
            quod? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis cum, id porro fugit assumenda architecto quo quidem
            dolor fuga nam dicta recusandae! Incidunt corporis eaque quaerat
            placeat error libero repellat? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatum ea optio nihil! Dicta vitae
            soluta ea iste pariatur quo facere error, unde quasi dolore ipsum at
            velit sint est saepe.
          </p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default About;
