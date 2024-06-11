function rollDice() {
    const diceImages = document.getElementById("diceImages");
    
    diceImages.innerHTML = '';

    for (var i = 0; i < 6; i++) {
        var diceRoll = Math.floor(Math.random() * 6 + 1);

        const src = "images/" + diceRoll + ".png";

        const image = document.createElement("img");
        image.src = src;
        image.alt = "Dice " + diceRoll;

        diceImages.appendChild(image);
    }
}