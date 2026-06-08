// GLOBALER BORG-KOMPLETTUM-SCAN
// prüft ALLE Respos, ALLE HTMLs, ALLE Funktionen, ALLE YMLs

import { generator } from "/br/generator.js";
import { borgVerify } from "/br/borg_verify.js";

export async function borgKomplettum(respoList) {

    const result = {
        ok: true,
        errors: [],
        warnings: [],
        scans: {}
    };

    for (const respo of respoList) {

        // 1) generator.js ausführen
        const gen = await generator();

        // 2) HTML-Scan laden (falls vorhanden)
        let htmlScan = null;
        try {
            htmlScan = await fetch(`/${respo}/scan.json`).then(r => r.json());
        } catch (e) {
            // kein scan.json → nicht schlimm
        }

        // 3) BORG-Verify ausführen
        const verify = await borgVerify(gen, htmlScan);

        // 4) speichern
        result.scans[respo] = verify;

        // 5) Fehler sammeln
        if (!verify.ok) result.ok = false;
        result.errors.push(...verify.errors);
        result.warnings.push(...verify.warnings);
    }

    return result;
}

