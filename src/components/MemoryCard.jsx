import React, { Component } from "react";
import { render } from "@testing-library/react";
import './MemoryCard.css';

class MemoryCard extends Component {
    render() {
        return (
            <div className="MemoryCard">
                <div className="MemoryCardInner">
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt=""></img>
                    </div>
                    <div className="MemoryCardFront">
                        ∆
                    </div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;