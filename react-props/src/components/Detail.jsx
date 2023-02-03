import React from "react";

function Detail(props) {
    return (

        <p className="info" >
            {props.phone}
            {props.email}
        </p>

    )
}

export default Detail;