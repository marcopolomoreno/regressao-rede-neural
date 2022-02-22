const brain = require('brain.js');

const net = new brain.NeuralNetwork( {hiddenLayers: [20]} );

net.train([
  { input: [0.1, 0.4, 0.1], output: [0.4] },
  { input: [0.22, 0.16, 0.55], output: [0.55] },
  { input: [0.87, 0.16, 0.21], output: [0.87] },
  { input: [0.44, 0.01, 0.71], output: [0.71] },
  { input: [0.02, 0.05, 0.01], output: [0.05] },
  { input: [0.00, 0.99, 0.11], output: [0.99] },
  { input: [0.43, 0.34, 0.44], output: [0.44] },
  { input: [0.57, 0.55, 0.59], output: [0.59] },
  { input: [0.67, 0.37, 0.81], output: [0.81] },
  { input: [0.66, 0.55, 0.44], output: [0.66] },
  { input: [0.23, 0.17, 0.19], output: [0.23] },
  { input: [0.22, 0.55, 0.97], output: [0.97] },
], 
{ 
}
);

const output = net.run([0.1, 0.2, 0.4])

console.log(output)