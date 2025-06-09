document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements we need to interact with
    const diceFace = document.getElementById('dice-face');
    const diceImage = document.getElementById('dice-image');
    const rollResult = document.getElementById('roll-result');

    // Store the paths to our dice images in an array
    const diceImages = [
        'images/dice1.png',
        'images/dice2.png',
        'images/dice3.png',
        'images/dice4.png',
        'images/dice5.png',
        'images/dice6.png'
    ];
    
    // Store the path for the default 'question mark' image
    const defaultImage = 'images/dice-question.png';

    // A flag to prevent rolling while another roll is in progress
    let isRolling = false;

    // Listen for a click on the dice container
    diceFace.addEventListener('click', () => {
        // If we are already rolling, do nothing
        if (isRolling) {
            return;
        }

        // Set the flag to true
        isRolling = true;

        // Add the 'rolling' class to trigger the CSS shake animation
        diceFace.classList.add('rolling');

        // Reset the interface for the new roll
        diceImage.src = defaultImage;
        rollResult.textContent = "Rolling...";

        // Wait for the animation to mostly finish before showing the result
        setTimeout(() => {
            // Generate a random number from 0 to 5 (for the array index)
            const roll = Math.floor(Math.random() * 6); 
            
            // Set the image source to the correct die face from our array
            diceImage.src = diceImages[roll];
            
            // Update the result text (roll + 1 gives the actual number 1-6)
            rollResult.textContent = `You rolled a ${roll + 1}!`;

            // Remove the animation class
            diceFace.classList.remove('rolling');

            // Reset the flag so we can roll again
            isRolling = false;
        }, 600); // Animation is 0.5s, so 600ms is a safe delay
    });
});