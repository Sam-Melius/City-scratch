// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createCountString } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `The waterfront has been selected 3 times,
    the skyline has been selected 3 times,
    and the castle has been selected 3 times.`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCountString(3, 3, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'The waterfront should be selected 3 times, the skyline 3 times, and the castle 3 times.');
});
