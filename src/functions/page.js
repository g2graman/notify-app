exports.handler = async (event, context, callback) => {
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: "it works",
    }),
  });
};
