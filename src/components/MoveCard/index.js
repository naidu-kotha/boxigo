/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { BsArrowRight, BsCalendar2WeekFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaRoute } from "react-icons/fa";
import { TbPackages } from "react-icons/tb";
import { GrEdit } from "react-icons/gr";
import { IoCheckbox } from "react-icons/io5";
import { RiAlertFill } from "react-icons/ri";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import format from "date-fns/format";
import "./index.css";

class MoveCard extends Component {
  state = { showMoveDetails: false, inventoryClicked: false };

  toggleMoveDetails = () => {
    this.setState((prevState) => ({
      showMoveDetails: !prevState.showMoveDetails,
    }));
  };

  toggleInventoryDetails = () => {
    this.setState((prevState) => ({
      inventoryClicked: !prevState.inventoryClicked,
    }));
  };

  renderMoveDetails = () => {
    const { inventoryClicked } = this.state;
    const { data } = this.props;
    const {
      oldHouseAdditionalInfo,
      oldFloorNo,
      oldElevatorAvailability,
      oldParkingDistance,
      newFloorNo,
      newElevatorAvailability,
      newParkingDistance,
      items,
    } = data;

    return (
      <div className="additional-info-container">
        <div className="additional-info-sub-container">
          <div className="additional-btn-container">
            <h1 className="additional-heading">Additional Information</h1>
            <button className="additional-btn">Edit Additional Info</button>
          </div>
          <p className="additonal-text">{oldHouseAdditionalInfo}</p>
        </div>
        <div className="additional-info-sub-container">
          <div className="additional-btn-container">
            <h1 className="additional-heading">House Details</h1>
            <button className="additional-btn">Edit House Details</button>
          </div>
          <h1 className="house-type-heading">Existing House Details</h1>
          <div className="house-type-container">
            <div className="house-details-container">
              <h1 className="house-details-heading">Floor No.</h1>
              <p className="additional-text">{oldFloorNo}</p>
            </div>
            <div className="house-details-container">
              <h1 className="house-details-heading">Elevator Available</h1>
              <p className="additional-text">{oldElevatorAvailability}</p>
            </div>
            <div className="house-details-container">
              <h1 className="house-details-heading">
                Distance from Elevator / Staircase to truck
              </h1>
              <p className="additional-text">{oldParkingDistance}</p>
            </div>
          </div>
        </div>
        <div className="additional-info-sub-container">
          <h1 className="house-type-heading">New House Details</h1>
          <div className="house-type-container">
            <div className="house-details-container">
              <h1 className="house-details-heading">Floor No.</h1>
              <p className="additional-text">{newFloorNo}</p>
            </div>
            <div className="house-details-container">
              <h1 className="house-details-heading">Elevator Available</h1>
              <p className="additional-text">{newElevatorAvailability}</p>
            </div>
            <div className="house-details-container">
              <h1 className="house-details-heading">
                Distance from Elevator / Staircase to truck
              </h1>
              <p className="additional-text">{newParkingDistance}</p>
            </div>
          </div>
        </div>
        <div className="additional-info-sub-container">
          <div className="additional-btn-container">
            <h1 className="additional-heading">Inventory Details</h1>
            <button className="additional-btn">Edit Inventory</button>
          </div>
          {items.inventory.map((eachInventory) => (
            <div className="inventory-container" key={eachInventory.id}>
              <div className="inventory-sub-container">
                <h1 className="inventory-type">{eachInventory.displayName}</h1>
                <p className="inventory-count">
                  {eachInventory.category.length}
                </p>
              </div>
              {inventoryClicked ? (
                <button
                  onClick={this.toggleInventoryDetails}
                  className="inventory-arrow"
                >
                  <IoIosArrowUp />
                </button>
              ) : (
                <button
                  onClick={this.toggleInventoryDetails}
                  className="inventory-arrow"
                >
                  <IoIosArrowDown />
                </button>
              )}
            </div>
          ))}
          {inventoryClicked && (
            <ul className="inventory-list-container">
              {items.inventory.map((each) =>
                each.category.map((item) => (
                  <p key={item.id}>{item.displayName}</p>
                ))
              )}
            </ul>
          )}
        </div>
      </div>
    );
  };

  render() {
    const { showMoveDetails } = this.state;
    const { data } = this.props;
    const {
      movingFrom,
      movingTo,
      estimateId,
      propertySize,
      totalItems,
      movingOn,
      distance,
    } = data;

    const date = format(new Date(movingOn), "PPp");
    return (
      <div className="move-card">
        <div className="transport-info-container">
          <div className="location-details-container">
            <h1 className="location-heading">From</h1>
            <p className="location">{movingFrom}</p>
          </div>
          <div className="arrow-container">
            <BsArrowRight className="icon" />
          </div>
          <div className="location-details-container">
            <h1 className="location-heading">To</h1>
            <p className="location">{movingTo}</p>
          </div>
          <div>
            <h1 className="location-heading">Request#</h1>
            <p className="estimate">{estimateId}</p>
          </div>
        </div>
        <div className="move-details-container">
          <div className="move-icons-container">
            <AiFillHome className="icon" />
            <p className="move-details-name">{propertySize}</p>
          </div>
          <div className="move-icons-container">
            <TbPackages className="icon" />
            <p className="move-details-name">{totalItems}</p>
          </div>
          <div className="move-icons-container">
            <FaRoute className="icon" />
            <p className="move-details-name">{distance}</p>
          </div>
          <div className="move-icons-container">
            <BsCalendar2WeekFill className="icon" />
            <p className="move-details-name">{date}</p>
            <GrEdit className="edit-icon" />
          </div>
          <div className="move-icons-container">
            <IoCheckbox className="flexible" />
            <p className="flexible-heading"> Is Flexible</p>
          </div>
          <div>
            <button
              type="button"
              className="btn"
              onClick={this.toggleMoveDetails}
            >
              View Move Details
            </button>
            <button type="button" className="quotes-btn btn">
              Quotes Awaiting
            </button>
          </div>
        </div>
        <div className="disclamer">
          <RiAlertFill className="error-icon" />
          <p>
            <b>Disclamer </b>: please update your move date before two days of
            shifting
          </p>
        </div>
        {showMoveDetails && this.renderMoveDetails()}
      </div>
    );
  }
}

export default MoveCard;
