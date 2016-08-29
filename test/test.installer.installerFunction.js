var assert = require('assert'),
    nock = require('nock'),
    logger = require('winston'),
    connector = require('./../connector.js'),
    _ = require('lodash'),
    utils = require('./data/test.data.utils.js');



describe('install.installerFunction functionality (+)', function() {
  before(function(done) {
    nock(utils.data.TEST_URL)
    .get('/v1/integrations/validIntegrationId')
    .reply(200, utils.findById(utils.data.integrationsData, 'validIntegrationId'))
    .put('/v1/integrations/validIntegrationId')
    .times(2)
    .reply(200, utils.findById(utils.data.integrationsData, 'validIntegrationId'))
    .post('/v1/connections')
    .reply(200, utils.data.connectionsData[0])
    .post('/v1/connections')
    .reply(200, utils.data.connectionsData[1])
    done()
  })

  after(function(done) {
    nock.cleanAll()
    done()
  })

  it('should return expectedResult when installerFunction is called', function(done) {
    var expectedResult = {
        "bearerToken": "sampleBearerToken"
      , "_integrationId": "validIntegrationId"
    }
    var result = connector.installer.installerFunction(utils.data.reqBody, function(error, data) {
      if (error) {
        logger.info('Received Error' + error)
        assert.ifError(error)
      }
      logger.info('received Data from callback' + JSON.stringify(data))
      assert.deepEqual(utils.data.reqBody,data)
      done()
    })
  })
})

describe('install.installerFunction functionality (-)', function() {
  before(function(done) {
    nock(utils.data.TEST_URL)
    .get('/v1/integrations/validIntegrationId')
    .replyWithError({
        'message': 'Error while fetching the integrations data'
      , 'code': 'AWFUL_ERROR'
    })
    .get('/v1/integrations/validIntegrationId')
    .times(2)
    .reply(200, utils.findById(utils.data.integrationsData, 'validIntegrationId'))
    .post('/v1/connections')
    .times(2)
    .replyWithError({
        'message': 'Error while creating the io resource'
      , 'code': 'AWFUL_ERROR'
    })
    .post('/v1/connections')
    .reply(200, utils.data.connectionsData[0])
    .post('/v1/connections')
    .reply(200, utils.data.connectionsData[1])
    .put('/v1/integrations/validIntegrationId')
    .replyWithError({
        'message': 'Error while saving integrationsData'
      , 'code': 'AWFUL_ERROR'
    })
    done()
  })

  after(function(done) {
    nock.cleanAll()
    done()
  })

  it('should return error when installerFunction is called', function(done) {
    var expectedError = {
        'message': 'Error while fetching the integrations data'
      , 'code': 'AWFUL_ERROR'
    }
    var result = connector.installer.installerFunction(utils.data.reqBody, function(error, data) {
      if (error) {
        logger.info('Received Error' + error)
        assert.deepEqual(error, expectedError)
      }
      logger.info('received Data from callback' + JSON.stringify(data))
      assert.equal(data, undefined)
      done()
    })
  })
  it('should return error when installerFunction is called createIOResource', function(done) {
    var expectedError = {
        'message': 'Error while creating the io resource'
      , 'code': 'AWFUL_ERROR'
    }
    var result = connector.installer.installerFunction(utils.data.reqBody, function(error, data) {
      if (error) {
        logger.info('Received Error' + error)
        assert.deepEqual(error, expectedError)
      }
      logger.info('received Data from callback' + JSON.stringify(data))
      assert.equal(data, undefined)
      done()
    })
  })
  it('should return error when installerFunction is called save integration record', function(done) {
    var expectedError = {
        'message': 'Error while saving integrationsData'
      , 'code': 'AWFUL_ERROR'
    }
    var result = connector.installer.installerFunction(utils.data.reqBody, function(error, data) {
      if (error) {
        logger.info('Received Error' + error)
        assert.deepEqual(error, expectedError)
      }
      logger.info('received Data from callback' + JSON.stringify(data))
      assert.equal(data, undefined)
      done()
    })
  })
})

describe('installer setup steps (+)', function() {
  before(function(done) {
    nock(utils.data.TEST_URL)
    .persist()
    .get('/v1/integrations/validIntegrationId')
    .reply(200, utils.findById(utils.data.integrationsData, 'validIntegrationId'))
    .put('/v1/integrations/validIntegrationId')
    .reply(200, utils.findById(utils.data.integrationsData, 'validIntegrationId'))
    .get('/v1/flows')
    .reply(200, utils.data.flowsData)
    .get('/v1/connections')
    .reply(200, utils.data.connectionsData)
    .get('/v1/exports')
    .reply(200, utils.data.exportsData)
    .get('/v1/imports')
    .reply(200, utils.data.importsData)
    .post('/v1/exports')
    .reply(function(uri, req, cb) {cb(null,[200,req])})
    .post('/v1/imports')
    .reply(function(uri, req, cb) {cb(null,[200,req])})
    .post('/v1/flows')
    .reply(function(uri, req, cb) {cb(null,[200,req])})
    .put('/v1/integrations/validIntegrationId')
    .reply(function(uri, req, cb) { cb(null,[200,req]) })
    .filteringPath(function(path) {
      if((path.indexOf('/v1/exports/579f3f9')!==-1 || path.indexOf('/v1/imports/579f3f9')!==-1 )) {
          if(path.indexOf('distributed')!==-1) {
              return '/v1/replaced/replacedPath/distributed'
          } else {
              return '/v1/replaced/replacedPath'
          }
      } else if (path.indexOf('/v1/flows/valid')!==-1) {
        return '/v1/replaced/flowChange'
      } else
          return path
    })
    .put('/v1/replaced/replacedPath')
    .reply(function(uri, req) {return [200,req]} )
    .put('/v1/replaced/flowChange')
    .reply(function(uri, req) {return [200,req]} )
    .get('/v1/replaced/replacedPath/distributed')
    .reply(function(uri, req) {return [200,req]})
    .put('/v1/replaced/replacedPath/distributed')
    .reply(function(uri, req) {return [200,req]})
    done()
  })

  after(function(done) {
    nock.cleanAll()
    done()
  })

  it('should return expectedResult when verifyOpenAirConnection is called', function(done) {
    var expectedResult = {"success":true,"stepsToUpdate":[{"installerFunction":"verifyOpenAirConnection","completed":true}]}
    var result = connector.installer.verifyOpenAirConnection(utils.data.reqBody, function(error, data) {
      if (error) {
        logger.info('Received Error' + error)
        assert.ifError(error)
      }
      logger.info('received Data from callback' + JSON.stringify(data))
      assert.deepEqual(expectedResult,data)
      done()
    })
  })

  it('should return expectedResult when verifySalesforceConnection is called', function(done) {
    var expectedResult = {
        "success":true
        ,"stepsToUpdate":[{
          "installerFunction":"verifyIntegratorPackageInstallation"
        ,"installURL":"https://ap2.salesforce.com/packaging/installPackage.apexp?p0=04to0000000GPgo"
      }, {
          "installerFunction":"verifyOpenAirPackageInstallation"
        ,"installURL":"https://login.salesforce.com/packaging/installPackage.apexp?p0=04t90000000RnAZ"
      }, {
        "installerFunction":"verifySalesforceConnection"
        ,"completed":true
      }]
    }
    var result = connector.installer.verifySalesforceConnection(utils.data.reqBody, function(error, data) {
      if (error) {
        logger.info('Received Error' + error)
        assert.ifError(error)
      }

      assert.deepEqual(expectedResult,data)
      done()
    })
  })

  it('should return expectedResult when verifyIntegratorPackageInstallation is called', function(done) {
    var expectedResult = {"success":true,"stepsToUpdate":[{"installerFunction":"verifyIntegratorPackageInstallation","completed":true}]}
    var result = connector.installer.verifyIntegratorPackageInstallation(utils.data.reqBody, function(error, data) {
      if (error) {
        logger.info('Received Error' + error)
        assert.ifError(error)
      }
      logger.info('received Data from callback' + JSON.stringify(data))
      assert.deepEqual(expectedResult,data)
      done()
    })
  })

  it('should return expectedResult when verifyOpenAirPackageInstallation is called', function(done) {
    var expectedResult = {"success":true,"stepsToUpdate":[{"installerFunction":"verifyOpenAirPackageInstallation","completed":true}]}
    var result = connector.installer.verifyOpenAirPackageInstallation(utils.data.reqBody, function(error, data) {
      if (error) {
        logger.info('Received Error' + error)
        assert.ifError(error)
      }
      logger.info('received Data from callback' + JSON.stringify(data))
      assert.deepEqual(expectedResult,data)
      done()
    })
  })
})

