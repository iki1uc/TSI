// ===============================
// OP-ANCHOR 4-INPUT-MERGE
// ===============================

const OP_ANCHOR = {
    scan: null,
    toolator: null,
    raw: null,
    ai_legacy: null,

    // INPUTS
    fromSCAN(data) {
        this.scan = data;
        this.tryMerge();
    },

    fromTOOLATOR(data) {
        this.toolator = data;
        this.tryMerge();
    },

    fromRAW(data) {
        this.raw = data;
        this.tryMerge();
    },

    fromAI(data) {
        this.ai_legacy = data;
        this.tryMerge();
    },

    // MERGE
    tryMerge() {
        if (this.scan && this.toolator && this.raw && this.ai_legacy) {
            const frame = {
                op_frame: {
                    scan: this.scan,
                    toolator: this.toolator,
                    raw: this.raw,
                    ai_legacy: this.ai_legacy,
                    time: Date.now(),
                    merge_state: "complete"
                }
            };

            OP_ACCEPT(frame); // Übergabe an OP
            this.reset();
        }
    },

    // RESET
    reset() {
        this.scan = null;
        this.toolator = null;
        this.raw = null;
        this.ai_legacy = null;
    }
};
