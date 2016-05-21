
Validator = require "Validator"
wrongType = require "wrongType"
getProto = require "getProto"

module.exports =
PureObject = Validator "PureObject",

  test: (value) ->
    value and not getProto value

  assert: (value, key) ->
    return if @test value
    wrongType this, key

PureObject.create = ->
  Object.create null
