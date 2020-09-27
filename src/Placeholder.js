import React from "react";

function Placeholder() {
    const stylesDiv = {
        backgroundColor: "#000",
        width: "363px",
        height: "170px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "calc( 16px + (24 - 16) * (100vw - 400px) / (800 - 400) )",
        letterSpacing: "10px",
    };
    return (
        <div style={stylesDiv} className="placeholder">
            <span style={{ filter: "blur(2px)" }}>Loading</span>
        </div>
    );
}

export default Placeholder;
