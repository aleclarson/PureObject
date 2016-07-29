var PureObject, Validator, getProto, wrongType;

Validator = require("Validator");

wrongType = require("wrongType");

getProto = require("getProto");

PureObject = Validator("PureObject", {
  test: function(value) {
    return value && !getProto(value);
  },
  assert: function(value, key) {
    if (this.test(value)) {
      return;
    }
    return wrongType(this, key);
  },
  create: function() {
    return Object.create(null);
  }
});

module.exports = PureObject;

//# sourceMappingURL=map/PureObject.map
