import React from "react";

import performancePicture from "../../assets/performance.png";
import "./home.css";

const Home = () => {
    return (
        <div>
            <div id="hero-section">
                <div class="student-images-section">
                    <div id="student-images"></div>
                </div>
                <div class="performance-image-section">
                    <h1>My Learning </h1>
                    <p>Track your learning process</p>
                    <div id="performance-image-container">
                        <img src={performancePicture} alt="" />
                    </div>
                </div>

                <div id="profile-page">
                    <i
                        id="profile-back-btn"
                        class="fa-solid fa-xmark fa-lg"
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default Home;
