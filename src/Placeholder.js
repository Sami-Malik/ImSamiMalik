import React from "react";

function Placeholder() {
    const stylesDiv = {
        backgroundColor: "#000",
        width: "363px",
        height: "170px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        letterSpacing: "10px",
    };
    return (
        <div style={stylesDiv} className="placeholder">
            <span style={{ filter: "blur(2px)" }}>Loading....</span>
        </div>
    );
}

export default Placeholder;
