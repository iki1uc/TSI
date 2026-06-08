// /OP/op.js

import { WG } from './wg.js';

export async function OP(value) {

  // Außen laden
  const res = await fetch('./tool.json');
  const tool = await res.json();

  // Innen + Außen kombinieren
  const wg = tool.wg ?? WG;

  return {
    tool: tool.name,
    axis: tool.axis,
    mode: tool.mode,
    input: value,
    wg,
    output: value * wg,
    state: value * wg > 0.5 ? "aktiv" : "passiv",
    description: tool.description
  };
}
