
Validator = require "Validator"
wrongType = require "wrongType"
getProto = require "getProto"

module.exports = Validator "PureObject",

  test: (value) ->
    value and not getProto value

  assert: (value, key) ->
    return if @test value
    wrongType this, key
