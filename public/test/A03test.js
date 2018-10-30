// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (M03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing Salary calculation function in javascript', function (assert) {
    assert.strictEqual(get_salary(5,7),35, 'Successful outcome with inout data as positive numbers');
    assert.strictEqual(get_salary(-2,6),'The given argument is not a valid data', 'Expected output with invalid numeric values as '+get_salary(-2,6));
	assert.strictEqual(get_salary("ABC",3),'The given argument is not a valid data', 'Expected output with invalid character data as '+get_salary("ABC",3));	
    assert.strictEqual(get_salary(0,7),0, 'Successful outcome with input data as positive numbers & zero');

});