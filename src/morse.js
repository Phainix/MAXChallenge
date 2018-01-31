const MORSE_CODE = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': "'",
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS',
};

Object.freeze(MORSE_CODE);

/**
 * This is the entry point to the program.
 *
 * @param {string} morseCode The string to decode.
 */
function decodeMorse(morseCode) {
  if(morseCode === "") { //check for empty string
    return "";
  }
  else {
    var morseCode2 = myTrim(morseCode); // trim out empty spaces
    var morseWords = morseCode2.split('   '); // split morse code into array of morse words
    var decodedArray = [];
    for (var i = 0; i < morseWords.length; i++) { // loop for each word in array
      var word = "";
      var morse = morseWords[i];
      morse = myTrim(morse); // trim individual words
      var morseLetters = morse.split(' '); // split morse word into morse letters
      for (var j = 0; j < morseLetters.length; j++) {
        var letter = morseLetters[j];
        word += MORSE_CODE[letter];
      }
      decodedArray.push(word);
    }
    return decodedArray.join(' ');
  }
}

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

module.exports = decodeMorse;
