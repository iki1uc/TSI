
function OP_ANCHOR(input) {
    // 1. Quelle markieren
    const source = input.source || "UNKNOWN";

    // 2. Normalisieren
    const frame = {
        source,
        type: input.type || "event",
        payload: input.payload || {},
        time: Date.now()
    };

    // 3. Regeln anwenden (hier kannst du später ausbauen)
    // z.B. filtern, umschreiben, loggen

    // 4. An OP weitergeben
    OP_ACCEPT(frame);
}
