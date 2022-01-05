const HelloWorld = (name) => {
    return `Hello ${name}, First Common Function`;
}

const Add = (a, b) => {
    return a + b;
}

module.exports = {
    HelloWorld:HelloWorld,
    Add:Add
}