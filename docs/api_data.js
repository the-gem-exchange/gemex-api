define({ "api": [
  {
    "type": "get",
    "url": "/getsalt",
    "title": "Get Salt",
    "name": "Get_Salt",
    "description": "<p>Get Salt to be used for password encryption.</p>",
    "group": "Authentication",
    "version": "0.0.0",
    "filename": "api/routes/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "description": "<p>Authenticate a user with a username and password.</p>",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register",
    "name": "Register",
    "description": "<p>Create a new user.</p>",
    "group": "Authentication",
    "version": "0.0.0",
    "filename": "api/routes/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/stardragons",
    "title": "Create Stardragon",
    "name": "CreateStardragon",
    "description": "<p>Creates a Stardragon in the Stardragon collection.</p>",
    "group": "Stardragons",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Stardragon's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "base_price",
            "description": "<p>The price this originally sold for.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>Date when this Stardragon was created.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "approved",
            "description": "<p>Date when this Stardragon was approved. Is often the same value as <code>created</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>A user-defined gender, if provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"m\"",
              "\"f\"",
              "\"n/a\""
            ],
            "optional": false,
            "field": "sex",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"myo\"",
              "\"batch\"",
              "\"auction\""
            ],
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"common\"",
              "\"uncommon\"",
              "\"rare\"",
              "\"legendary\""
            ],
            "optional": false,
            "field": "rarity",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "species",
            "description": "<p><code>starweaver</code>, <code>starshooter</code>, etc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "designer",
            "description": "<p>The ID or name of the user who created this Stardragon.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/stardragon.js",
    "groupTitle": "Stardragons"
  },
  {
    "type": "get",
    "url": "/stardragons/:stardragon_id",
    "title": "Get Stardragon",
    "name": "GetStardragon",
    "description": "<p>Retrieves a Stardragon from the Stardragon collection.</p>",
    "group": "Stardragons",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stardragon_id",
            "description": "<p>The Stardragon's unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/stardragon.js",
    "groupTitle": "Stardragons"
  },
  {
    "type": "get",
    "url": "/stardragons",
    "title": "Get Stardragons",
    "name": "GetStardragons",
    "description": "<p>Retrieves a list of Stardragons from the Stardragon collection.</p>",
    "group": "Stardragons",
    "version": "0.0.0",
    "filename": "api/routes/stardragon.js",
    "groupTitle": "Stardragons"
  },
  {
    "type": "get",
    "url": "/user/test",
    "title": "Create Test User",
    "name": "Create_Test_User",
    "description": "<p>Creates a test user in the users collection.</p>",
    "group": "Users",
    "version": "0.0.0",
    "filename": "api/routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create User",
    "name": "Create_User",
    "description": "<p>Creates a new user in the users collection.</p>",
    "group": "Users",
    "version": "0.0.0",
    "filename": "api/routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/user/deletetest",
    "title": "Delete Test User",
    "name": "Delete_Test_User",
    "description": "<p>Deletes the test user in the users collection.</p>",
    "group": "Users",
    "version": "0.0.0",
    "filename": "api/routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/user/:user_id",
    "title": "Delete User",
    "name": "Delete_User",
    "description": "<p>Deletes a user from the users collection.</p>",
    "group": "Users",
    "version": "0.0.0",
    "filename": "api/routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/user/:user_id",
    "title": "Get User",
    "name": "Get_User",
    "description": "<p>Retrieves a user from the users collection.</p>",
    "group": "Users",
    "version": "0.0.0",
    "filename": "api/routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get Users",
    "name": "Get_Users",
    "description": "<p>Retrieves a list of users in the users collection.</p>",
    "group": "Users",
    "version": "0.0.0",
    "filename": "api/routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/user/:user_id",
    "title": "Update User",
    "name": "Update_User",
    "description": "<p>Save changes to a user's profile.</p>",
    "group": "Users",
    "version": "0.0.0",
    "filename": "api/routes/user.js",
    "groupTitle": "Users"
  }
] });