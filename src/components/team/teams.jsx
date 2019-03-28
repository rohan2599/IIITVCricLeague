import React, { Component } from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";
import "../../static/css/team.css";
import img from "../../static/image/pointtable.png";

const width = "100%",
  height = "65vmin";
const ContTeam = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
  text-align: center;
`;
const Child = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
const ArrowStyle = styled.div`
  text-shadow: 1px 1px 1px #09c0f7;
  color: #09c0f7;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`;
const DotStyle = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px 09c0f7;
  user-select: none;
  padding-bottom: 10em;
`;
const DotsStyle = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`;
const Slider = ({ position, total, handleClick, children }) => (
  <ContTeam className="main-div">
    <div className="cardHeading-rot">
      TEAM <span>DETAILS</span>
    </div>
    <div className="cardUnderline-rot" />
    <Child>
      {children}
      <ArrowStyle onClick={handleClick} data-position={position - 1}>
        {"<"}
      </ArrowStyle>
      <ArrowStyle right onClick={handleClick} data-position={position + 1}>
        {">"}
      </ArrowStyle>
    </Child>
    <DotsStyle>
      {Array(...Array(total)).map((val, index) => (
        <DotStyle key={index} onClick={handleClick} data-position={index}>
          {index === position ? "● " : "○ "}
        </DotStyle>
      ))}
    </DotsStyle>
  </ContTeam>
);
const Carousel = makeCarousel(Slider);

class Stats extends Component {
  render() {
    return (
      <Carousel>
        <Slide right>
          <div className="card--div">
            <div className="playerCard">
              <div className="card--image">
                <img className="team--image" src={img} alt="imgaa" />
              </div>
              <div className="card--details">
                <h3>
                  STEEL <span>WINGS</span>
                </h3>
              </div>
            </div>
            <div className="playerCard">
              <div className="card--image">
                <img className="team--image" src={img} alt="imgaa" />
              </div>
              <div className="card--details">
                <h3>
                  STEEL <span>WINGS</span>
                </h3>
              </div>
            </div>
            <div className="playerCard">
              <div className="card--image">
                <img className="team--image" src={img} alt="imgaa" />
              </div>
              <div className="card--details">
                <h3>
                  STEEL <span>WINGS</span>
                </h3>
              </div>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="card--div">
            <div className="playerCard">
              <div className="card--image">
                <img className="team--image" src={img} alt="imgaa" />
              </div>
              <div className="card--details">
                <h3>
                  STEEL <span>WINGS</span>
                </h3>
              </div>
            </div>
            <div className="playerCard">
              <div className="card--image">
                <img className="team--image" src={img} alt="imgaa" />
              </div>
              <div className="card--details">
                <h3>
                  STEEL <span>WINGS</span>
                </h3>
              </div>
            </div>
            <div className="playerCard">
              <div className="card--image">
                <img className="team--image" src={img} alt="imgaa" />
              </div>
              <div className="card--details">
                <h3>
                  STEEL <span>WINGS</span>
                </h3>
              </div>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="card--div">
            <div className="playerCard">
              <div className="card--image">
                <img className="team--image" src={img} alt="imgaa" />
              </div>
              <div className="card--details">
                <h3>
                  STEEL <span>WINGS</span>
                </h3>
              </div>
            </div>
            <div className="playerCard">
              <div className="card--image">
                <img className="team--image" src={img} alt="imgaa" />
              </div>
              <div className="card--details">
                <h3>
                  STEEL <span>WINGS</span>
                </h3>
              </div>
            </div>
            <div className="playerCard">
              <div className="card--image">
                <img className="team--image" src={img} alt="imgaa" />
              </div>
              <div className="card--details">
                <h3>
                  STEEL <span>WINGS</span>
                </h3>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    );
  }
}

export default Stats;
