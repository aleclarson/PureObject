var Validator, getProto, wrongType;

Validator = require("Validator");

wrongType = require("wrongType");

getProto = require("getProto");

module.exports = Validator("PureObject", {
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

//# sourceMappingURL=../../map/src/PureObject.map
