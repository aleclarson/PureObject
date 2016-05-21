var PureObject, Validator, getProto, wrongType;

Validator = require("Validator");

wrongType = require("wrongType");

getProto = require("getProto");

module.exports = PureObject = Validator("PureObject", {
  test: function(value) {
    return value && !getProto(value);
  },
  assert: function(value, key) {
    if (this.test(value)) {
      return;
    }
    return wrongType(this, key);
  }
});

PureObject.create = function() {
  return Object.create(null);
};

//# sourceMappingURL=../../map/src/PureObject.map
