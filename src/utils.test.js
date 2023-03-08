import { sayHello } from "./utils.js";

test('Say Hello Andy', () => {
    expect(sayHello("Andy")).toBe('Hello Andy')
})
test('Say Hello 44', () => {
    expect(sayHello(44)).toBe('Hello 44')
})
test('Say Hello Andy', () => {
    expect(sayHello()).toBe('Hello undefined')
})