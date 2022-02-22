const brain = require("brain.js");

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
  activation: "sigmoid", // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
};

const net = new brain.NeuralNetwork(config);

dataInput = [
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.166, 0.214, 0.262, 0.310, 0.358, 0.406, 0.454, 0.502, ], output: [0.048, 0.118]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.080, 0.116, 0.154, 0.190, 0.228, 0.264, 0.302, 0.338, ], output: [0.037, 0.042]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.207, 0.224, 0.241, 0.258, 0.275, 0.292, 0.309, 0.326, ], output: [0.017, 0.190]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.176, 0.222, 0.268, 0.314, 0.360, 0.406, 0.452, 0.498, ], output: [0.046, 0.130]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.060, 0.098, 0.136, 0.174, 0.212, 0.250, 0.288, 0.326, ], output: [0.038, 0.022]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.181, 0.187, 0.193, 0.199, 0.205, 0.211, 0.217, 0.223, ], output: [0.006, 0.175]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.128, 0.156, 0.184, 0.212, 0.240, 0.268, 0.296, 0.324, ], output: [0.028, 0.100]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.110, 0.200, 0.290, 0.380, 0.470, 0.560, 0.650, 0.740, ], output: [0.090, 0.020]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.116, 0.142, 0.168, 0.194, 0.220, 0.246, 0.272, 0.298, ], output: [0.026, 0.090]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.082, 0.142, 0.202, 0.262, 0.322, 0.382, 0.442, 0.502, ], output: [0.060, 0.022]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.090, 0.092, 0.094, 0.096, 0.098, 0.100, 0.102, 0.104, ], output: [0.002, 0.088]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.226, 0.302, 0.378, 0.454, 0.530, 0.606, 0.682, 0.758, ], output: [0.076, 0.150]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.282, 0.314, 0.346, 0.378, 0.410, 0.442, 0.474, 0.506, ], output: [0.032, 0.250]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.086, 0.166, 0.244, 0.324, 0.402, 0.482, 0.560, 0.640, ], output: [0.079, 0.008]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.238, 0.320, 0.400, 0.482, 0.562, 0.644, 0.724, 0.806, ], output: [0.081, 0.158]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.198, 0.266, 0.334, 0.402, 0.470, 0.538, 0.606, 0.674, ], output: [0.068, 0.130]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.274, 0.318, 0.362, 0.406, 0.450, 0.494, 0.538, 0.582, ], output: [0.044, 0.230]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.276, 0.327, 0.378, 0.429, 0.480, 0.531, 0.582, 0.633, ], output: [0.051, 0.225]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.126, 0.178, 0.232, 0.284, 0.338, 0.390, 0.444, 0.496, ], output: [0.053, 0.072]},
  {input: [0.010, 0.020, 0.030, 0.040, 0.050, 0.060, 0.070, 0.080, 0.109, 0.193, 0.277, 0.361, 0.445, 0.529, 0.613, 0.697, ], output: [0.084, 0.025]},
];

data = [1, 2, 3, 4, 5, 6, 7, 8, 10.99649, 10.50786, 19.71283, 17.75774, 20.19847, 23.41213, 30.0649, 39.01343]

var dataNorm = []

for(var i = 0, length = data.length; i < length; i++){
  dataNorm[i] = data[i]/100;
}


net.train(dataInput, { log: true, errorThresh: 1e-10 });

const output = net.run(dataNorm);

console.log( (100*output[0]).toFixed(3) + "*i + " + (100*output[1]).toFixed(3) );