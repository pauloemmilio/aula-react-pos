import React from "react";

export default (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <h2>{props.description}</h2>
            <h2>{props.value}</h2>
        </div>
    );
};