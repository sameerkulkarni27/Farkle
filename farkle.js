let selected = [];

function rollDice() {
    const diceImages = document.getElementById("diceImages");
    diceImages.innerHTML = '';

    for (var i = 0; i < 6; i++) {
        let diceRoll = Math.floor(Math.random() * 6 + 1);

        let src = "images/" + diceRoll + ".png";

        let image = document.createElement("img");
        image.src = src;
        image.alt = "Dice " + diceRoll;
        
        image.setAttribute("diceNumber", diceRoll);

        image.addEventListener("click", handleClick);

        diceImages.appendChild(image);
    }
}

function handleClick(event) {
    let number = event.target.getAttribute("diceNumber");

    event.target.classList.toggle("selected");
    
    if (event.target.classList.contains("selected")) {
        selected.push(number);
    }
    else {
        let index = selected.indexOf(number);
        if (index > -1) {
            selected.splice(index, 1);
        }
    }

    //console.log(selected);
}

function getScore() {
    let score = 0;
    let occurencesEachNum = [0, 0, 0, 0, 0, 0];

    selected.forEach(num => {
        occurencesEachNum[num - 1] += 1;
    });

    //console.log(occurences);

    console.log("Occurences: " + occurencesEachNum);
    for (var i = 0; i < occurencesEachNum.length; i++) {
        // Account for three of a kind
        if (occurencesEachNum[i] >= 3) {
            if (i == 0) {
                //Three or more 1's, which is differently scored than 100 * number
                // three 1s: 1000 points
                // four 1s: 2000 points
                // five 1s: 3000 points
                // six 1s: 4000 points
                score += (1000 * (occurencesEachNum[i] - 2));             
            }
            else {
                //Three or more of 2-6, which is just 100 * number
                score += 100 * (i + 1);
            }
        }
    }

    // Total up all of the ones if there are less than 3 of them.
    score += occurencesEachNum[0] * 100;

    // Total up all of the fives if there are less than 3 of them.
    score += occurencesEachNum[4] * 50;

    document.getElementById("score").innerText = "Score: " + score;
}