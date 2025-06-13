import React, { useState } from "react";


const TrafficLight = () => {

    const [color, setColor] = useState("red");
    const isActive = (actualColor) => (color === actualColor ? "glow" : "");
    function changeColor(colorName) {
        setColor(colorName);
    }

    return (
        <div className={`d-flex justify-content-center align-items-center vh-100`} >
            <div className="d-flex flex-column align-items-center bg-dark p-3 rounded" style={{ width: "100px" }}>
                <div
                    onClick={() => changeColor("red")}
                    className={`rounded-circle bg-danger ${isActive("red")} my-2`}
                    style={{ width: "60px", height: "60px" }}

                ></div>

                <div
                    onClick={() => changeColor("yellow")}
                    className={`rounded-circle bg-warning ${isActive("yellow")}my-2`}
                    style={{ width: "60px", height: "60px" }}
                ></div>

                <div
                    onClick={() => changeColor("green")}
                    className={`rounded-circle bg-success ${isActive("green")}my-2`}
                    style={{ width: "60px", height: "60px" }}
                ></div>
            </div>

        </div>
    );
}


export default TrafficLight;