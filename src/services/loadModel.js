const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/cancer-prediction-storage-dintara/model.json');
}
module.exports = loadModel;