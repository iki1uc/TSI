// UNIVERSALER BORG-VERIFY FÜR ALLE RESPOS
// prüft Items, Moleküle, Aufstellung, HTML-Scans, Bindungen, Operatoren

export async function borgVerify(generatorOutput, htmlScan) {

    const errors = [];
    const warnings = [];

    // 1) Items prüfen
    for (const key of Object.keys(generatorOutput.items)) {
        const item = generatorOutput.items[key];

        if (!item.share) errors.push(`Item ${key}: share fehlt`);
        if (!item.fragment) warnings.push(`Item ${key}: fragment fehlt`);
        if (!item.operator) warnings.push(`Item ${key}: operator fehlt`);
        if (!item.bind) warnings.push(`Item ${key}: bind fehlt`);
    }

    // 2) Molekül prüfen
    if (generatorOutput.molekuel.share !== 0.81) {
        errors.push("Molekül: share != 0.81");
    }

    // 3) Aufstellung prüfen
    if (!generatorOutput.aufstellung.mode) {
        errors.push("Aufstellung: mode fehlt");
    }

    // 4) HTML-Scan prüfen
    if (htmlScan) {
        if (htmlScan.scripts === 0) warnings.push("HTML: keine Scripts gefunden");
        if (htmlScan.inline > 10) warnings.push("HTML: zu viele Inline-Scripts");
        if (htmlScan.onclick > 0) warnings.push("HTML: onclick gefunden (vermeiden)");
    }

    return {
        ok: errors.length === 0,
        errors,
        warnings
    };
}

