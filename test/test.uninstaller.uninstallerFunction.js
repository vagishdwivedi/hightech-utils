var assert = require('assert'),
    nock = require('nock'),
    logger = require('winston'),
    connector = require('./../connector.js'),
    _ = require('lodash'),
    utils = require('./data/test.data.utils.js');

describe('uninstall.uninstallerFunction functionality (+)', function() {

  before(function(done) {
    nock(utils.data.TEST_URL)
    .persist()
    .filteringPath(function(path) {
      if(  path.indexOf('/v1/exports/579')!==-1
        || path.indexOf('/v1/imports/579')!==-1
        || path.indexOf('/v1/connections/579')!==-1
        || path.indexOf('/v1/flows/579')!==-1
        ) {
            return '/v1/replace/replacedId/delete'
        } else
            return path
    })
    .get('/v1/flows')
    .reply(200, utils.data.flowsData)
    .get('/v1/connections')
    .reply(200, utils.data.connectionsData)
    .get('/v1/exports')
    .reply(200, utils.data.exportsData)
    .get('/v1/imports')
    .reply(200, utils.data.importsData)
    .put('/v1/replaced/replacedPath')
    .reply(function(uri, req) {return [200,req]} )
    .delete('/v1/replace/replacedId/delete')
    .reply(204,undefined)
    .get('/v1/integrations/validIntegrationId')
    .reply(200, utils.findById(utils.data.integrationsData, 'validIntegrationId'))
    .put('/v1/integrations/validIntegrationId')
    .reply(function(uri, req) {return [200,req]} )
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
    var result = connector.uninstaller.uninstallerFunction(utils.data.reqBody, function(error, data) {
      if (error) {
        logger.info('Received Error' + error)
        assert.ifError(error)
      }
      logger.info('received Data from callback' + JSON.stringify(data))
      assert.deepEqual(expectedResult,data)
      done()
    })
  })

  it('should return expectedResult when uninstallOpenAirPackage is called', function(done) {
    var expectedResult = {"success":true,"stepsToUpdate":[{"installerFunction":"verifyIntegratorPackageInstallation","completed":false},{"installerFunction":"verifyOpenAirPackageInstallation","completed":false}]}
    var result = connector.uninstaller.uninstallOpenAirPackage(utils.data.reqBody, function(error, data) {
      if (error) {
        logger.info('Received Error' + error)
        assert.ifError(error)
      }
      logger.info('received Data from callback' + JSON.stringify(data))
      assert.deepEqual(expectedResult,data)
      done()
    })
  })

  it('should return expectedResult when deleteSalesforceConnection is called', function(done) {
    var expectedResult = {"success":true,"stepsToUpdate":[{"installerFunction":"verifySalesforceConnection","completed":false}]}
    var result = connector.uninstaller.deleteSalesforceConnection(utils.data.reqBody, function(error, data) {
      if (error) {
        logger.info('Received Error' + error)
        assert.ifError(error)
      }
      logger.info('received Data from callback' + JSON.stringify(data))
      assert.deepEqual(expectedResult,data)
      done()
    })
  })
  it('should return expectedResult when deleteOpenAirConnection is called', function(done) {
    var expectedResult = {"success":true,"stepsToUpdate":[{"installerFunction":"verifyOpenAirConnection","completed":false}]}
    var result = connector.uninstaller.deleteOpenAirConnection(utils.data.reqBody, function(error, data) {
      if (error) {
        logger.info('Received Error' + error)
        assert.ifError(error)
      }
      logger.info('received Data from callback' , JSON.stringify(data))
      assert.deepEqual(expectedResult,data)
      done()
    })
  })
})




