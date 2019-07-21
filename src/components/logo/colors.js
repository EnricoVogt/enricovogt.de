
const colors = [
    "c767196",
    "c04C27B",
    "c7F6A94",
    "c2DBD06",
    "c42B36B",
    "cF2FE69",
    "c4D29FD",
    "cD4FBAA",
    "c8E997D",
    "c545DB8",
    "c940ED0",
    "cA81D3B",
    "cA0E287",
    "cCB9047",
    "c36E336",
    "c8F30A9",
];

export function getRandomColorClass() {
    return colors[Math.floor(Math.random() * colors.length)];
}

export function getRandomColorClassesFactory(n) {
    return function() {
        const colorClasses = [];
        for(let i = 0; i < n; i++) {
            colorClasses.push(getRandomColorClass())
        }
        return colorClasses;
    }
}