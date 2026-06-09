// OP Task 01 – OP liefert Datensatz + Arithmetik als ausführbare Aufgabe

export const OP_TASK = {
    id: "OP-TASK-01",
    version: "1.0",
    created: "2026-06-08",
    purpose: "Lieferant für ausführbare Aufgaben",

    createTask(dataset, arithmetic) {
        return {
            dataset,          // Rohdaten / Messwerte / Pixel / Achsen
            arithmetic,       // Rechenvorschrift / Operationen
            executable: true, // Kennzeichnung: kann ausgeführt werden
            timestamp: Date.now()
        }
    }
}
