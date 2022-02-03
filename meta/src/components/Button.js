import React from "react";

export default function Button({ name, styleName }) {
    return (
        <div>
            <button className={`button ${styleName}`}>{`${name} >`}</button>
        </div>
    )
}