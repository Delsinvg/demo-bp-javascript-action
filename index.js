const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `who-to-greet` input is gedefinieerd in actions.yml
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hey ${nameToGreet}!`);

  // Ophalen van de huidige tijd
  const time = new Date().toTimeString();
  core.setOutput("time", time);

  // Krijg de JSON webhook payload voor het event dat de workflow triggerde
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);

} catch (error) {
  core.setFailed(error.message);
}
