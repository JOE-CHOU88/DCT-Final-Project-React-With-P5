import React from 'react';
import Sketch from 'react-p5';

function P5Sketch({ userInput, ellipseColor }) {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 400).parent(canvasParentRef);
    }

    const draw = (p5) => {
        p5.background(255, 120, 20);
        p5.fill(ellipseColor);
        p5.ellipse(userInput, userInput, userInput);
    }

    return (
        <Sketch setup={setup} draw={draw} />
    )
}

export default P5Sketch;