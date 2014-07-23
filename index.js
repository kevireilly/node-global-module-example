// Create example constructor
function NGME() {}

// Add a dynamic method
NGME.prototype.example = function(arg) {
  console.log('Called example method:', arg);
};

// Export the constructor
module.exports = new NGME();
