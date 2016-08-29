var data = {}
var fs = require('fs')
var _ = require('lodash')
data.TEST_URL = 'https://api.integrator.io'

data.integrationsData = JSON.parse(fs.readFileSync('./test/data/test.data.integrations.js', 'utf8'))
data.exportsData = JSON.parse(fs.readFileSync('./test/data/test.data.exports.js', 'utf8'))
data.flowsData = JSON.parse(fs.readFileSync('./test/data/test.data.flows.js', 'utf-8'))
data.importsData = JSON.parse(fs.readFileSync('./test/data/test.data.imports.js', 'utf8'))
data.connectionsData = JSON.parse(fs.readFileSync('./test/data/test.data.connections.js', 'utf8'))
data.distributedData = JSON.parse(fs.readFileSync('./test/data/test.data.distributed.js', 'utf8'))
data.reqBody = {
  bearerToken: 'sampleBearerToken'
  , _integrationId: 'validIntegrationId'
}

module.exports = {
  data: data
  , findById: function(arr, id) {

        var reData =  _.find(arr, function(obj) {
            return obj._id == id
        })

        return reData
    }
}
