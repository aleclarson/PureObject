
Validator = require "Validator"
wrongType = require "wrongType"
getProto = require "getProto"

PureObject = Validator "PureObject",

  test: (value) ->
    value and not getProto value

  assert: (value, key) ->
    return if @test value
    wrongType this, key

  create: ->
    Object.create null

module.exports = PureObject
