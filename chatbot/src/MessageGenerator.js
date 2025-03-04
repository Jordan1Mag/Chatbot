function generateRandomString() {
    const words = [
        "apple", "banana", "cherry", "dog", "elephant", "forest", "grape", "house", "island", "jungle",
        "kite", "lemon", "mountain", "notebook", "ocean", "piano", "queen", "river", "sun", "tiger",
        "umbrella", "violet", "whale", "xylophone", "yellow", "zebra", "adventure", "butterfly", "cloud", "diamond",
        "energy", "fire", "garden", "horizon", "iceberg", "journey", "kangaroo", "lighthouse", "moon", "nebula",
        "octopus", "penguin", "quasar", "rainbow", "snow", "treasure", "unicorn", "volcano", "waterfall", "zeppelin"
    ];
    
    let result = [];
    for (let i = 0; i < 50; i++) {
        result.push(words[Math.floor(Math.random() * words.length)]);
    }
    
    return result.join(" ");
}

export default generateRandomString;
