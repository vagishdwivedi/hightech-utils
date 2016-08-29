var assert = require('assert')
  ,  nock = require('nock')
  ,  logger = require('winston')
  ,  connector = require('./../connector.js')
  ,  _ = require('lodash')
  ,  utils = require('./data/test.data.utils.js')

describe('Name splits into firstname,lastname,middlename',function() {
  before(function(done) {
    done()
  })
  after(function (done) {
    nock.cleanAll()
    done()
  })

  it('run the kpi function', function(done) {
    var options = {
      "bearerToken" : "87835688aee34a8d8f8cadd116971e95",
      "preMapData" : [{id:36},{id:37}],
      "postMapData" : [{id:36},{id:37}],
      "settings":{
        "sharedResources":{
         "globalState": {oaconnId: "578368da4928331c1db0adb6",_connectorId:"574ea059f8a769a00c9e3f5c"
       }}}
    }
    connector.hooks.sfOpportunityPostMap(options,function(){
      done()
    })
  })

})
