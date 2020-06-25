const pdClient = require("node-pagerduty");

const { incidents } = new pdClient(process.env.PAGERDUTY_TOKEN);

const createPagerDutyIncident = async () =>
  await incidents.createIncident(process.env.PAGERDUTY_EMAIL, {
    incident: {
      type: "incident",
      title: "SIGNS OF LABOUR",
      service: {
        id: process.env.PAGER_DUTY_SERVICE_ID,
        type: "service_reference",
      },
    },
  });

exports.handler = async (event, context, callback) => {
  const pagerdutyRequest = await createPagerDutyIncident();

  return callback(null, {
    statusCode: pagerdutyRequest.statusCode,
    body: JSON.stringify(pagerdutyRequest),
  });
};
