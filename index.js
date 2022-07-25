const url = "https://logger.io";

function log(message) {
  console.log(message);
}

global.url = "someUrl";

exports.index = {
  url,
  log,
};
