[
  {
    "_id": "579f3f9bfe2f465407e1fb59",
    "lastModified": "2016-08-01T12:25:01.826Z",
    "name": "OpenAir Contact to Salesforce Contact Export",
    "_connectionId": "579f3d75fe2f465407e1fb46",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "apiIdentifier": "e870310ac7",
    "asynchronous": true,
    "type": "delta",
    "preserveOrder": true,
    "delta": {
      "dateField": "lastExportDateTime",
      "startDate": "2016-08-01T12:24:58.518Z"
    },
    "wrapper": {
      "function": "exportData",
      "configuration": {
        "limit": 200,
        "type": "Contact"
      }
    }
  },
  {
    "_id": "579f3f9bfe2f465407e1fb58",
    "lastModified": "2016-08-01T12:25:01.797Z",
    "name": "OpenAir Customer to Salesforce Account Export",
    "_connectionId": "579f3d75fe2f465407e1fb46",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "apiIdentifier": "e8a54bf5e6",
    "asynchronous": true,
    "type": "delta",
    "preserveOrder": true,
    "sampleData": {},
    "delta": {
      "dateField": "lastExportDateTime",
      "startDate": "2016-08-01T12:24:58.519Z"
    },
    "wrapper": {
      "function": "exportData",
      "configuration": {
        "limit": 200,
        "type": "Customer"
      }
    }
  },
  {
    "_id": "579f3f9bfe2f465407e1fb5a",
    "lastModified": "2016-08-01T12:25:01.772Z",
    "name": "OpenAir Project to Salesforce Opportunity Export",
    "_connectionId": "579f3d75fe2f465407e1fb46",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "apiIdentifier": "e0af76fbcf",
    "asynchronous": true,
    "type": "delta",
    "preserveOrder": true,
    "sampleData": {},
    "delta": {
      "dateField": "lastExportDateTime",
      "startDate": "2016-08-01T12:24:58.519Z"
    },
    "wrapper": {
      "function": "exportData",
      "configuration": {
        "limit": 200,
        "type": "Project"
      }
    }
  },
  {
    "_id": "579f3f9bfe2f465407e1fb5b",
    "lastModified": "2016-08-01T12:25:02.054Z",
    "name": "OpenAir Template Projects to Salesforce Project Templates Export",
    "_connectionId": "579f3d75fe2f465407e1fb46",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "apiIdentifier": "eec4d5ac73",
    "asynchronous": true,
    "preserveOrder": true,
    "sampleData": {},
    "wrapper": {
      "function": "exportData",
      "configuration": {
        "type": "Project",
        "method": "equal to",
        "limit": 200,
        "objects": [
          {
            "key": "Project",
            "value": {
              "test_check_box_field__c": 1
            }
          }
        ]
      }
    }
  },
  {
    "_id": "579f3f9bfe2f465407e1fb5d",
    "lastModified": "2016-08-01T12:25:02.068Z",
    "name": "Salesforce Account to OpenAir Client Add Export",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "apiIdentifier": "efa978d924",
    "asynchronous": false,
    "type": "distributed",
    "preserveOrder": false,
    "distributed": {
      "bearerToken": "******"
    }
  },
  {
    "_id": "579f3f9cfe2f465407e1fb5f",
    "lastModified": "2016-08-01T12:25:02.044Z",
    "name": "Salesforce Account to OpenAir Client Update Export",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "apiIdentifier": "eafba52349",
    "asynchronous": false,
    "type": "distributed",
    "preserveOrder": false,
    "distributed": {
      "bearerToken": "******"
    }
  },
  {
    "_id": "579f3f9bfe2f465407e1fb5c",
    "lastModified": "2016-08-01T12:25:02.049Z",
    "name": "Salesforce Contact to OpenAir Contact Add Export",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "apiIdentifier": "edaa411daf",
    "asynchronous": false,
    "type": "distributed",
    "preserveOrder": false,
    "distributed": {
      "bearerToken": "******"
    }
  },
  {
    "_id": "579f3f9dfe2f465407e1fb61",
    "lastModified": "2016-08-01T12:25:02.313Z",
    "name": "Salesforce Contact to OpenAir Contact Update Export",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "apiIdentifier": "ec8bcec1e3",
    "asynchronous": false,
    "type": "distributed",
    "preserveOrder": false,
    "distributed": {
      "bearerToken": "******"
    }
  },
  {
    "_id": "579f3f9efe2f465407e1fb63",
    "lastModified": "2016-08-01T12:25:03.112Z",
    "name": "Salesforce Contacts to OpenAir Contacts Webhook Export",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "type": "webhook",
    "preserveOrder": false,
    "webhook": {
      "provider": "integrator-extension"
    }
  },
  {
    "_id": "579f3f9efe2f465407e1fb65",
    "lastModified": "2016-08-01T12:25:03.250Z",
    "name": "Salesforce Opportunity Product to OpenAir Project Add Export",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "apiIdentifier": "e327a19b5b",
    "asynchronous": false,
    "type": "distributed",
    "preserveOrder": false,
    "distributed": {
      "bearerToken": "******"
    }
  },
  {
    "_id": "579f3f9efe2f465407e1fb68",
    "lastModified": "2016-08-01T12:25:03.280Z",
    "name": "Salesforce Opportunity Product to OpenAir Project Update Export",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "apiIdentifier": "e0ed2d4ff5",
    "asynchronous": false,
    "type": "distributed",
    "preserveOrder": false,
    "distributed": {
      "bearerToken": "******"
    }
  },
  {
    "_id": "579f3f9efe2f465407e1fb67",
    "lastModified": "2016-08-01T12:25:03.204Z",
    "name": "Salesforce Opportunity Products to OpenAir Budgets Webhook Export",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "type": "webhook",
    "preserveOrder": false,
    "webhook": {
      "provider": "integrator-extension"
    }
  },
  {
    "_id": "579f3f9efe2f465407e1fb64",
    "lastModified": "2016-08-01T12:25:03.152Z",
    "name": "Salesforce Opportunity Products to OpenAir Charges Webhook Export",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "type": "webhook",
    "preserveOrder": false,
    "webhook": {
      "provider": "integrator-extension"
    }
  },
  {
    "_id": "579f3f9efe2f465407e1fb62",
    "lastModified": "2016-08-01T12:25:03.149Z",
    "name": "Salesforce Opportunity Products to OpenAir Tasks Webhook Export",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "type": "webhook",
    "preserveOrder": false,
    "webhook": {
      "provider": "integrator-extension"
    }
  },
  {
    "_id": "579f3f9cfe2f465407e1fb5e",
    "lastModified": "2016-08-01T12:25:02.081Z",
    "name": "Salesforce Opportunity to OpenAir Project Add Export",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "apiIdentifier": "edc5026559",
    "asynchronous": false,
    "type": "distributed",
    "preserveOrder": false,
    "distributed": {
      "bearerToken": "******"
    }
  },
  {
    "_id": "579f3f9cfe2f465407e1fb60",
    "lastModified": "2016-08-01T12:25:02.075Z",
    "name": "Salesforce Opportunity to OpenAir Project Update Export",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "apiIdentifier": "e315dd2de7",
    "asynchronous": false,
    "type": "distributed",
    "preserveOrder": false,
    "distributed": {
      "bearerToken": "******"
    }
  },
  {
    "_id": "579f3f9efe2f465407e1fb66",
    "lastModified": "2016-08-01T12:25:03.227Z",
    "name": "Salesforce Query Based Export",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "apiIdentifier": "e063956b42",
    "asynchronous": true,
    "preserveOrder": true,
    "salesforce": {
      "type": "soql",
      "api": "rest",
      "soql": {
        "query": "Select Id from Account"
      }
    }
  }
]
