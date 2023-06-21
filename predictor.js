const math = {}
math.absolute = (x) => {
    if (x < 0) {
        return -x;
    }
    return x;
}
math.power = (num, pow) => {
    if (num == 0) {
        return 0;
    }
    if (pow == 0) {
        return 1;
    }
    if (pow > 0) {
        let res = num;
        for (let i = 1; i < pow; i++) {
            res *= num;
        }
        return res;
    } else if (pow < 0) {
        let res = num;
        let newPow = math.absolute(pow);
        for (let i = 1; i < newPow; i++) {
            res *= num;
        }
        return 1 / res;
    }
    return num;
}
math.euler = () => {
    return Math.E;
}


const activation = {}

activation.sigmoid = (x) => {
    return 1 / (1 + math.power(math.euler(), -x));
}

class NeuralNetwork {
    constructor(inputSize,hiddenSize,outputSize) {
        this.inputSize = inputSize;
        this.hiddenSize = hiddenSize;
        this.outputSize = outputSize;
        this.weights = [];
        this.bias = [];
        this.init();
    }
}
// const trainingData = [
//     { input: [0, 0], output: [0] },
//     { input: [0, 1], output: [1] },
//     { input: [1, 0], output: [1] },
//     { input: [1, 1], output: [0] }
// ];

// for (let i = 0; i < 10000; i++) {
//     for (let data of trainingData) {
//         neuralNetwork.train(data.input, data.output);
//     }
// }

// console.log(neuralNetwork.predict([0, 0])); // Output yang diharapkan: [0]
// console.log(neuralNetwork.predict([0, 1])); // Output yang diharapkan: [1]
// console.log(neuralNetwork.predict([1, 0])); // Output yang diharapkan: [1]
// console.log(neuralNetwork.predict([1, 1])); // Output yang diharapkan: [0]
