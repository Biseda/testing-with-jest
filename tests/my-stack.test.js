const stack = require('../src/stack');

test('length returns the correct value', () => {
    expect(stack.length()).toBe(0);
    stack.push('hello');
    expect(stack.length()).toBe(1);
    stack.push('world');
    expect(stack.length()).toBe(2);
    stack.pop();
    expect(stack.length()).toBe(1);
    stack.pop();
    expect(stack.length()).toBe(0);
  });