
[
  {
    "_id": "579f3d75fe2f465407e1fb46",
    "lastModified": "2016-08-01T12:18:06.778Z",
    "type": "wrapper",
    "name": "OpenAir Connection [OpenAir - Salesforce Connector]",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "wrapper": {
      "unencrypted": {
        "company": "Celigo Technologies",
        "user": "Admin",
        "api_namespace": "default"
      },
      "unencryptedFields": [
        {
          "id": "company",
          "label": "Company",
          "position": 1,
          "_id": "579f3dfefe2f465407e1fb51",
          "required": true
        },
        {
          "id": "user",
          "label": "User Name",
          "position": 2,
          "_id": "579f3dfefe2f465407e1fb50",
          "required": true
        },
        {
          "id": "api_namespace",
          "label": "API Namespace",
          "position": 4,
          "_id": "579f3dfefe2f465407e1fb4f",
          "required": true
        }
      ],
      "encrypted": "******",
      "encryptedFields": [
        {
          "id": "password",
          "label": "Password",
          "position": 3,
          "_id": "579f3dfefe2f465407e1fb4e",
          "required": true
        },
        {
          "id": "api_key",
          "label": "API Key",
          "position": 5,
          "_id": "579f3dfefe2f465407e1fb4d",
          "required": true
        }
      ],
      "pingFunction": "pingConnection",
      "concurrencyLevel": 25
    },
    "queues": [
      {
        "name": "579f3d75fe2f465407e1fb46",
        "size": 0
      }
    ]
  },
  {
    "_id": "5767b3df0ddd1bf0210c17f5",
    "lastModified": "2016-06-28T08:54:56.174Z",
    "type": "wrapper",
    "name": "OpenAir Custom Connection",
    "wrapper": {
      "unencrypted": {
        "field": "value"
      },
      "unencryptedFields": [],
      "encrypted": "******",
      "encryptedFields": [],
      "pingFunction": "pingConnection",
      "_stackId": "574fa9ac8bf15f00213ee840",
      "concurrencyLevel": 1
    },
    "queues": [
      {
        "name": "5767b3df0ddd1bf0210c17f5",
        "size": 0
      }
    ]
  },
  {
    "_id": "579f3d75fe2f465407e1fb4c",
    "lastModified": "2016-08-01T12:18:52.958Z",
    "type": "salesforce",
    "name": "Salesforce Connection [OpenAir - Salesforce Connector]",
    "_connectorId": "574ea059f8a769a00c9e3f5c",
    "_integrationId": "579f3d72fe2f465407e1fb44",
    "salesforce": {
      "sandbox": false,
      "baseURI": "https://ap2.salesforce.com",
      "bearerToken": "******",
      "refreshToken": "******",
      "scope": [],
      "concurrencyLevel": 5,
      "_iClientId": "575ac98eae1486c281a2a2bd",
      "info": {
        "sub": "https://login.salesforce.com/id/00D28000000HBIVEA4/00528000000UYGFAA4",
        "user_id": "00528000000UYGFAA4",
        "organization_id": "00D28000000HBIVEA4",
        "preferred_username": "prashanth.kalaga@celigo.com",
        "nickname": "prashanth.kalaga1.4218243756038408E12",
        "name": "Prashanth Kalaga",
        "email": "prashanth.kalaga@celigo.com",
        "email_verified": true,
        "given_name": "Prashanth",
        "family_name": "Kalaga",
        "zoneinfo": "Asia/Colombo",
        "photos": {
          "picture": "https://c.ap2.content.force.com/profilephoto/72928000000Btel/F",
          "thumbnail": "https://c.ap2.content.force.com/profilephoto/72928000000Btel/T"
        },
        "profile": "https://ap2.salesforce.com/00528000000UYGFAA4",
        "picture": "https://c.ap2.content.force.com/profilephoto/72928000000Btel/F",
        "address": {
          "country": "IN",
          "postal_code": "500097"
        },
        "urls": {
          "enterprise": "https://ap2.salesforce.com/services/Soap/c/{version}/00D28000000HBIV",
          "metadata": "https://ap2.salesforce.com/services/Soap/m/{version}/00D28000000HBIV",
          "partner": "https://ap2.salesforce.com/services/Soap/u/{version}/00D28000000HBIV",
          "rest": "https://ap2.salesforce.com/services/data/v{version}/",
          "sobjects": "https://ap2.salesforce.com/services/data/v{version}/sobjects/",
          "search": "https://ap2.salesforce.com/services/data/v{version}/search/",
          "query": "https://ap2.salesforce.com/services/data/v{version}/query/",
          "recent": "https://ap2.salesforce.com/services/data/v{version}/recent/",
          "profile": "https://ap2.salesforce.com/00528000000UYGFAA4",
          "feeds": "https://ap2.salesforce.com/services/data/v{version}/chatter/feeds",
          "groups": "https://ap2.salesforce.com/services/data/v{version}/chatter/groups",
          "users": "https://ap2.salesforce.com/services/data/v{version}/chatter/users",
          "feed_items": "https://ap2.salesforce.com/services/data/v{version}/chatter/feed-items"
        },
        "active": true,
        "user_type": "STANDARD",
        "language": "en_US",
        "locale": "en_US",
        "utcOffset": 19800000,
        "updated_at": "2016-08-01T05:51:19.000+0000"
      }
    },
    "queues": [
      {
        "name": "579f3d75fe2f465407e1fb4c",
        "size": 0
      }
    ]
  },
  {
    "_id": "57627e9dc890db882439cb88",
    "lastModified": "2016-07-13T12:49:53.036Z",
    "type": "salesforce",
    "name": "Salesforce Custom Integration",
    "offline": true,
    "salesforce": {
      "sandbox": false,
      "baseURI": "https://ap1.salesforce.com",
      "bearerToken": "******",
      "refreshToken": "******",
      "scope": [],
      "concurrencyLevel": 5,
      "info": {
        "sub": "https://login.salesforce.com/id/00D90000000yjS7EAI/00590000002sUeMAAU",
        "user_id": "00590000002sUeMAAU",
        "organization_id": "00D90000000yjS7EAI",
        "preferred_username": "shared@oadev.com",
        "nickname": "PK",
        "name": "OA Dev Shared",
        "email": "prashanth.kalaga@celigo.com",
        "email_verified": true,
        "given_name": "OA Dev",
        "family_name": "Shared",
        "zoneinfo": "America/New_York",
        "photos": {
          "picture": "https://c.ap1.content.force.com/profilephoto/005/F",
          "thumbnail": "https://c.ap1.content.force.com/profilephoto/005/T"
        },
        "profile": "https://ap1.salesforce.com/00590000002sUeMAAU",
        "picture": "https://c.ap1.content.force.com/profilephoto/005/F",
        "address": {
          "country": "IN",
          "postal_code": "500072"
        },
        "urls": {
          "enterprise": "https://ap1.salesforce.com/services/Soap/c/{version}/00D90000000yjS7",
          "metadata": "https://ap1.salesforce.com/services/Soap/m/{version}/00D90000000yjS7",
          "partner": "https://ap1.salesforce.com/services/Soap/u/{version}/00D90000000yjS7",
          "rest": "https://ap1.salesforce.com/services/data/v{version}/",
          "sobjects": "https://ap1.salesforce.com/services/data/v{version}/sobjects/",
          "search": "https://ap1.salesforce.com/services/data/v{version}/search/",
          "query": "https://ap1.salesforce.com/services/data/v{version}/query/",
          "recent": "https://ap1.salesforce.com/services/data/v{version}/recent/",
          "profile": "https://ap1.salesforce.com/00590000002sUeMAAU",
          "feeds": "https://ap1.salesforce.com/services/data/v{version}/chatter/feeds",
          "groups": "https://ap1.salesforce.com/services/data/v{version}/chatter/groups",
          "users": "https://ap1.salesforce.com/services/data/v{version}/chatter/users",
          "feed_items": "https://ap1.salesforce.com/services/data/v{version}/chatter/feed-items"
        },
        "active": true,
        "user_type": "STANDARD",
        "language": "en_US",
        "locale": "en_US",
        "utcOffset": -18000000,
        "updated_at": "2016-06-27T15:57:26.000+0000",
        "is_app_installed": true
      }
    },
    "queues": [
      {
        "name": "57627e9dc890db882439cb88",
        "size": 0
      }
    ]
  },
  {
    "_id": "577f88b546a246d41bd47ba9",
    "lastModified": "2016-07-08T11:12:27.500Z",
    "type": "wrapper",
    "name": "Temp OA Connection",
    "offline": true,
    "wrapper": {
      "unencrypted": {
        "type": "openair"
      },
      "unencryptedFields": [],
      "encrypted": "******",
      "encryptedFields": [],
      "pingFunction": "pingConnection",
      "concurrencyLevel": 25
    },
    "queues": [
      {
        "name": "577f88b546a246d41bd47ba9",
        "size": 0
      }
    ]
  }
]
