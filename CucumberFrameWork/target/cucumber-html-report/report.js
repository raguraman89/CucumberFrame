$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "smart Bear Application",
  "description": "",
  "id": "smart-bear-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login with smart Bear application",
  "description": "",
  "id": "smart-bear-application;login-with-smart-bear-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the use navigated to login page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Message displayed as login successfull",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "smart-bear-application;login-with-smart-bear-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "smart-bear-application;login-with-smart-bear-application;;1"
    },
    {
      "cells": [
        "Tester",
        "test"
      ],
      "line": 11,
      "id": "smart-bear-application;login-with-smart-bear-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login with smart Bear application",
  "description": "",
  "id": "smart-bear-application;login-with-smart-bear-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the use navigated to login page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters the \"Tester\" and \"test\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Message displayed as login successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "Implementation.user_is_on_the_Home_Page()"
});
formatter.result({
  "duration": 3974866392,
  "status": "passed"
});
formatter.match({
  "location": "Implementation.the_use_navigated_to_login_page()"
});
formatter.result({
  "duration": 2482521937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 17
    },
    {
      "val": "test",
      "offset": 30
    }
  ],
  "location": "Implementation.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 2009778045,
  "status": "passed"
});
formatter.match({
  "location": "Implementation.message_displayed_as_login_successfull()"
});
formatter.result({
  "duration": 466409,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Logout the smart bear application",
  "description": "",
  "id": "smart-bear-application;logout-the-smart-bear-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user logout from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Implementation.user_logout_from_the_application()"
});
formatter.result({
  "duration": 3194833926,
  "status": "passed"
});
});