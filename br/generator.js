// /br/generator.js
// NEUER BAUARBEITER – zieht alles aus RAUM.yml + WURF.root.yml

export async function generator() {

    // 1) RAUM laden (81%)
    const raum = await fetch("/yml/RAUM.yml")
        .then(r => r.text())
        .then(t => jsyaml.load(t));

    // 2) Dateiname erkennen (ID, INDEX oder andere)
    const file = window.location.pathname.split("/").pop().toLowerCase();

    // 3) Segmente extrahieren (OP, iki1uc, iki2li)
    const seg = raum.raum.segmente;

    // 4) Items erzeugen (je 27%)
    const items = {
        OP: buildItem(seg.OP),
        iki1uc: buildItem(seg.iki1uc),
        iki2li: buildItem(seg.iki2li)
    };

    // 5) Molekül (81%) erzeugen
    const molekuel = buildMolekuel(items);

    // 6) Wenn index.html → Kontrollschicht (1%) hinzufügen
    let aufstellung;
    if (file === "index.html") {
        const wurf = await fetch("/yml/WURF.root.yml")
            .then(r => r.text())
            .then(t => jsyaml.load(t));

        aufstellung = buildAufstellung(molekuel, wurf.wurf.kontrollschicht);
    } else {
        // ID.html oder andere → nur 81
        aufstellung = buildAufstellung(molekuel, null);
    }

    // 7) Rückgabe für UI / Engine
    return {
        items,
        molekuel,
        aufstellung
    };
}


// ------------------------------------------------------------
// ITEM – erzeugt 27% aus Segment
// ------------------------------------------------------------
function buildItem(seg) {
    return {
        name: seg,
        share: seg.share,
        fragment: seg.fragment,
        operator: seg.operator
    };
}


// ------------------------------------------------------------
// MOLEKÜL – fusioniert 3 Items zu 81%
// ------------------------------------------------------------
function buildMolekuel(items) {
    return {
        share: 0.81,
        parts: items
    };
}


// ------------------------------------------------------------
// AUFSTELLUNG – erzeugt 81 oder 81(1)
// ------------------------------------------------------------
function buildAufstellung(molekuel, kontroll) {

    if (!kontroll) {
        // 81
        return {
            mode: "81",
            share: 0.81,
            molekuel
        };
    }

    // 81(1)
    return {
        mode: "81(1)",
        share: 0.82,
        molekuel,
        kontroll
    };
}

