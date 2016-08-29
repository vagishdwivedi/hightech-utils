'use strict'
var request = require('request')
  , _ = require('lodash')
  , async = require('async')
  , findWhere = require('lodash.findwhere') 

var HERCULES_BASE_URL = 'http://api.localhost.io:5000'

var resolveIds = function(resourceConfigArray, globalState) {
  _.each(resourceConfigArray, function(resourceConfig) {
    for (var key in resourceConfig) {
      //as per the naming pattern, reference fields will always start from underscore '_'
      if (key.indexOf('_') !== 0) continue
      var searchObj = {}
      searchObj.name = resourceConfig[key]
      var objFromState = findWhere(globalState.configs, searchObj)
      if (objFromState && _.has(objFromState, '_id')) {
        resourceConfig[key] = objFromState._id
        if (_.has(resourceConfig, '_connectorId') && _.has(objFromState, '_connectorId')) {
          resourceConfig['_connectorId'] = objFromState._connectorId
        }
      }
    }
  })
  return resourceConfigArray
}

var requestIntegrator = function(relativeURI, reqMethod, data, bearerToken, callback) {
  var opts = {
    uri: HERCULES_BASE_URL + relativeURI
    , method: reqMethod
    , headers: {
        Authorization: 'Bearer ' + bearerToken
      , 'Content-Type': 'application/json'
    }
    , json: data
  }

  request(opts, function(error, response, body) {
    if (error) {
        return callback(error)
    }
    return callback(null, response, body)
  })
}

var createIOResource = function(resourceConfigArray, globalState, callback) {
  var resourceConfigArray = resolveIds(resourceConfigArray, globalState)
  //add bearerToken in the resources
  for (var i = 0; i < resourceConfigArray.length; i++) {
    resourceConfigArray[i].bearerTokenToCallIO = globalState.bearerToken
  }
  async.eachLimit(resourceConfigArray, resourceConfigArray.length,
    function(resource, cb) {
      var relUri = '/v1/' + resource.resourceType
        , bearerToken = resource.bearerTokenToCallIO

      delete resource.resourceType
      delete resource.bearerTokenToCallIO

      requestIntegrator(relUri, 'POST', resource, bearerToken, function(err, res, body) {
        if (err) return cb(err)
        resource._id = body._id
        globalState.configs.push(resource)
        cb(null)
      })
  }
  , function(err) {
    if (err) return callback(err)
    return callback(null)
  })
}
exports.connectorUtils = {
  'requestIntegrator': requestIntegrator
  , 'createIOResource': createIOResource
  , 'resolveIds': resolveIds
}
