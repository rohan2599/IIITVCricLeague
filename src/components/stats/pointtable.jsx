import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import "../../static/css/pointtable.css";

class Stats extends Component {
  render() {
    const { stats } = this.props;
    // console.log("stats", stats);
    if (!stats) {
      return <div className="spinner-border text-secondary loading" />;
    } else {
      return (
        <React.Fragment>
          <div className="contDiv">
            <div className="table-responsive-md">
              <table className="table table-hover table-bordered col-md-12">
                <thead>
                  <tr className="thead">
                    <th style={{ width: "250px" }} col="row">
                      TEAM
                    </th>
                    <th col="row">M</th>
                    <th col="row">W</th>
                    <th col="row">L</th>
                    <th col="row">D</th>
                    <th col="row">PT</th>
                    <th col="row">NRR</th>
                  </tr>
                </thead>
                <tbody className="tbody">
                  {stats.map(stat => (
                    <tr key={stat.id}>
                      <td>{stat.name}</td>
                      <td>{stat.match}</td>
                      <td>{stat.won}</td>
                      <td>{stat.lose}</td>
                      <td>{stat.draw}</td>
                      <td>{stat.point_table}</td>
                      <td>{stat.net_run_rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    stats: state.firestore.ordered.stats
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "stats" }])
)(Stats);
