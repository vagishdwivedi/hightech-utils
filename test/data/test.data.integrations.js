[
{
  "_id": "validIntegrationId",
  "lastModified": "2016-08-01T12:28:26.326Z",
  "name": "OpenAir - Salesforce Connector",
  "_connectorId": "574ea059f8a769a00c9e3f5c",
  "install": [
    {
      "imageURL": "/images/company-logos/openair.png",
      "completed": true,
      "name": "OpenAir Connection",
      "description": "Please provide OpenAir account credentials",
      "installerFunction": "verifyOpenAirConnection",
      "uninstallerFunction": "deleteOpenAirConnection",
      "_connectionId": "579f3d75fe2f465407e1fb46"
    },
    {
      "imageURL": "/images/company-logos/salesforce.png",
      "completed": true,
      "description": "Please provide Salesforce account credentials",
      "name": "Salesforce Connection",
      "installerFunction": "verifySalesforceConnection",
      "uninstallerFunction": "deleteSalesforceConnection",
      "_connectionId": "579f3d75fe2f465407e1fb4c"
    },
    {
      "imageURL": "/images/company-logos/salesforce.png",
      "installURL": "https://ap2.salesforce.com/packaging/installPackage.apexp?p0=04to0000000GPgo",
      "completed": true,
      "description": "Please install Integrator bundle in Salesforce account",
      "name": "Integrator Adaptor Package",
      "installerFunction": "verifyIntegratorPackageInstallation",
      "uninstallerFunction": "uninstallIntegratorPackage"
    },
    {
      "imageURL": "/images/company-logos/salesforce.png",
      "installURL": null,
      "completed": true,
      "description": "Please install OpenAir Connector bundle in Salesforce account",
      "name": "OpenAir Connector Package",
      "installerFunction": "verifyOpenAirPackageInstallation",
      "uninstallerFunction": "uninstallOpenAirPackage"
    }
  ],
  "mode": "settings",
  "settings": {
    "sections": [
      {
        "title": "Projects",
        "description": "Create OpenAir Projects from Salesforce, either from a button or an auto-trigger.",
        "flows": [
          {
            "_id": "579f3fa1fe2f465407e1fb81",
            "group": "Opportunity to Project",
            "showMapping": true,
            "showSchedule": false
          },
          {
            "_id": "579f3fa1fe2f465407e1fb80",
            "group": "Opportunity to Project",
            "showMapping": true,
            "showSchedule": false
          },
          {
            "_id": "579f3fa1fe2f465407e1fb82",
            "group": "Project to Opportunity",
            "showMapping": true,
            "showSchedule": true
          },
          {
            "_id": "579f3fa1fe2f465407e1fb84",
            "group": "Opportunity Line Items to Project Related Lists",
            "showMapping": true,
            "showSchedule": false
          },
          {
            "_id": "579f3fa1fe2f465407e1fb87",
            "group": "Opportunity Line Items to Project Related Lists",
            "showMapping": true,
            "showSchedule": false
          },
          {
            "_id": "579f3fa1fe2f465407e1fb88",
            "group": "Opportunity Line Items to Project Related Lists",
            "showMapping": true,
            "showSchedule": false
          },
          {
            "_id": "579f3fa1fe2f465407e1fb7d",
            "group": "OpenAir Project Template Metadata",
            "showMapping": false,
            "showSchedule": false
          }
        ],
        "fields": [
          {
            "label": "Automatically sync Salesforce Opportunity to OpenAir Project",
            "type": "checkbox",
            "name": "openair_conn__Sync_Without_Button__c"
          },
          {
            "label": "Sync if Opportunity Stage is (Select all that apply):",
            "type": "multiselect",
            "name": "openair_conn__Sync_If_Stage_is_any_of__c",
            "options": [
              [
                "Prospecting",
                "Prospecting"
              ],
              [
                "Qualification",
                "Qualification"
              ],
              [
                "Needs Analysis",
                "Needs Analysis"
              ],
              [
                "Value Proposition",
                "Value Proposition"
              ],
              [
                "Id. Decision Makers",
                "Id. Decision Makers"
              ],
              [
                "Perception Analysis",
                "Perception Analysis"
              ],
              [
                "Proposal/Price Quote",
                "Proposal/Price Quote"
              ],
              [
                "Negotiation/Review",
                "Negotiation/Review"
              ],
              [
                "Closed Won",
                "Closed Won"
              ],
              [
                "Closed Lost",
                "Closed Lost"
              ]
            ],
            "supportsRefresh": true
          },
          {
            "label": "Filter Salesforce Opportunities by Field:",
            "type": "select",
            "name": "openair_conn__Opportunity_Field__c",
            "options": [
              [
                "openair_conn__Project_Stage__c",
                "Project Stage"
              ],
              [
                "openair_conn__Project_Owner__c",
                "Project Owner"
              ]
            ],
            "supportsRefresh": true
          },
          {
            "label": "Filter when field value is (Select all that apply):",
            "type": "multiselect",
            "name": "openair_conn__Opportunity_Field_Values__c",
            "supportsRefresh": true
          },
          {
            "label": "When synced, Update Opportunity stage to:",
            "type": "select",
            "name": "openair_conn__Change_Opportunity_Stage_to__c",
            "options": [
              [
                "Prospecting",
                "Prospecting"
              ],
              [
                "Qualification",
                "Qualification"
              ],
              [
                "Needs Analysis",
                "Needs Analysis"
              ],
              [
                "Value Proposition",
                "Value Proposition"
              ],
              [
                "Id. Decision Makers",
                "Id. Decision Makers"
              ],
              [
                "Perception Analysis",
                "Perception Analysis"
              ],
              [
                "Proposal/Price Quote",
                "Proposal/Price Quote"
              ],
              [
                "Negotiation/Review",
                "Negotiation/Review"
              ],
              [
                "Closed Won",
                "Closed Won"
              ],
              [
                "Closed Lost",
                "Closed Lost"
              ]
            ],
            "supportsRefresh": true
          },
          {
            "label": "Do not update OpenAir Project if Project Stage in OpenAir is (Select all that apply):",
            "type": "multiselect",
            "name": "project_noupdates_stages",
            "options": [
              [
                "1",
                "Internal"
              ],
              [
                "2",
                "Proposed"
              ],
              [
                "3",
                "In Process"
              ],
              [
                "4",
                "Complete"
              ],
              [
                "5",
                "Templates"
              ]
            ],
            "supportsRefresh": true
          },
          {
            "label": "Select the custom checkbox on Projects which identifies Templates:",
            "type": "select",
            "name": "project_teplate_identifier_field",
            "options": [
              [
                "notes_required_on_ts",
                "Notes Required on Timesheet"
              ],
              [
                "duplicate_from_project",
                "Available for Project Duplication?"
              ]
            ],
            "supportsRefresh": true
          },
          {
            "label": "Sync Opportunity Products as:",
            "type": "select",
            "name": "sync_opp_lineitem_as",
            "options": [
              [
                "charge",
                "OpenAir Charges"
              ],
              [
                "projecttask",
                "OpenAir Project Tasks"
              ],
              [
                "budget",
                "OpenAir Budget Transactions"
              ]
            ]
          }
        ]
      },
      {
        "title": "Customers",
        "description": "Create OpenAir Clients from Salesforce Accounts.",
        "flows": [
          {
            "_id": "579f3fa1fe2f465407e1fb7c",
            "group": "Salesforce Account to OpenAir Client",
            "showMapping": true,
            "showSchedule": false
          },
          {
            "_id": "579f3fa1fe2f465407e1fb7e",
            "group": "Salesforce Account to OpenAir Client",
            "showMapping": true,
            "showSchedule": false
          },
          {
            "_id": "579f3fa1fe2f465407e1fb7b",
            "group": "OpenAir Client to Salesforce Account",
            "showMapping": true,
            "showSchedule": true
          },
          {
            "_id": "579f3fa1fe2f465407e1fb7f",
            "group": "OpenAir Client to Salesforce Account",
            "showMapping": true,
            "showSchedule": true
          }
        ],
        "fields": [
          {
            "label": "Sync all Salesforce Accounts to OpenAir Clients",
            "type": "checkbox",
            "name": "openair_conn__Sync_All_Accounts__c"
          }
        ]
      },
      {
        "title": "Contacts",
        "description": "Create OpenAir Contacts from Salesforce Contacts.",
        "flows": [
          {
            "_id": "579f3fa1fe2f465407e1fb85",
            "group": "Salesforce Contact to OpenAir Contact",
            "showMapping": true,
            "showSchedule": false
          },
          {
            "_id": "579f3fa1fe2f465407e1fb86",
            "group": "Salesforce Contact to OpenAir Contact",
            "showMapping": true,
            "showSchedule": false
          },
          {
            "_id": "579f3fa1fe2f465407e1fb7a",
            "group": "OpenAir Contact to Salesforce Contact",
            "showMapping": true,
            "showSchedule": true
          },
          {
            "_id": "579f3fa1fe2f465407e1fb79",
            "group": "OpenAir Contact to Salesforce Contact",
            "showMapping": true,
            "showSchedule": true
          }
        ],
        "fields": [
          {
            "label": "Select Contact role on:",
            "type": "select",
            "name": "openair_conn__Filter_Contact_Role_From__c",
            "options": [
              [
                "Account",
                "Account"
              ],
              [
                "Opportunity",
                "Opportunity"
              ]
            ],
            "value": "Account"
          },
          {
            "label": "Only sync Contacts with following roles:",
            "type": "multiselect",
            "name": "openair_conn__Contact_Roles_To_Sync__c",
            "supportsRefresh": true,
            "options": [
              [
                "Business User",
                "Business User"
              ],
              [
                "Decision Maker",
                "Decision Maker"
              ],
              [
                "Economic Buyer",
                "Economic Buyer"
              ],
              [
                "Economic Decision Maker",
                "Economic Decision Maker"
              ],
              [
                "Evaluator",
                "Evaluator"
              ],
              [
                "Executive Sponsor",
                "Executive Sponsor"
              ],
              [
                "Influencer",
                "Influencer"
              ],
              [
                "Technical Buyer",
                "Technical Buyer"
              ]
            ]
          }
        ]
      }
    ],
    "general": {
      "description": "This section contains setting options which affect the entire Connector.",
      "fields": [
        {
          "label": "How do you want to create OpenAir Projects?",
          "type": "select",
          "name": "openair_conn__Project_Creation_Preference__c",
          "value": "opportunityToProject",
          "options": [
            [
              "opportunityToProject",
              "Sync Salesforce Opportunities as OpenAir Projects"
            ],
            [
              "oppLineItemToProject",
              "Sync Salesforce Opportunity line items as OpenAir Projects"
            ]
          ]
        },
        {
          "label": "Enable Test Mode",
          "type": "checkbox",
          "name": "checkbox_test_mode",
          "tooltip": "If you are setting up the Connector and only want few test records to sync, enable this setting. Only records which have a field pre-fixed with the Test Mode Text will be selected for syncing."
        },
        {
          "label": "Test Mode Text",
          "type": "input",
          "name": "input_test_mode_text",
          "tooltip": "This text should be at least 5 characters long. Records with a field prefixed with this text will be selescted for syncing."
        }
      ]
    },
    "connectorEdition": "premium",
    "__sections_cache": {
      "openair_conn__Project_Creation_Preference__c": {
        "title": "Projects",
        "flows": [
          {
            "_id": "579f3fa1fe2f465407e1fb8a",
            "group": "Opportunity to Project",
            "showMapping": true,
            "showSchedule": false
          },
          {
            "_id": "579f3fa1fe2f465407e1fb8b",
            "group": "Opportunity to Project",
            "showMapping": true,
            "showSchedule": false
          },
          {
            "_id": "579f3fa1fe2f465407e1fb89",
            "group": "Project to Opportunity",
            "showMapping": true,
            "showSchedule": true
          },
          {
            "_id": "579f3fa1fe2f465407e1fb7d",
            "group": "OpenAir Project Template Metadata",
            "showMapping": false,
            "showSchedule": false
          }
        ],
        "fields": [
          {
            "label": "Automatically sync Salesforce Opportunity Product to OpenAir Project",
            "type": "checkbox",
            "name": "openair_conn__Sync_Without_Button__c"
          },
          {
            "label": "Sync all Opportunity Products to OpenAir Projects",
            "type": "checkbox",
            "name": "openair_conn__Sync_All_Products__c",
            "value": true
          },
          {
            "label": "Filter Salesforce Opportunity Products by Field:",
            "type": "select",
            "name": "openair_conn__Product_Field__c",
            "options": [
              null,
              [
                "openair_conn__Project_Stage__c",
                "Project Stage"
              ],
              [
                "openair_conn__Project_Owner__c",
                "Project Owner"
              ]
            ],
            "supportsRefresh": true
          },
          {
            "label": "Filter when field value is (Select all that apply):",
            "type": "multiselect",
            "name": "openair_conn__Product_Field_Values__c",
            "supportsRefresh": true
          },
          {
            "label": "Sync if Opportunity Stage is (Select all that apply):",
            "type": "multiselect",
            "name": "openair_conn__Sync_If_Stage_is_any_of__c",
            "options": [
              [
                "Prospecting",
                "Prospecting"
              ],
              [
                "Qualification",
                "Qualification"
              ],
              [
                "Needs Analysis",
                "Needs Analysis"
              ],
              [
                "Value Proposition",
                "Value Proposition"
              ],
              [
                "Id. Decision Makers",
                "Id. Decision Makers"
              ],
              [
                "Perception Analysis",
                "Perception Analysis"
              ],
              [
                "Proposal/Price Quote",
                "Proposal/Price Quote"
              ],
              [
                "Negotiation/Review",
                "Negotiation/Review"
              ],
              [
                "Closed Won",
                "Closed Won"
              ],
              [
                "Closed Lost",
                "Closed Lost"
              ]
            ],
            "supportsRefresh": true
          },
          {
            "label": "When synced, Update Opportunity stage to:",
            "type": "select",
            "name": "openair_conn__Change_Opportunity_Stage_to__c",
            "options": [
              [
                "Prospecting",
                "Prospecting"
              ],
              [
                "Qualification",
                "Qualification"
              ],
              [
                "Needs Analysis",
                "Needs Analysis"
              ],
              [
                "Value Proposition",
                "Value Proposition"
              ],
              [
                "Id. Decision Makers",
                "Id. Decision Makers"
              ],
              [
                "Perception Analysis",
                "Perception Analysis"
              ],
              [
                "Proposal/Price Quote",
                "Proposal/Price Quote"
              ],
              [
                "Negotiation/Review",
                "Negotiation/Review"
              ],
              [
                "Closed Won",
                "Closed Won"
              ],
              [
                "Closed Lost",
                "Closed Lost"
              ]
            ],
            "supportsRefresh": true
          },
          {
            "label": "Do not update OpenAir Project if Project Stage in OpenAir is (Select all that apply):",
            "type": "multiselect",
            "name": "project_noupdates_stages",
            "options": [
              [
                "1",
                "Internal"
              ],
              [
                "2",
                "Proposed"
              ],
              [
                "3",
                "In Process"
              ],
              [
                "4",
                "Complete"
              ],
              [
                "5",
                "Templates"
              ]
            ],
            "supportsRefresh": true
          },
          {
            "label": "Select the custom checkbox on Projects which identifies Templates:",
            "type": "select",
            "name": "project_teplate_identifier_field",
            "options": [
              [
                "notes_required_on_ts",
                "Notes Required on Timesheet"
              ],
              [
                "duplicate_from_project",
                "Available for Project Duplication?"
              ]
            ],
            "supportsRefresh": true
          }
        ]
      }
    },
    "sharedResources": {
      "globalState": {
        "bearerToken": "ott5c2ccb01d4f1452fb988b5828bc6c7c6",
        "configs": {
          "Salesforce Connection [OpenAir - Salesforce Connector]": {
            "id": "579f3d75fe2f465407e1fb4c"
          },
          "OpenAir Connection [OpenAir - Salesforce Connector]": {
            "id": "579f3d75fe2f465407e1fb46"
          },
          "OpenAir Contact to Salesforce Contact Export": {
            "id": "579f3f9bfe2f465407e1fb59",
            "apiId": "e870310ac7"
          },
          "OpenAir Project to Salesforce Opportunity Export": {
            "id": "579f3f9bfe2f465407e1fb5a",
            "apiId": "e0af76fbcf"
          },
          "OpenAir Customer to Salesforce Account Export": {
            "id": "579f3f9bfe2f465407e1fb58",
            "apiId": "e8a54bf5e6"
          },
          "Salesforce Account to OpenAir Client Update Export": {
            "id": "579f3f9cfe2f465407e1fb5f",
            "apiId": "eafba52349"
          },
          "Salesforce Contact to OpenAir Contact Add Export": {
            "id": "579f3f9bfe2f465407e1fb5c",
            "apiId": "edaa411daf"
          },
          "Salesforce Opportunity to OpenAir Project Add Export": {
            "id": "579f3f9cfe2f465407e1fb5e",
            "apiId": "edc5026559"
          },
          "Salesforce Opportunity to OpenAir Project Update Export": {
            "id": "579f3f9cfe2f465407e1fb60",
            "apiId": "e315dd2de7"
          },
          "Salesforce Account to OpenAir Client Add Export": {
            "id": "579f3f9bfe2f465407e1fb5d",
            "apiId": "efa978d924"
          },
          "OpenAir Template Projects to Salesforce Project Templates Export": {
            "id": "579f3f9bfe2f465407e1fb5b",
            "apiId": "eec4d5ac73"
          },
          "Salesforce Contact to OpenAir Contact Update Export": {
            "id": "579f3f9dfe2f465407e1fb61",
            "apiId": "ec8bcec1e3"
          },
          "Salesforce Contacts to OpenAir Contacts Webhook Export": {
            "id": "579f3f9efe2f465407e1fb63"
          },
          "Salesforce Opportunity Products to OpenAir Tasks Webhook Export": {
            "id": "579f3f9efe2f465407e1fb62"
          },
          "Salesforce Opportunity Products to OpenAir Charges Webhook Export": {
            "id": "579f3f9efe2f465407e1fb64"
          },
          "Salesforce Opportunity Products to OpenAir Budgets Webhook Export": {
            "id": "579f3f9efe2f465407e1fb67"
          },
          "Salesforce Query Based Export": {
            "id": "579f3f9efe2f465407e1fb66",
            "apiId": "e063956b42"
          },
          "Salesforce Opportunity Product to OpenAir Project Add Export": {
            "id": "579f3f9efe2f465407e1fb65",
            "apiId": "e327a19b5b"
          },
          "Salesforce Opportunity Product to OpenAir Project Update Export": {
            "id": "579f3f9efe2f465407e1fb68",
            "apiId": "e0ed2d4ff5"
          },
          "OpenAir Contact to Salesforce Contact Update Import": {
            "id": "579f3f9ffe2f465407e1fb6b",
            "apiId": "ibd2bdaef0"
          },
          "OpenAir Customer to Salesforce Account Update Import": {
            "id": "579f3f9ffe2f465407e1fb69",
            "apiId": "ib0aaff186"
          },
          "OpenAir Customer to Salesforce Account Add Import": {
            "id": "579f3f9ffe2f465407e1fb6c",
            "apiId": "i8c66641d1"
          },
          "OpenAir Contact to Salesforce Contact Add Import": {
            "id": "579f3f9ffe2f465407e1fb6a",
            "apiId": "i4371eb8dd"
          },
          "Salesforce Opportunity to OpenAir Project Update Import": {
            "id": "579f3f9ffe2f465407e1fb71",
            "apiId": "iedac9c19e"
          },
          "OpenAir Project to Salesforce Opportunity Update Import": {
            "id": "579f3f9ffe2f465407e1fb6d",
            "apiId": "i1d9bb59d3"
          },
          "Salesforce Opportunity to OpenAir Project Add Import": {
            "id": "579f3f9ffe2f465407e1fb70",
            "apiId": "i53dba9f46"
          },
          "OpenAir Template Projects to Salesforce Project Templates Import": {
            "id": "579f3f9ffe2f465407e1fb72",
            "apiId": "ia6d0d31cd"
          },
          "Salesforce Account to OpenAir Client Import": {
            "id": "579f3f9ffe2f465407e1fb6e",
            "apiId": "ifc1c02841"
          },
          "Salesforce Contact to OpenAir Contact Import": {
            "id": "579f3f9ffe2f465407e1fb6f",
            "apiId": "i5320f8653"
          },
          "Salesforce Opportunity Product to OpenAir Charge Import": {
            "id": "579f3fa0fe2f465407e1fb74",
            "apiId": "i4242b148e"
          },
          "Salesforce Opportunity Product to OpenAir ProjectTask Import": {
            "id": "579f3fa0fe2f465407e1fb73",
            "apiId": "i59616d311"
          },
          "Salesforce Opportunity Product to OpenAir Project Update Import": {
            "id": "579f3fa0fe2f465407e1fb78",
            "apiId": "i759e22945"
          },
          "Salesforce Opportunity Product to OpenAir Budget Import": {
            "id": "579f3fa0fe2f465407e1fb75",
            "apiId": "i158d757db"
          },
          "Salesforce Opportunity Product to OpenAir Project Add Import": {
            "id": "579f3fa0fe2f465407e1fb77",
            "apiId": "i5808a4b97"
          },
          "OpenAir Project to Salesforce Opportunity Product Update Import": {
            "id": "579f3fa0fe2f465407e1fb76",
            "apiId": "ic7a520a46"
          },
          "OpenAir Contact to Salesforce Contact Update": {
            "id": "579f3fa1fe2f465407e1fb79"
          },
          "OpenAir Contact to Salesforce Contact Add": {
            "id": "579f3fa1fe2f465407e1fb7a"
          },
          "OpenAir Client to Salesforce Account Add": {
            "id": "579f3fa1fe2f465407e1fb7b"
          },
          "Salesforce Account to OpenAir Client Add": {
            "id": "579f3fa1fe2f465407e1fb7c"
          },
          "Salesforce Account to OpenAir Client Update": {
            "id": "579f3fa1fe2f465407e1fb7e"
          },
          "Salesforce Opportunity to OpenAir Project Update": {
            "id": "579f3fa1fe2f465407e1fb80"
          },
          "Salesforce Opportunity to OpenAir Project Add": {
            "id": "579f3fa1fe2f465407e1fb81"
          },
          "OpenAir Project to Salesforce Opportunity Update": {
            "id": "579f3fa1fe2f465407e1fb82"
          },
          "OpenAir Client to Salesforce Account Update": {
            "id": "579f3fa1fe2f465407e1fb7f"
          },
          "OpenAir Template Projects to Salesforce Project Templates": {
            "id": "579f3fa1fe2f465407e1fb7d"
          },
          "Salesforce Opportunity Products to OpenAir Project Tasks": {
            "id": "579f3fa1fe2f465407e1fb84"
          },
          "Salesforce Account Contacts to OpenAir Contacts": {
            "id": "579f3fa1fe2f465407e1fb83"
          },
          "Salesforce Contact to OpenAir Contact Update": {
            "id": "579f3fa1fe2f465407e1fb86"
          },
          "Salesforce Contact to OpenAir Contact Add": {
            "id": "579f3fa1fe2f465407e1fb85"
          },
          "Salesforce Opportunity Products to OpenAir Budget Transactions": {
            "id": "579f3fa1fe2f465407e1fb88"
          },
          "Salesforce Opportunity Products to OpenAir Charges": {
            "id": "579f3fa1fe2f465407e1fb87"
          },
          "Salesforce Opportunity Line Item to OpenAir Project Update": {
            "id": "579f3fa1fe2f465407e1fb8b"
          },
          "OpenAir Project to Salesforce Opportunity Line Item Update": {
            "id": "579f3fa1fe2f465407e1fb89"
          },
          "Salesforce Opportunity Line Item to OpenAir Project Add": {
            "id": "579f3fa1fe2f465407e1fb8a"
          }
        },
        "_connectorId": "574ea059f8a769a00c9e3f5c",
        "_integrationId": "579f3d72fe2f465407e1fb44",
        "sfconnId": "579f3d75fe2f465407e1fb4c",
        "oaconnId": "579f3d75fe2f465407e1fb46"
      }
    }
  },
  "version": "0.2.0"
}]
