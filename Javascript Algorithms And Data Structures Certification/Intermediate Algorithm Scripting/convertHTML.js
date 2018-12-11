/*
 * Intermediate Algorithm Scripting: Convert HTML Entities
 * 
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 * 
 *** Assertion Tests ***
 * convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana.
 * convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos.
 * convertHTML("Sixty > twelve") should return Sixty &gt; twelve.
 * convertHTML('Stuff in "quotation marks"') should return Stuff in &quot;quotation marks&quot;.
 * convertHTML("Schindler's List") should return Schindler&apos;s List.
 * convertHTML("<>") should return &lt;&gt;.
 * convertHTML("abc") should return abc.
 */

function convertHTML(str) {
  // Regex for the entities
  var entRegex = new RegExp("[&<>\"']","g");

  // Object to keep the replacements
  var HTML = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };

  // Function to do the replacements
  function textToHtml(match) {
    return HTML[match];
  }

  // Return the replaced string
  return str.replace(entRegex, textToHtml);
}
