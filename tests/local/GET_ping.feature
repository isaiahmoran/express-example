Feature: GET /express-example/v1/ping

Scenario: Return pong when ping is called
Given a request
When GET "/express-example/v1/ping"
Then status = 200
  And the body:
  """
{
  "ping": "pong"
}
  """
