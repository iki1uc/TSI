// BORG-AUTO-SCAN für Toolomat, iki1uc, iki7uc, OP
// scannt HTML und liefert ein Scan-Objekt für borgVerify

export function borgAutoScan() {

    const scan = {
        scripts: 0,
        inline: 0,
        onclick: 0,
        buttons: 0,
        ids: [],
        classes: []
    };

    // 1) Scripts zählen
    document.querySelectorAll("script").forEach(s => {
        scan.scripts++;
        if (!s.src) scan.inline++;
    });

    // 2) onclick finden
    document.querySelectorAll("[onclick]").forEach(el => {
        scan.onclick++;
    });

    // 3) Buttons zählen
    document.querySelectorAll("button").forEach(el => {
        scan.buttons++;
    });

    // 4) IDs sammeln
    document.querySelectorAll("[id]").forEach(el => {
        scan.ids.push(el.id);
    });

    // 5) Klassen sammeln
    document.querySelectorAll("[class]").forEach(el => {
        scan.classes.push(...el.classList);
    });

    return scan;
}

