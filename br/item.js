// erzeugt ein Item aus einem Segment der RAUM.yml

export function makeItem(segmentName, segmentData) {
    return {
        name: segmentName,
        share: segmentData.share,
        fragment: segmentData.fragment,
        operator: segmentData.operator,
        bind: segmentData.bind || null
    };
}

