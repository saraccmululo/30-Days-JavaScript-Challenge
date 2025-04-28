//Closures

const createHelloWorld = () => () => 'Hello World';

const callHelloWorld = createHelloWorld();
const message = callHelloWorld();