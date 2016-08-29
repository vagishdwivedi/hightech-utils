
[
  {
    "_id": "579f3f9ffe2f465407e1fb6a",
    "lastModified": "2016-08-01T12:25:04.116Z",
    "name": "OpenAir Contact to Salesforce Contact Add Import",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "i4371eb8dd",
    "ignoreExisting": true,
    "mapping": {
      "fields": [
        {
          "extract": "addr.Address.first",
          "generate": "FirstName"
        },
        {
          "extract": "addr.Address.last",
          "generate": "LastName"
        },
        {
          "extract": "addr.Address.phone",
          "generate": "Phone"
        },
        {
          "extract": "addr.Address.mobile",
          "generate": "MobilePhone"
        },
        {
          "extract": "addr.Address.salutation",
          "generate": "Title"
        },
        {
          "extract": "addr.Address.addr1",
          "generate": "MailingStreet"
        },
        {
          "extract": "addr.Address.city",
          "generate": "MailingCity"
        },
        {
          "extract": "addr.Address.state",
          "generate": "MailingState"
        },
        {
          "extract": "addr.Address.zip",
          "generate": "MailingPostalCode"
        },
        {
          "extract": "addr.Address.email",
          "generate": "Email"
        },
        {
          "extract": "customerid",
          "generate": "AccountId"
        },
        {
          "generate": "openair_conn__Celigo_Update__c",
          "hardCodedValue": "true"
        }
      ]
    },
    "salesforce": {
      "operation": "insert",
      "sObjectType": "Contact",
      "api": "rest",
      "idLookup": {
        "whereClause": "(openair_conn__OpenAir_Id__c = {{string id}})"
      }
    }
  },
  {
    "_id": "579f3f9ffe2f465407e1fb6b",
    "lastModified": "2016-08-01T12:25:04.029Z",
    "name": "OpenAir Contact to Salesforce Contact Update Import",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "ibd2bdaef0",
    "ignoreMissing": true,
    "mapping": {
      "fields": [
        {
          "extract": "addr.Address.first",
          "generate": "FirstName"
        },
        {
          "extract": "addr.Address.last",
          "generate": "LastName"
        },
        {
          "extract": "addr.Address.phone",
          "generate": "Phone"
        },
        {
          "extract": "addr.Address.mobile",
          "generate": "MobilePhone"
        },
        {
          "extract": "addr.Address.salutation",
          "generate": "Title"
        },
        {
          "extract": "addr.Address.addr1",
          "generate": "MailingStreet"
        },
        {
          "extract": "addr.Address.city",
          "generate": "MailingCity"
        },
        {
          "extract": "addr.Address.state",
          "generate": "MailingState"
        },
        {
          "extract": "addr.Address.zip",
          "generate": "MailingPostalCode"
        },
        {
          "extract": "addr.Address.email",
          "generate": "Email"
        },
        {
          "generate": "openair_conn__Celigo_Update__c",
          "hardCodedValue": "true"
        }
      ]
    },
    "salesforce": {
      "operation": "update",
      "sObjectType": "Contact",
      "api": "rest",
      "idLookup": {
        "whereClause": "(openair_conn__OpenAir_Id__c = {{string id}})"
      }
    }
  },
  {
    "_id": "579f3f9ffe2f465407e1fb6c",
    "lastModified": "2016-08-01T12:25:04.081Z",
    "name": "OpenAir Customer to Salesforce Account Add Import",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "i8c66641d1",
    "ignoreExisting": true,
    "mapping": {
      "fields": [
        {
          "extract": "name",
          "generate": "Name"
        },
        {
          "extract": "addr.Address.phone",
          "generate": "Phone"
        },
        {
          "extract": "billingaddr.Address.addr1",
          "generate": "BillingStreet"
        },
        {
          "extract": "billingaddr.Address.city",
          "generate": "BillingCity"
        },
        {
          "extract": "billingaddr.Address.country",
          "generate": "BillingCountry"
        },
        {
          "generate": "openair_conn__Celigo_Update__c",
          "hardCodedValue": "true"
        }
      ]
    },
    "salesforce": {
      "operation": "insert",
      "sObjectType": "Account",
      "api": "rest",
      "idLookup": {
        "whereClause": "(openair_conn__OpenAir_Id__c = {{string id}})"
      }
    }
  },
  {
    "_id": "579f3f9ffe2f465407e1fb69",
    "lastModified": "2016-08-01T12:25:04.001Z",
    "name": "OpenAir Customer to Salesforce Account Update Import",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "ib0aaff186",
    "ignoreMissing": true,
    "mapping": {
      "fields": [
        {
          "extract": "name",
          "generate": "Name"
        },
        {
          "extract": "addr.Address.phone",
          "generate": "Phone"
        },
        {
          "extract": "billingaddr.Address.addr1",
          "generate": "BillingStreet"
        },
        {
          "extract": "billingaddr.Address.city",
          "generate": "BillingCity"
        },
        {
          "extract": "billingaddr.Address.country",
          "generate": "BillingCountry"
        },
        {
          "generate": "openair_conn__Celigo_Update__c",
          "hardCodedValue": "true"
        }
      ]
    },
    "salesforce": {
      "operation": "update",
      "sObjectType": "Account",
      "api": "rest",
      "idLookup": {
        "whereClause": "(openair_conn__OpenAir_Id__c = {{string id}})"
      }
    }
  },
  {
    "_id": "579f3fa0fe2f465407e1fb76",
    "lastModified": "2016-08-01T12:25:05.088Z",
    "name": "OpenAir Project to Salesforce Opportunity Product Update Import",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "ic7a520a46",
    "hooks": {
      "postMap": {
        "function": "sfOpportunityPostMap",
        "_stackId": null
      }
    },
    "ignoreMissing": true,
    "mapping": {
      "fields": [
        {
          "extract": "id",
          "generate": "openair_conn__OpenAir_Id__c"
        },
        {
          "extract": "notes",
          "generate": "Description"
        },
        {
          "extract": "{{finish_date.Date.year}}-{{finish_date.Date.month}}-{{finish_date.Date.day}}",
          "generate": "ServiceDate"
        },
        {
          "generate": "openair_conn__Celigo_Update__c",
          "hardCodedValue": "true"
        }
      ]
    },
    "salesforce": {
      "operation": "update",
      "sObjectType": "OpportunityLineItem",
      "api": "rest",
      "idLookup": {
        "whereClause": "(openair_conn__OpenAir_Id__c = {{string id}})"
      }
    }
  },
  {
    "_id": "579f3f9ffe2f465407e1fb6d",
    "lastModified": "2016-08-01T12:25:04.171Z",
    "name": "OpenAir Project to Salesforce Opportunity Update Import",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "i1d9bb59d3",
    "hooks": {
      "postMap": {
        "function": "sfOpportunityPostMap",
        "_stackId": null
      }
    },
    "ignoreMissing": true,
    "mapping": {
      "fields": [
        {
          "extract": "name",
          "generate": "Name"
        },
        {
          "extract": "id",
          "generate": "openair_conn__OpenAir_Id__c"
        },
        {
          "generate": "openair_conn__Celigo_Update__c",
          "hardCodedValue": "true"
        }
      ]
    },
    "salesforce": {
      "operation": "update",
      "sObjectType": "Opportunity",
      "api": "rest",
      "idLookup": {
        "whereClause": "(openair_conn__OpenAir_Id__c = {{string id}})"
      }
    }
  },
  {
    "_id": "579f3f9ffe2f465407e1fb72",
    "lastModified": "2016-08-01T12:25:04.304Z",
    "name": "OpenAir Template Projects to Salesforce Project Templates Import",
    "_connectionId": "579f3d75fe2f465407e1fb4c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "ia6d0d31cd",
    "mapping": {
      "fields": [
        {
          "extract": "name",
          "generate": "openair_conn__OpenAir_Project_Name__c"
        },
        {
          "extract": "name",
          "generate": "Name"
        }
      ]
    },
    "salesforce": {
      "operation": "upsert",
      "sObjectType": "openair_conn__OpenAir_Project_Template__c",
      "api": "rest",
      "idLookup": {
        "extract": "id"
      },
      "upsert": {
        "externalIdField": "openair_conn__OpenAir_Project_Id__c"
      }
    }
  },
  {
    "_id": "579f3f9ffe2f465407e1fb6e",
    "lastModified": "2016-08-01T12:25:04.346Z",
    "name": "Salesforce Account to OpenAir Client Import",
    "sampleData": {},
    "_connectionId": "579f3d75fe2f465407e1fb46",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "ifc1c02841",
    "hooks": {
      "postSubmit": {
        "function": "oaClientPostSubmit",
        "_stackId": null
      }
    },
    "mapping": {
      "fields": [
        {
          "extract": "Name",
          "generate": "name"
        },
        {
          "extract": "Id",
          "generate": "externalid"
        },
        {
          "extract": "openair_conn__OpenAir_Id__c",
          "generate": "id"
        }
      ]
    },
    "wrapper": {
      "function": "importData",
      "configuration": {
        "type": "Customer",
        "ignoreExisting": "openAirId"
      }
    }
  },
  {
    "_id": "579f3f9ffe2f465407e1fb6f",
    "lastModified": "2016-08-01T12:25:04.483Z",
    "name": "Salesforce Contact to OpenAir Contact Import",
    "sampleData": {},
    "_connectionId": "579f3d75fe2f465407e1fb46",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "i5320f8653",
    "hooks": {
      "postSubmit": {
        "function": "oaContactPostSubmit",
        "_stackId": null
      }
    },
    "mapping": {
      "fields": [
        {
          "extract": "Name",
          "generate": "name"
        },
        {
          "extract": "Id",
          "generate": "externalid"
        },
        {
          "extract": "openair_conn__OpenAir_Client_Id__c",
          "generate": "customerid"
        },
        {
          "extract": "Email",
          "generate": "addr.Address.email"
        },
        {
          "extract": "FirstName",
          "generate": "addr.Address.first"
        },
        {
          "extract": "LastName",
          "generate": "addr.Address.last"
        },
        {
          "extract": "openair_conn__OpenAir_Id__c",
          "generate": "id"
        }
      ]
    },
    "wrapper": {
      "function": "importData",
      "configuration": {
        "type": "Contact",
        "ignoreExisting": "openAirId"
      }
    }
  },
  {
    "_id": "579f3fa0fe2f465407e1fb75",
    "lastModified": "2016-08-01T12:25:05.073Z",
    "name": "Salesforce Opportunity Product to OpenAir Budget Import",
    "_connectionId": "579f3d75fe2f465407e1fb46",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "i158d757db",
    "hooks": {
      "postSubmit": {
        "function": "oppLineItemPostSubmit",
        "_stackId": null
      },
      "postMap": {
        "function": "oaRecordPostMap",
        "_stackId": null
      }
    },
    "mapping": {
      "fields": [
        {
          "extract": "Name",
          "generate": "name"
        },
        {
          "extract": "TotalPrice",
          "generate": "total"
        },
        {
          "extract": "openair_conn__oaprojectid__c",
          "generate": "projectid"
        },
        {
          "extract": "Description",
          "generate": "notes"
        },
        {
          "extract": "Id",
          "generate": "externalid"
        },
        {
          "extract": "openair_conn__OpenAir_Id__c",
          "generate": "id"
        }
      ]
    },
    "wrapper": {
      "function": "importData",
      "configuration": {
        "type": "Budget",
        "ignoreExisting": "openAirId"
      }
    }
  },
  {
    "_id": "579f3fa0fe2f465407e1fb74",
    "lastModified": "2016-08-01T12:25:04.891Z",
    "name": "Salesforce Opportunity Product to OpenAir Charge Import",
    "_connectionId": "579f3d75fe2f465407e1fb46",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "i4242b148e",
    "hooks": {
      "postSubmit": {
        "function": "oppLineItemPostSubmit",
        "_stackId": null
      },
      "postMap": {
        "function": "oaRecordPostMap",
        "_stackId": null
      }
    },
    "mapping": {
      "fields": [
        {
          "extract": "Name",
          "generate": "description"
        },
        {
          "extract": "ServiceDate",
          "extractDateFormat": "YYYY-MM-DD",
          "generate": "$date",
          "generateDateFormat": "x",
          "dataType": "string"
        },
        {
          "extract": "openair_conn__oaprojectid__c",
          "generate": "projectid"
        },
        {
          "extract": "Id",
          "generate": "externalid"
        },
        {
          "extract": "openair_conn__OpenAir_Id__c",
          "generate": "id"
        },
        {
          "extract": "sliptype",
          "generate": "type",
          "lookupName": "slipTypeLookup"
        },
        {
          "extract": "UnitPrice",
          "generate": "rate"
        },
        {
          "extract": "Quantity",
          "generate": "quantity"
        },
        {
          "extract": "TotalPrice",
          "generate": "total"
        }
      ]
    },
    "wrapper": {
      "function": "importData",
      "configuration": {
        "type": "Slip",
        "ignoreExisting": "openAirId"
      }
    }
  },
  {
    "_id": "579f3fa0fe2f465407e1fb77",
    "lastModified": "2016-08-01T12:25:05.027Z",
    "name": "Salesforce Opportunity Product to OpenAir Project Add Import",
    "sampleData": {},
    "_connectionId": "579f3d75fe2f465407e1fb46",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "i5808a4b97",
    "hooks": {
      "postSubmit": {
        "function": "oaProjectPostSubmit",
        "_stackId": null
      },
      "preMap": {
        "function": "oaProjectPreMap",
        "_stackId": null
      }
    },
    "mapping": {
      "fields": [
        {
          "extract": "{{Opportunity.Name}} - {{Product2.Name}}",
          "generate": "name"
        },
        {
          "extract": "Id",
          "generate": "externalid"
        },
        {
          "extract": "openair_conn__OpenAir_Id__c",
          "generate": "id"
        },
        {
          "extract": "openair_conn__OpenAir_Client_Id__c",
          "generate": "customerid"
        },
        {
          "extract": "openair_conn__Project_Stage__c",
          "generate": "project_stageid"
        }
      ]
    },
    "wrapper": {
      "function": "importData",
      "configuration": {
        "type": "Project",
        "operation": "Add",
        "ignoreExisting": "openAirId"
      }
    }
  },
  {
    "_id": "579f3fa0fe2f465407e1fb78",
    "lastModified": "2016-08-01T12:25:05.010Z",
    "name": "Salesforce Opportunity Product to OpenAir Project Update Import",
    "sampleData": {},
    "_connectionId": "579f3d75fe2f465407e1fb46",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "i759e22945",
    "hooks": {
      "postSubmit": {
        "function": "oaProjectPostSubmit",
        "_stackId": null
      },
      "preMap": {
        "function": "oaProjectPreMap",
        "_stackId": null
      }
    },
    "mapping": {
      "fields": [
        {
          "extract": "{{Opportunity.Name}} - {{Product2.Name}}",
          "generate": "name"
        },
        {
          "extract": "Id",
          "generate": "externalid"
        },
        {
          "extract": "openair_conn__OpenAir_Id__c",
          "generate": "id"
        },
        {
          "extract": "openair_conn__OpenAir_Client_Id__c",
          "generate": "customerid"
        },
        {
          "extract": "openair_conn__Project_Stage__c",
          "generate": "project_stageid"
        }
      ]
    },
    "wrapper": {
      "function": "importData",
      "configuration": {
        "type": "Project",
        "operation": "Modify",
        "ignoreExisting": "openAirId"
      }
    }
  },
  {
    "_id": "579f3fa0fe2f465407e1fb73",
    "lastModified": "2016-08-01T12:25:04.938Z",
    "name": "Salesforce Opportunity Product to OpenAir ProjectTask Import",
    "sampleData": {},
    "_connectionId": "579f3d75fe2f465407e1fb46",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "i59616d311",
    "hooks": {
      "postSubmit": {
        "function": "oppLineItemPostSubmit",
        "_stackId": null
      },
      "postMap": {
        "function": "oaRecordPostMap",
        "_stackId": null
      }
    },
    "mapping": {
      "fields": [
        {
          "extract": "Name",
          "generate": "name"
        },
        {
          "extract": "TotalPrice",
          "generate": "task_budget_cost"
        },
        {
          "extract": "openair_conn__oaprojectid__c",
          "generate": "projectid"
        },
        {
          "extract": "Id",
          "generate": "externalid"
        },
        {
          "extract": "openair_conn__OpenAir_Id__c",
          "generate": "id"
        }
      ]
    },
    "wrapper": {
      "function": "importData",
      "configuration": {
        "type": "Projecttask",
        "ignoreExisting": "openAirId"
      }
    }
  },
  {
    "_id": "579f3f9ffe2f465407e1fb70",
    "lastModified": "2016-08-01T12:25:04.316Z",
    "name": "Salesforce Opportunity to OpenAir Project Add Import",
    "sampleData": {},
    "_connectionId": "579f3d75fe2f465407e1fb46",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "i53dba9f46",
    "hooks": {
      "postSubmit": {
        "function": "oaProjectPostSubmit",
        "_stackId": null
      },
      "preMap": {
        "function": "oaProjectPreMap",
        "_stackId": null
      }
    },
    "mapping": {
      "fields": [
        {
          "extract": "Name",
          "generate": "name"
        },
        {
          "extract": "openair_conn__OpenAir_Client_Id__c",
          "generate": "customerid"
        },
        {
          "extract": "Description",
          "generate": "notes"
        },
        {
          "extract": "Id",
          "generate": "externalid"
        },
        {
          "extract": "openair_conn__Project_Stage__c",
          "generate": "project_stageid"
        },
        {
          "extract": "openair_conn__Duplicate_invoice_layout_settings__c",
          "generate": "copy_invoice_layout_settings"
        },
        {
          "extract": "openair_conn__Duplicate_dashboard_settings__c",
          "generate": "copy_dashboard_settings"
        },
        {
          "extract": "openair_conn__Duplicate_project_approvers__c",
          "generate": "copy_approvers"
        },
        {
          "extract": "openair_conn__Duplicate_Billing_rules__c",
          "generate": "copy_project_billing_rules"
        },
        {
          "extract": "openair_conn__Dup_custom_fields_in_phases_and_tasks__c",
          "generate": "copy_custom_fields"
        },
        {
          "extract": "openair_conn__Duplicate_notification_settings__c",
          "generate": "copy_notification_settings"
        },
        {
          "extract": "openair_conn__Project_Template__r.openair_conn__OpenAir_Project_Id__c",
          "generate": "template_project_id"
        }
      ]
    },
    "wrapper": {
      "function": "importData",
      "configuration": {
        "type": "Project",
        "operation": "Add",
        "ignoreExisting": "openAirId"
      }
    }
  },
  {
    "_id": "579f3f9ffe2f465407e1fb71",
    "lastModified": "2016-08-01T12:25:04.185Z",
    "name": "Salesforce Opportunity to OpenAir Project Update Import",
    "sampleData": {},
    "_connectionId": "579f3d75fe2f465407e1fb46",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "distributed": false,
    "apiIdentifier": "iedac9c19e",
    "hooks": {
      "postSubmit": {
        "function": "oaProjectPostSubmit",
        "_stackId": null
      },
      "preMap": {
        "function": "oaProjectPreMap",
        "_stackId": null
      }
    },
    "mapping": {
      "fields": [
        {
          "extract": "Name",
          "generate": "name"
        },
        {
          "extract": "openair_conn__OpenAir_Client_Id__c",
          "generate": "customerid"
        },
        {
          "extract": "Description",
          "generate": "notes"
        },
        {
          "extract": "openair_conn__OpenAir_Id__c",
          "generate": "id"
        },
        {
          "extract": "Id",
          "generate": "externalid"
        },
        {
          "extract": "openair_conn__Project_Stage__c",
          "generate": "project_stageid"
        }
      ]
    },
    "wrapper": {
      "function": "importData",
      "configuration": {
        "type": "Project",
        "operation": "Modify",
        "ignoreExisting": "openAirId"
      }
    }
  }
]
