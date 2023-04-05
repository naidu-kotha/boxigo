import React, { Component } from "react";
import MoveCard from "../MoveCard";
import Sidebar from "../Sidebar";
import "./index.css";

class Home extends Component {
  state = {
    estimateData: [],
  };
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const movesData = await fetch("http://test.api.boxigo.in/sample-data/");
    // console.log(movesData);
    if (movesData.ok) {
      const moves = await movesData.json();
      // console.log(moves);
      const customerFlow = moves.Customer_Estimate_Flow.map((estimate) => {
        const estimateWithCamelCaseKeys = {};
        for (let key in estimate) {
          let camelCaseKey = key.replace(/_([a-z])/g, (g) =>
            g[1].toUpperCase()
          );
          estimateWithCamelCaseKeys[camelCaseKey] = estimate[key];
        }
        return estimateWithCamelCaseKeys;
      });
      console.log(customerFlow);
      this.setState({ estimateData: customerFlow });
    }
  };

  render() {
    const { estimateData } = this.state;
    return (
      <div className="home-bg">
        <img
          src="https://boxigo.in/assets/images/home/boxigo_logo_small.png"
          alt="boxigo"
          className="logo"
        />
        <div className="content-container">
          <Sidebar />
          <div>
            <h1 className="moves-heading">My Moves</h1>
            {estimateData.map((each) => (
              <MoveCard data={each} key={each.estimateId} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
