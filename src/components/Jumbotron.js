import React from "react";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid bg-info">
            <div className="container">
                <h1 className="display-5">Clicky Game!</h1>
                <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    );
}

export default Jumbotron;