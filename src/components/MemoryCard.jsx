import React, { Component } from "react";
import { render } from "@testing-library/react";
import './MemoryCard.css';

class MemoryCard extends Component {
    render() {
        return (
            <div className="MemoryCard">
                <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt=""></img>
            </div>
        );
    }
}

export default MemoryCard;