QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST cal', assert => {
  assert.equal(cal(1, 2, 3), 24, 'test 1')
  assert.equal(cal(13, 5, 10), 112, 'test 2')
  assert.equal(cal(0, 0, 0), 0, 'test 3')
  assert.equal(cal(4, 0, 0), 16, 'test 4')
  assert.equal(cal(3.5, 0 ,0),14 ,'test 5')
  assert.equal(cal('a', 0, 7), NaN, 'This test case will fail because passing string value as a input')
})