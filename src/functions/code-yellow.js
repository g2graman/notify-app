const pdClient = require('node-pagerduty');

const {
  PAGERDUTY_TOKEN,
  PAGERDUTY_FROM,
  PAGERDUTY_SERVICE_ID
} = process.env

const pager = new pdClient(PAGERDUTY_TOKEN);

exports.handler = async (event, context) => {
  const { incidents } = pager;

  await incidents.createIncident(PAGERDUTY_FROM,{
    "incident": {
      "type": "incident",
      "title": "[CODE YELLOW] SIGNS OF LABOUR",
      "service": {
        "id": PAGERDUTY_SERVICE_ID,
        "type": "service_reference"
      }
    }
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: 'It worked!'
    })
  };
}
