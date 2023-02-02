import React from "react";
import ReactDOM from "react-dom";

const img1 =
  "https://www.northeastern.edu/graduate/blog/wp-content/uploads/2019/09/iStock-1150384596-2.jpg";

const img2 =
  "https://elearningindustry.com/wp-content/uploads/2020/10/advantages-and-disadvantages-of-online-learning.jpg";

const img3 = "https://blog.hubspot.com/hubfs/best-online-courses.jpg";

const myName = "Ochwada";

const year = new Date().getFullYear();
// const dateNow = new Date().toLocaleDateString("de-DE");
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const dateNow = today.toUTCString();

const customStyling = {
  textAlign: "left",
  color: "#EBC7E6"
};
const customColor = {
  color: " "
};

// Javascript
const time = new Date().getHours();

let greetings;
if (time < 12) {
  greetings = "Goodmorning";
  customColor.color = "#C780FA";
} else if (time < 18) {
  greetings = "Good Afternoon";
  customColor.color = "#E3ACF9";
} else {
  greetings = "Goodnight";
  customColor.color = "#FADA9D";
}

ReactDOM.render(
  <div className="container">
    {/* List */}
    <div>
      <h1 className="heading">My First React JS Website</h1>
      <h3 className="headingDate" style={customColor}>
        {greetings} {myName}!
      </h3>
      <p style={customStyling}>{dateNow}</p>
      <ul>
        <li>About</li>
        <li>Home</li>
        <li>Contact</li>
      </ul>
    </div>
    <hr />
    {/* Images*/}
    <div className="images">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </div>
    <hr style={{ width: "25%" }} />
    {/* Date with js*/}
    <div className="footer">
      <p> Created by {myName}</p>
      <p> Copyright@{year} </p>
    </div>
  </div>,
  document.getElementById("root")
);
