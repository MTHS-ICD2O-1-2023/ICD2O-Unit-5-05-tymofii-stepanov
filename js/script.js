// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2020
// This file contains the JS functions for index.html


function checkTriangleType() {
  const side1 = parseFloat(document.getElementById('side1').value);
  const side2 = parseFloat(document.getElementById('side2').value);
  const side3 = parseFloat(document.getElementById('side3').value);

  if (isValidTriangle(side1, side2, side3)) {
    let triangleType;
    if (side1 === side2 && side2 === side3) {
      triangleType = 'equilateral triangle';
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      triangleType = 'isosceles triangle';
    } else {
      triangleType = 'scalene triangle';
    }

    document.getElementById('triangle-type').innerHTML = `The triangle is a ${triangleType}.`;
  } else {
    document.getElementById('triangle-type').innerHTML = 'Invalid triangle. Please enter valid side lengths.';
  }
}

function isValidTriangle(side1, side2, side3) {
  return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
}
