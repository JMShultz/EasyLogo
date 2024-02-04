const Circle = require('./Circle.js');
const Square= require('./Square.js');
const Triangle= require('./triangle.js');



function setShape(response) {

    if (response.shape === 'Circle') {
        let shape = new Circle (response.shapeColor, response.text, response.textColor)
        return shape.render()
    }

    if (response.shape === 'Square') {
        let shape = new Square (response.shapeColor, response.text, response.textColor)
        return shape.render()
    }

    if (response.shape === 'Triangle') {
        let shape = new Triangle (response.shapeColor, response.text, response.textColor)
        return shape.render()
    }
};

module.exports = setShape;