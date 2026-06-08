// OP Task 02 – OP liefert Datensatz + Arithmetik als ausführbare Maßnahme

export const OP_TASK = {
    id: "OP-TASK-02",
    version: "1.1",
    created: "2026-06-08",
    purpose: "Erweiterter Aufgaben-Lieferant für iki2li",

    create(dataset, arithmetic) {
        return {
            dataset,            // Daten, die verarbeitet werden sollen
            arithmetic,         // Funktion oder Op-Code
            type: "OP-TASK",
            executable: typeof arithmetic === "function",
            timestamp: Date.now()
        }
    }
}
