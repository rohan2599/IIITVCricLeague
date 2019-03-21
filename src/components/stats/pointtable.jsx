import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import "../../static/css/pointtable.css";
import loader from "../../static/image/loading.gif";
import image from "../../static/image/pointtable.png";
class Stats extends Component {
  render() {
    const { stats } = this.props;
    // console.log("stats", stats);
    if (!stats) {
      return (
        <div className="loading">
          <img src={loader} alt="loading..." />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="row contDiv">
            <div className="table-responsive-md col-md-6">
              <div className="heading ">
                POINTS <span>TABLE</span>
                <div className="underline" />
              </div>
              <table className="table col-md-12 offset-md-2">
                <thead>
                  <tr className="thead">
                    <th>TEAM</th>
                    <th>M</th>
                    <th>W</th>
                    <th>L</th>
                    <th>PT</th>
                    <th>NRR</th>
                  </tr>
                </thead>
                <tbody className="tbody">
                  {stats.map(stat => (
                    <tr key={stat.id}>
                      <td>{stat.name}</td>
                      <td>{stat.match}</td>
                      <td>{stat.won}</td>
                      <td>{stat.lose}</td>
                      <td>{stat.point_table}</td>
                      <td>{stat.net_run_rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="offset-md-1 col-md-5">
              <img className="pointtableimage" src={image} alt="Cricketer" />
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
