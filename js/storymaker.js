// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables */

// Constants for button query selectors
const noun1Btn = document.getElementById('noun1');
const verbBtn = document.getElementById('verb');
const adjectiveBtn = document.getElementById('adjective');
const noun2Btn = document.getElementById('noun2');
const settingBtn = document.getElementById('setting');
const playbackBtn = document.getElementById('playback');
const randomBtn = document.getElementById('random');

// Constants for p tag to display selectors
const chosenNoun1 = document.getElementById('choosenNoun1');
const chosenVerb = document.getElementById('choosenVerb');
const chosenAdjective = document.getElementById('choosenAdjective');
const chosenNoun2 = document.getElementById('choosenNoun2');
const chosenSetting = document.getElementById('choosenSetting');
const storyDisplay = document.getElementById('story');

// Variables for pre-defined arrays
const nouns1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
const verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const nouns2 = ['goat','monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const settings = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];


// Function to get random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* Functions */
function updateStoryPart(elementId, array) {
    document.getElementById(elementId).innerText = getRandomElement(array);
}

noun1Btn.onclick = function() { updateStoryPart('choosenNoun1', nouns1); }; 
verbBtn.onclick = function() { updateStoryPart('choosenVerb', verbs); };
adjectiveBtn.onclick = function() { updateStoryPart('choosenAdjective', adjectives); };
noun2Btn.onclick = function() { updateStoryPart('choosenNoun2', nouns2); }; 
settingBtn.onclick = function() { updateStoryPart('choosenSetting', settings); };

playbackBtn.onclick = function() {
    const story = `${chosenNoun1.innerText} ${chosenVerb.innerText} ${chosenAdjective.innerText} ${chosenNoun2.innerText} ${chosenSetting.innerText}`;
    storyDisplay.innerText = story;
};

randomBtn.onclick = function() {
    const randomStory = `${getRandomElement(nouns1)} ${getRandomElement(verbs)} ${getRandomElement(adjectives)} ${getRandomElement(nouns2)} ${getRandomElement(settings)}`; 
    storyDisplay.innerText = randomStory;
};

// Dynamically add student ID/Name
document.getElementById('studentId').innerText = '200555634/Mantej Singh';

/* Additional Task - Reset Button Functionality */
const resetBtn = document.getElementById('reset'); 
resetBtn.onclick = function() {
    chosenNoun1.innerText = '';
    chosenVerb.innerText = '';
    chosenAdjective.innerText = '';
    chosenNoun2.innerText = '';
    chosenSetting.innerText = '';
    storyDisplay.innerText = '';
};
