module.exports = function(inTarget) {
  if (typeof inTarget.prototype.render === "undefined") {
    inTarget.prototype.render = function() {
      return null;
    };
  }
};
