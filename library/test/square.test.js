const Square = require('../Square.js');

describe('Square', () => {
    it('This should return logo and color of users choice', () => {
        const square = new Square('red','JS','yellow');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="red"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="yellow">JS</text>
        </svg>
        `
        );
    });
});