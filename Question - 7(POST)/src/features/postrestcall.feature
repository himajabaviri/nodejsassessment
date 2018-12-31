Feature: Validate Status Code and User Id of a REST Service
  As a Tester
  I want to send a POST request and need to validate status code and user id of a REST service

  Scenario Outline: POST CALL TO A REST
    Given user forms an end point for <url> with <userid>
    Then user sends request and validates <userid> and <statuscode>

    Examples:
      |url                                             |userid |  statuscode |
      | https://jsonplaceholder.typicode.com/posts   | 1     |  201        |



