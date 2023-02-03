import React from "react";
import Card from "./Cards";
import Avatar from "./Avatar";


function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>

            <Avatar imgURL="https://profile-images.xing.com/images/6b67dba0bb7c6fbf45db149097613b56-2/linda-ochwada.1024x1024.jpg" />

            <Card name="Beyonce"
                imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                phone="+123 456 789"
                email="b@beyonce.com" />

            <Card name="Jack Bauer"
                imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
                phone="+987 654 321"
                email="jack@nowhere.com" />

            <Card name="Chuck Norris"
                imgURL="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
                phone="+918 372 574"
                email="gmail@chucknorris.com" />
        </div>
    )
}

export default App;