/*
 * JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
 * 
 * Return true if the passed string looks like a valid US phone number.
 * 
 * The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
 * The following are examples of valid formats for US numbers (refer to the tests below for other variants):
 * 
 * 555-555-5555
 * (555)555-5555
 * (555) 555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 * 
 * For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
 * Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
 * The area code is required. If the country code is provided, you must confirm that the country code is 1. 
 * Return true if the string is a valid US phone number; otherwise return false.
 * 
 *** Assertion Tests ***
 * 
 * telephoneCheck("555-555-5555") should return a boolean.
 * telephoneCheck("1 555-555-5555") should return true.
 * telephoneCheck("1 (555) 555-5555") should return true.
 * telephoneCheck("5555555555") should return true.
 * telephoneCheck("555-555-5555") should return true.
 * telephoneCheck("(555)555-5555") should return true.
 * telephoneCheck("1(555)555-5555") should return true.
 * telephoneCheck("555-5555") should return false.
 * telephoneCheck("5555555") should return false.
 * telephoneCheck("1 555)555-5555") should return false.
 * telephoneCheck("1 555 555 5555") should return true.
 * telephoneCheck("1 456 789 4444") should return true.
 * telephoneCheck("123**&!!asdf#") should return false.
 * telephoneCheck("55555555") should return false.
 * telephoneCheck("(6054756961)") should return false
 * telephoneCheck("2 (757) 622-7382") should return false.
 * telephoneCheck("0 (757) 622-7382") should return false.
 * telephoneCheck("-1 (757) 622-7382") should return false
 * telephoneCheck("2 757 622-7382") should return false.
 * telephoneCheck("10 (757) 622-7382") should return false.
 * telephoneCheck("27576227382") should return false.
 * telephoneCheck("(275)76227382") should return false.
 * telephoneCheck("2(757)6227382") should return false.
 * telephoneCheck("2(757)622-7382") should return false.
 * telephoneCheck("555)-555-5555") should return false.
 * telephoneCheck("(555-555-5555") should return false.
 * telephoneCheck("(555)5(55?)-5555") should return false.
 */

function telephoneCheck(str) {

  /*
   * ^(1?\ ?\((?=\d{3}\))|1\ (?!.*\).*)|\d{3}(?!\d{8})(?!\)))
   * Looks for the following options at the beginning of the string:
	 *   	- "1 (", "1(" or "(" if there is 3 digits followed by ")" after.
	 *    - "1 " if there isn't ")" in the rest of the string.
   *  	- 3 digits if it's not followed by 8 digits or ")". 
   * (\d{3})?
   *  	- 3 digits or nothing.
   * [\-\ \)]{0,2}
	 *    - 0, 1 or 2 characters of the specified set "-", " " or ")".
   * \d{3}(?!.*\).*)
	 *    - 3 digits if there isn't ")" in the rest of the string.
   * [\-\ ]?
	 *    - 0 or 1 character of the specified set "-" or " ".
   * \d{4}$
	 *    - 4 digits at the end of the string.
   */
  return (/^(1?\ ?\((?=\d{3}\))|1\ (?!.*\).*)|\d{3}(?!\d{8})(?!\)))(\d{3})?[\-\ \)]{0,2}\d{3}(?!.*\).*)[\-\ ]?\d{4}$/).test(str);
}
