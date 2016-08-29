var assert = require('assert')
  , nock = require('nock')
  , logger = require('winston')
  , connector = require('./../connector.js')
  , _ = require('lodash')

describe('Testing the wrappers functionality', function() {
  var options = {
    "bearerToken": "validToken"
    , "_integrationId": "validIntegrationId"
    , "configuration": {
      "operation": "Modify"
      , "type": "Contact"
    }
    , "connection": {
      "unencrypted": {
        "api_namespace": "XOX"
        , "user": "XOXO"
        , "company": "XOXOXO"
      }
      , "encrypted": {
        "password": "XOXO"
        , "api_key": "XOXOXOXO"
      }
    }
    , "delta": {
      "lastExecutionTime": Date.now()
    }
    , "data": [{
      "id": 1
      , "name": "something"
    }, {
      "id": 2
      , "name": "something2"
    }]
    , "state":{}
  }

  before(function(done) {
    done()
  })

  after(function(done) {
    nock.cleanAll();
    done()
  })

  it('should test importData', function(done) {
    var res = connector.wrappers.importData(options, function(err, response) {
      logger.info("-----\n", JSON.stringify(response[0].id), "-----\n")
      done()
    })
  })

  it('should test exportData', function(done) {
    var res = connector.wrappers.exportData(options, function(err, response) {
      logger.info("-----\n", JSON.stringify(response), "-----\n")
      done()
    })
  })

  it('should test pingConnection', function(done) {
    var res = connector.wrappers.pingConnection(options, function(err, response) {
      logger.info("-----\n", JSON.stringify(response), "-----\n")
      done()
    })
  })

})
