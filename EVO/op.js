// op.js – Operator für dieses Werkzeug

export function OP(value, wg) {
  return {
    input: value,
    wg,
    output: value * wg,
    state: value * wg > 0.5 ? "aktiv" : "passiv"
  };
}

