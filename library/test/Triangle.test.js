const Triangle = require('../triangle.js');

describe('triangle', () => {
    it('This should return logo and color of users choice', () => {
        const triangle = new Triangle('lime','JS','aliceblue');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="lime"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="aliceblue">JS</text>
        </svg>
        `
        );
    });
});