// erzeugt 81 oder 81(1)

export function makeAufstellung(molekuel, kontroll) {

    if (!kontroll) {
        return {
            mode: "81",
            share: 0.81,
            molekuel
        };
    }

    return {
        mode: "81(1)",
        share: 0.82,
        molekuel,
        kontroll
    };
}

