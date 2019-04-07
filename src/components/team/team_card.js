import React, { Component } from "react";
import "../../static/css/team.css";

class TeamCard extends Component {
  state = {};
  render() {
    const cardData = this.props.cardData;
    console.log(cardData);
    return (
      <div className="playerCard">
        <div className="card--image">
          <img className="team--image" src={cardData.team_image} alt="imgaa" />
        </div>
        <div className="card--details">
          <h3>
            {cardData.first_name} <span>{cardData.last_name}</span>
          </h3>
        </div>
      </div>
    );
  }
}

export default TeamCard;
