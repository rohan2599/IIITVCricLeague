import React, { Component } from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";
import "../../static/css/teams.css";
import img1 from "../../static/image/pointtable.png";

const width = "100%",
  height = "65vmin";
const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
  text-align: center;
`;
const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
const Arrow = styled.div`
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
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px 09c0f7;
  user-select: none;
  padding-bottom: 13em;
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`;
const Slider1 = ({ position, total, handleClick, children }) => (
  <Container className="main--div">
    <div className="cardHeadingTeam--rot">
      TEAM <span>DETAILS</span>
      <div className="cardUnderlineTeam--rot" />
    </div>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>
        {"<"}
      </Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>
        {">"}
      </Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? "● " : "○ "}
        </Dot>
      ))}
    </Dots>
  </Container>
);
const Carousel = makeCarousel(Slider1);

class Stats extends Component {
  render() {
    return (
      <Carousel>
        <Slide right>
          <div className="card--div">
            <div className="player--card">
              <div className="card--image">
                <img className="pic" src={img1} alt="imgaa" />
              </div>
              <div className="card--upperline" />
              <div className="card--details">
                <h6 className="card--heading6">
                  <span>MATCHES:</span>
                </h6>
                <h6>RUNS:</h6>
                <h4>
                  Yogendra <span> Jangir</span>
                </h4>
              </div>
            </div>
            <div className="player--card">
              <div className="card--image">
                <img className="pic" src={img1} alt="imgaa" />
              </div>
              <div className="card--upperline" />
              <div className="card--details">
                <h6 className="card--heading6">
                  <span>MATCHES:</span>
                </h6>
                <h6>RUNS:</h6>
                <h4>
                  Yogendra <span> Jangir</span>
                </h4>
              </div>
            </div>
            <div className="player--card">
              <div className="card--image">
                <img className="pic" src={img1} alt="imgaa" />
              </div>
              <div className="card--upperline" />
              <div className="card--details">
                <h6 className="card--heading6">
                  <span>MATCHES:</span>
                </h6>
                <h6>RUNS:</h6>
                <h4>
                  Yogendra <span> Jangir</span>
                </h4>
              </div>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="card--div">
            <div className="player--card">
              <div className="card--image">
                <img className="pic" src={img1} alt="imgaa" />
              </div>
              <div className="card--upperline" />
              <div className="card--details">
                <h6 className="card--heading6">
                  <span>MATCHES:</span>
                </h6>
                <h6>RUNS:</h6>
                <h4>
                  Yogendra <span> Jangir</span>
                </h4>
              </div>
            </div>
            <div className="player--card">
              <div className="card--image">
                <img className="pic" src={img1} alt="imgaa" />
              </div>
              <div className="card--upperline" />
              <div className="card--details">
                <h6 className="card--heading6">
                  <span>MATCHES:</span>
                </h6>
                <h6>RUNS:</h6>
                <h4>
                  Yogendra <span> Jangir</span>
                </h4>
              </div>
            </div>
            <div className="player--card">
              <div className="card--image">
                <img className="pic" src={img1} alt="imgaa" />
              </div>
              <div className="card--upperline" />
              <div className="card--details">
                <h6 className="card--heading6">
                  <span>MATCHES:</span>
                </h6>
                <h6>RUNS:</h6>
                <h4>
                  Yogendra <span> Jangir</span>
                </h4>
              </div>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="card--div">
            <div className="player--card">
              <div className="card--image">
                <img className="pic" src={img1} alt="imgaa" />
              </div>
              <div className="card--upperline" />
              <div className="card--details">
                <h6 className="card--heading6">
                  <span>MATCHES:</span>
                </h6>
                <h6>RUNS:</h6>
                <h4>
                  Yogendra <span> Jangir</span>
                </h4>
              </div>
            </div>
            <div className="player--card">
              <div className="card--image">
                <img className="pic" src={img1} alt="imgaa" />
              </div>
              <div className="card--upperline" />
              <div className="card--details">
                <h6 className="card--heading6">
                  <span>MATCHES:</span>
                </h6>
                <h6>RUNS:</h6>
                <h4>
                  Yogendra <span> Jangir</span>
                </h4>
              </div>
            </div>
            <div className="player--card">
              <div className="card--image">
                <img className="pic" src={img1} alt="imgaa" />
              </div>
              <div className="card--upperline" />
              <div className="card--details">
                <h6 className="card--heading6">
                  <span>MATCHES:</span>
                </h6>
                <h6>RUNS:</h6>
                <h4>
                  Yogendra <span> Jangir</span>
                </h4>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    );
  }
}

export default Stats;
