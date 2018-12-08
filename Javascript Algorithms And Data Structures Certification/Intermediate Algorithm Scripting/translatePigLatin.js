/*
 * Intermediate Algorithm Scripting: Pig Latin
 * 
 * Translate the provided string to pig latin.
 * 
 * Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
 * 
 * If a word begins with a vowel you just add "way" to the end.
 * 
 * Input strings are guaranteed to be English words in all lowercase.
 * 
 *** Conditions ***
 * translatePigLatin("california") should return "aliforniacay".
 * translatePigLatin("paragraphs") should return "aragraphspay".
 * translatePigLatin("glove") should return "oveglay".
 * translatePigLatin("algorithm") should return "algorithmway".
 * translatePigLatin("eight") should return "eightway".
 * Should handle words where the first vowel comes in the end of the word.
 * Should handle words without vowels.
 */ 

function translatePigLatin(str) {
  /*
   * If it starts with vowel add way at the end
   * else look for the consonants until the first vowel
   * exchange it with the rest of the word and add ay
   */
  if (str.charAt(0).match(/^[aeiou]/)) {
    return str.concat("way");
  } else {
    return str.replace(/(^[^aeiou]+)(.*)/, "$2$1ay");
  }
}
