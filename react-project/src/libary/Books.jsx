
import React from 'react';

export function Books(props) {
    const color = props.color;
    const myStyle = {
        backgroundColor: color,
    };

    return (
        <header style={myStyle}>
            <h1>Welcome to the library</h1>
        </header>
    );
}