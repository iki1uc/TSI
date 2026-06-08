import { WG } from './wg.js';
import { loadYML } from './loadYML.js';

export async function OP(value) {
  const yml = await loadYML();

  const wg = parseFloat(yml.wg || WG);

  return {
    operator: yml.operator,
    axis: yml.axis,
    input: value,
    wg,
    output: value * wg,
    state: value * wg > 0.5 ? "aktiv" : "passiv"
  };
}

